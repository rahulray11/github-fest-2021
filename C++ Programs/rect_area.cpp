#include <iostream>
#include <cmath>
using namespace std;

/**
 * Get an input from cin, checking that is a float and is positive
 *
 * @param message message that the user will visualize before the input.
 * @param output reference where the input will be saved.
 */
void safe_input(const string message, float &output)
{
    cout << message;
    cin >> output;
    while (!cin && output < 0)
    {
        cout << "Invalid value. Try again: ";
        cin.clear();
        cin.ignore(64, '\n');
        cin >> output;
    }
}

int main()
{
    float width, height;
    safe_input("Enter width of rectangle: ", width);
    safe_input("Enter heigth of rectangle: ", height);

    cout << endl;
    float perimeter = 2 * (width + height);
    float area = width * height;

    cout << "Perimeter of rectangle = " << perimeter << endl;
    cout << "Area of rectangle = " << area << endl;

    return 0;
}
