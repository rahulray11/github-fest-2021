import 'package:co_win/Vaccination_Sessions/By_PIN.dart';
import 'package:co_win/Vaccination_Sessions/By_Districts.dart';
import 'package:co_win/constants.dart';
import 'package:flutter/material.dart';
import 'Rounded_Button.dart';
import 'package:co_win/Vaccination_Sessions/By_LAT_LONG.dart';

class Welcome_Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Color(0xFFFFFFFF),
        appBar: AppBar(
          backgroundColor: Colors.lightBlueAccent,
          title: Text(
            'CO-WIN',
            style: TextStyle(
                fontSize: 20.0,
                color: Colors.white,
                fontWeight: FontWeight.w700,
                fontFamily: 'Lora'),
          ),
        ),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: Container(
                width: double.infinity,
                height: 200.0,
                child: Image(
                  image: AssetImage('images/modi.jpeg'),
                ),
              ),
            ),
            Container(
              child: Text(
                'VACCINATION DRIVE',
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontFamily: 'Lora',
                    fontSize: 30.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.lightBlueAccent),
              ),
            ),
            Container(
              child: Text(
                'BY GOVERNMENT OF INDIA',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: 'Source Sans Pro',
                  fontSize: 16.0,
                  fontWeight: FontWeight.w600,
                  color: Colors.lightBlueAccent,
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Container(
              child: Text(
                'BOOK VACCINATION SLOT FOR YOU AND YOUR FAMILY',
                textAlign: TextAlign.center,
                style: kSmallTextStyling,
              ),
            ),
            Row(
              children: [
                SizedBox(
                  width: 20.0,
                ),
                Expanded(
                  child: RoundedButton(
                    colour: Colors.lightBlueAccent,
                    text: 'By District ID',
                    onPressed: () {
                      Navigator.pushNamed(context, Districts.id);
                    },
                  ),
                ),
                SizedBox(
                  width: 10.0,
                ),
                Expanded(
                  child: RoundedButton(
                    colour: Colors.lightBlueAccent,
                    text: 'By PINCODE',
                    onPressed: () {
                      Navigator.pushNamed(context, ByPIN.id);
                    },
                  ),
                ),
                SizedBox(
                  width: 20.0,
                ),
              ],
            ),
            Container(
              margin: EdgeInsets.only(left: 105.0, right: 105.0),
              child: RoundedButton(
                colour: Colors.lightBlueAccent,
                text: 'By Latitude-Longitude',
                onPressed: () {
                  Navigator.pushNamed(context, ByLATLAN.id);
                },
              ),
            ),
            Expanded(
              child: Hero(
                  tag: 'Emblem',
                  child: Image(
                    image: AssetImage('images/National emblem.jpeg'),
                  )),
            )
          ],
        ),
      ),
    );
  }
}
