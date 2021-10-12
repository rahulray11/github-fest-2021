import 'package:flutter/material.dart';

class RoundedButton extends StatelessWidget {
  final Color colour;
  final String text;
  final Function onPressed;

  RoundedButton({
    required this.colour,
    required this.text,
    required this.onPressed,
  });
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: Material(
        color: colour,
        borderRadius: BorderRadius.circular(30.0),
        elevation: 5.0,
        child: MaterialButton(
          onPressed: () {
            onPressed();
          },
          minWidth: 200.0,
          height: 42.0,
          child: Text(
            text,
            style: TextStyle(
              color: Colors.white,
              fontFamily: 'Source Sans Pro',
            ),
          ),
        ),
      ),
    );
  }
}
