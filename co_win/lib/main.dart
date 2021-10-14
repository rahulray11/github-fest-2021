import 'package:co_win/Vaccination_Sessions/By_LAT_LONG.dart';
import 'package:co_win/Welcome_Screen.dart';
import 'package:flutter/material.dart';
import 'Vaccination_Sessions/By_Districts.dart';
import 'Vaccination_Sessions/By_PIN.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      routes: {
        Districts.id: (context) => Districts(),
        ByPIN.id: (context) => ByPIN(),
        ByLATLAN.id: (context) => ByLATLAN(),
      },
      home: Welcome_Screen(),
    );
  }
}
