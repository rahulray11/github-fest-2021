import 'package:co_win/Vaccination_Sessions/Results_By_PIN.dart';
import 'package:co_win/constants.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';

class ByPIN extends StatefulWidget {
  static const String id = 'PIN_id';

/*
  Future getStateIdData() async {
    http.Response response = await http.get(Uri.parse(
        'https://cdndemo-api.co-vin.in/api/v2/appointment/sessions/findByDistrict?district_id=512&date=31-03-2021&vaccine=COVISHIELD'));
    if (response.statusCode == 200) {
      var decodedData = jsonDecode(response.body);
      xyz = await decodedData['sessions'][0]['name'];
      return xyz;
    } else {
      print(response.statusCode);
    }
  }*/
  @override
  _ByPINState createState() => _ByPINState();
}

class _ByPINState extends State<ByPIN> {
  List slots = [];
  var pincode;
  var date;
  final fieldPincode = TextEditingController();
  final fieldDate = TextEditingController();
  void clearText() {
    fieldPincode.clear();
    fieldDate.clear();
  }

  fetchslots(var pin) async {
    await http
        .get(Uri.parse(
            'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=$pincode&date=$date'))
        .then(
      (value) {
        Map result = jsonDecode(value.body);
        setState(() {
          slots = result['sessions'];
        });
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => ResultsByPIN(slots: slots)),
        );
        //print(slots);
      },
    );
  }

  bool showSpinner = false;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          resizeToAvoidBottomInset: false,
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
          body: ModalProgressHUD(
            inAsyncCall: showSpinner,
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Center(
                    child: Container(
                      child: Hero(
                        tag: 'Emblem',
                        child: Image(
                          image: AssetImage('images/National emblem.jpeg'),
                        ),
                      ),
                      height: 200.0,
                    ),
                  ),
                  SizedBox(
                    height: 20.0,
                  ),
                  Text(
                    'SEARCH VACCINATION SLOTS BY ENTERING THE PINCODE',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.w700,
                        color: Colors.lightBlueAccent),
                  ),
                  SizedBox(
                    height: 15.0,
                  ),
                  TextField(
                    textAlign: TextAlign.center,
                    decoration: kTextFeildStyling.copyWith(
                        hintText: 'Enter the Pincode here '),
                    controller: fieldPincode,
                    onChanged: (newValue) {
                      pincode = newValue;
                    },
                    keyboardType: TextInputType.number,
                  ),
                  SizedBox(
                    height: 15.0,
                  ),
                  TextField(
                    textAlign: TextAlign.center,
                    decoration: kTextFeildStyling.copyWith(
                        hintText: 'Enter the Date here (dd-mm-yyyy) '),
                    controller: fieldDate,
                    onChanged: (newValue) {
                      date = newValue;
                    },
                    keyboardType: TextInputType.datetime,
                  ),
                  SizedBox(
                    height: 15.0,
                  ),
                  Material(
                    color: Colors.lightBlueAccent,
                    borderRadius: BorderRadius.circular(30.0),
                    elevation: 5,
                    child: MaterialButton(
                      onPressed: () async {
                        clearText();
                        setState(() {
                          //fetchslots(pincode);
                          showSpinner = true;
                        });
                        try {
                          if (pincode != null) {
                            fetchslots(pincode);
                          }
                          setState(() {
                            showSpinner = false;
                          });
                        } catch (e) {
                          print(e);
                        }
                      },
                      minWidth: 200.0,
                      height: 42.0,
                      child: Text(
                        'SEARCH',
                        style: TextStyle(
                          color: Colors.white,
                        ),
                      ),
                    ),
                  )
                ],
              ),
            ),
          )

          /*SingleChildScrollView(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [

                */ /*StateIdInfo(
                  staetId: State_id,
                )*/ /*
              ],
            ),
          ),
        ),*/
          ),
    );
  }
}
