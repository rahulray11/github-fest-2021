import 'package:flutter/material.dart';

const kSmallTextStyling = TextStyle(
    color: Colors.lightBlueAccent,
    fontSize: 17.0,
    fontWeight: FontWeight.w700,
    fontFamily: 'Lora');
const kTextFeildStyling = InputDecoration(
  hintText: 'Enter The Value.',
  fillColor: Colors.black,
  contentPadding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
  border: OutlineInputBorder(
    borderRadius: BorderRadius.all(Radius.circular(32.0)),
  ),
  enabledBorder: OutlineInputBorder(
    borderSide: BorderSide(color: Colors.lightBlueAccent, width: 1.0),
    borderRadius: BorderRadius.all(Radius.circular(32.0)),
  ),
  focusedBorder: OutlineInputBorder(
    borderSide: BorderSide(color: Colors.lightBlueAccent, width: 2.0),
    borderRadius: BorderRadius.all(Radius.circular(32.0)),
  ),
);

const kDividerConst = Expanded(
  child: Divider(
    height: 10.0,
    color: Colors.black,
    thickness: 0.5,
  ),
);

const kResultTextStyling = TextStyle(
    fontSize: 16.0,
    color: Colors.white,
    fontFamily: 'Lora',
    fontWeight: FontWeight.w600);
