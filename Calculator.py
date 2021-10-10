import sys

import codecs

import unittest

from itertools import groupby

from cmath import (

    sin, asin, sinh, asinh,

    cos, acos, cosh, acosh,

    tan, atan, tanh, atanh,

    sqrt, pi, e,

)

from math import (

    gamma, factorial, radians,

    gcd, ceil, floor, log, log10

)

sys.stdout = codecs.getwriter('utf_16')(

    sys.stdout.buffer, 'strict'

)

class UnknownFunctionError(Exception):

    pass

class Token:

    def __init__(self, t):

        self.t = t

    def __repr__(self):

        return type(self).__name__ + '("' + self.t + '")'

    def __eq__(self, other):

        return self.__class__ is other.__class__ and self.t == other.t

class UpArrow(Token):

    def __init__(self):

        self.t = '|'

class Func(Token):

    def __init__(self, t, arg_count=0):

        if t not in FUNCS:

            raise UnknownFunctionError(f'Function {t} is not defined')

        self._func = FUNCS[t]

        self.arg_count = arg_count

        self.t = t

    def __call__(self, *a):

        return self._func(*a)

class Op(Token):

    def __init__(self, t, func=None):

        self._func = func

        self.t = t

    def __call__(self, *a):

        return self._func(*a)

class UpArrowOp(UpArrow):

    def __init__(self, count):

        self.count = count

        self.t = '|'

    def __call__(self, left, right, count=None):

        count = count or self.count

        if count == 1:

            return left ** right

        elif right == 1:

            return left

        elif left == 0:

            return 1

        return self(left, self(left, right - 1, count), count - 1)

class Digit(Token):

    def __str__(self):

        return self.t

class Char(Token):

    def __str__(self):

        return self.t

OP_PREC = {

    '+': 1, '-': 1,

    '*': 2, '/': 2, 

    '^': 3, '#': 3,

    '|': 3,

    

}

DIGITS = '0123456789.j'

OPS = '()-+/*^°,!#%|'

OP_FUNCS = {

    '-': lambda a, b: a - b,

    '+': lambda a, b: a + b,

    '*': lambda a, b: a * b,

    '/': lambda a, b: a / b,

    '^': pow,

}

FUNCS = (

    'sin', 'asin', 'sinh', 'asinh',

    'cos', 'acos', 'cosh', 'acosh',

    'tan', 'atan', 'tanh', 'atanh',

    'sqrt', 'log', 'log10', 'gamma',

    'factorial', 'radians', 'min',

    'max', 'gcd', 'ceil', 'floor',

    'round',

)

FUNCS = dict(zip(FUNCS, (

    sin, asin, sinh, asinh,

    cos, acos, cosh, acosh,

    tan, atan, tanh, atanh,

    sqrt, log, log10, gamma,

    factorial, radians, min,

    max, gcd, ceil, floor,

    round,

)))

CONSTS = {'e': e, 'pi': pi}

def tokenize(expr):

    lst = []

    parens = 0

    for n in expr.lower():

        if n in DIGITS:

            if lst and lst[-1].t == ')':

                # (a+b)c -> (a+b)*c

                lst.append(Op('*', OP_FUNCS['*']))

            lst.append(Digit(n))

        elif n in OPS:

            if n == '|':

                lst.append(UpArrow())

                continue

            if n == '%':

                lst.extend([Op('/', OP_FUNCS['/']), 100.0 + 0j])

                continue

            if n == '(':

                parens += 1

            elif n == ')':

                if not parens:

                    return None

                parens -= 1

            if n == '-' and (not lst or lst[-1].t not in DIGITS + ')'): #unary minus

                lst.append(Op('#'))

                continue

            if lst and lst[-1].t in '+-/*^' and n not in '()':

                #Remove last item if last item is Op and current item is not unary minus

                lst.pop()

            elif lst and (n == '(' and (isinstance(lst[-1], Digit) or lst[-1].t == ')')):

                lst.append(Op('*', OP_FUNCS['*']))

   

            lst.append(Op(n, OP_FUNCS.get(n)))

        elif not n.isspace():

            if lst and isinstance(lst[-1], Digit):

                lst.append(Op('*', OP_FUNCS['*']))

            lst.append(Char(n))

    for i in range(parens):

        lst.append(Op(')'))

    tokens = []

    for k, v in groupby(lst, key=type):

        if k is Digit:

            n = ''.join(map(str, v))

            try:

                tokens.append(float(n))

            except:

                tokens.append(complex(n))

        elif k is Char:

            t = ''.join(map(str, v))

            if t in CONSTS:

                tokens.append(CONSTS[t])

            else:

                tokens.append(Func(t))

        elif k is UpArrow:

            count = len(list(v))

            tokens.append(UpArrowOp(count))

        else:

            tokens.extend(v)

    return tokens

def parse(tokens):

    #https://blog.kallisti.net.nz/2008/02/extension-to-the-shunting-yard-algorithm-to-allow-variable-numbers-of-arguments-to-functions/

    if tokens is None:

        return None

    out = []

    ops = []

    were_values = []

    arg_count = []

    for token in tokens:

        if isinstance(token, (complex, float)):

            if were_values:

                were_values[0] = True

            out.append(token)

        elif type(token) is Func:

            ops.insert(0, token)

            arg_count.insert(0, 0)

            if were_values:

                were_values[0] = True

            were_values.insert(0, False)

        else:

            if token.t == ',':

                while ops[0].t != '(':

                    out.append(ops.pop(0))

                if were_values.pop(0) is True:

                    arg_count[0] += 1

                were_values.insert(0, False)

            elif token.t == '!':

                ops.insert(0, Func('factorial', 1))

            elif token.t == '°':

                ops.insert(0, Func('radians', 1))

            elif token.t == '(':

                ops.insert(0, token)

            elif token.t == ')':

                while ops[0].t != '(':

                    out.append(ops.pop(0))

                ops.pop(0)

                if ops and isinstance(ops[0], Func):

                    f = ops.pop(0)

                    a = arg_count.pop(0) + 1

                    were_values.insert(0, False)

                    f.arg_count = a

                    out.append(f)

            else:

                while (ops and ops[0].t != '(') and (type(ops[0]) is Func or (OP_PREC[token.t] <= OP_PREC[ops[0].t] and not (token.t in '^#|' and ops[0].t in '^#|'))):

                    out.append(ops.pop(0))

                ops.insert(0, token)

    out.extend(ops)

    return out

def eval_(expr, test=True):

    #https://en.m.wikipedia.org/wiki/Reverse_Polish_notation

    if test is False:

        print(expr, end=' = ')

    tokens = tokenize(expr)

    #print(tokens)

    rpn = parse(tokens)

    #print(rpn)

    if rpn is None:

        return 'Error'

    stack = []

    for i in rpn:

        if isinstance(i, (complex, float)):

            stack.append(i)

        elif type(i) is Func:

            slc = slice(-i.arg_count, None, 1)

            args = stack[slc]

            del stack[slc]

            stack.append(i(*args))

        else:

            if i.t == '#':

                stack.append(-stack.pop())

                continue

            try:

                o1 = stack.pop()

                o2 = stack.pop()

            except IndexError:

                return 'Error'

            stack.append(i(o2, o1))

    out = stack[0]

    if abs(round(out.real) - out.real) < 1e-10:

        out = complex(round(out.real), out.imag)

    if abs(round(out.imag) - out.imag) < 1e-10:

        out = complex(out.real, round(out.imag))

    if out.imag == 0:

        out = out.real

        if out.is_integer():

            out = int(out)

    return out

class Test(unittest.TestCase):

    def test_tokenize(self):

        cases = {

            '5!': [5.0, Op('!')],

            '(5!+22) * 3': [Op('('), 5.0, Op('!'), Op('+'), 22.0, Op(')'), Op('*'), 3.0],

            'sin(90°)': [Func('sin'), Op('('), 90.0, Op('°'), Op(')')],

        }

        inps = map(tokenize, cases.keys())

        outs = list(cases.values())

        self.assertSequenceEqual(

            list(inps), outs

        )

    def test_parse(self):

        cases = {

            '5+3': [5.0, 3.0, Op('+')],

            '(5+3) * 2': [5.0, 3.0, Op('+'), 2.0, Op('*')],

            '5 + 3 * 2': [5.0, 3.0, 2.0, Op('*'), Op('+')],

        }

        inps = map(

            lambda k: parse(tokenize(k)),

            cases.keys()

        )

        outs = list(cases.values())

        self.assertSequenceEqual(

            list(inps), outs

        )

    def test_eval_(self):

        cases = {

            'SiN(90°)': 1,

            'sin(pi/2)': 1,

            '1+(2*(2+1)+2-(3*2)+1)': 4,

            '6/2*3': 9,

            'tan(radians(45))': 1,

            'cos(0)': 1,

            '2^-3*4': 0.5,

            '-2 ^ 2': -4,

            '(-2) ^ 2': 4,

            '0.02(0.02)': 0.0004,

            '2 + 4': 6,

            '-2 + -4': -6,

            'sqrt(4)': 2,

            'sqrt(-4)': 2j,

            '4 + -2': 2,

            '2sin(90°)': 2,

            'max(2, 3, 4, log(64, 2))': 6,

            '6 * 3%': 0.18,

            '1 + 1%': 1.01,

            '((1 + 1))%': 0.02,

            '3|3': 27,

            '2||3': 16,

            '2|||||1': 2,

            '562||||||||||||1': 562,

            '2|2|2': 16,

            '2|(2||3/4)': 16,

            '2|5': 32,

            '3|4': 81,

            '2|||3': 2**16,

            '2|sin(90°)': 2,

            '2sin(45° + (30 + 15)°)': 2,

        }

        inps = map(eval_, cases.keys())

        outs = list(cases.values())

        self.assertSequenceEqual(

            list(inps), outs

        )

        self.assertRaises(

            UnknownFunctionError,

            lambda: eval_('unkfunc(123)')

        )

    def test_op_override(self):

        cases = {

            '2*-2': -4,

            '2/-2': -1,

            '2+*4': 8,

            '4*+2': 6,

            '4/+4': 8,

            '2^+6': 8,

            '2-^3': 8,

        }

        

        inps = map(eval_, cases.keys())

        outs = list(cases.values())

        self.assertSequenceEqual(

            list(inps), outs

        )

    def test_paren_autocomplete(self):

        cases = {

            '(2': 2,

            '(2(2 + 3)': 10,

            '(2(2+6': 16,

            '2)': 'Error',

            '2+3)2': 'Error',

        }

        inps = map(eval_, cases.keys())

        outs = list(cases.values())

        self.assertSequenceEqual(

            list(inps), outs

        )

i = input() or None

if i is None:

    unittest.main()

else:

    print(eval_(i, test=False))
