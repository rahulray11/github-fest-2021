import 'package:co_win/Vaccination_Sessions/By_PIN.dart';
import 'package:co_win/constants.dart';
import 'package:flutter/material.dart';
import 'package:co_win/Rounded_Button.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:co_win/ID_s/State_IDs.dart';
import 'package:co_win/Vaccination_Sessions/Results_By_DistrictID.dart';
import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class Districts extends StatefulWidget {
  static String id = 'Districts';

  @override
  _DistrictsState createState() => _DistrictsState();
}

class _DistrictsState extends State<Districts> {
  List StateIDs = [];

  List slots = [];
  var DistrictID;
  var date;
  final fieldDistrictID = TextEditingController();
  final fieldDate = TextEditingController();
  bool showSpinner = false;
  void clearText() {
    fieldDistrictID.clear();
    fieldDate.clear();
  }

  fetchslotsByDistrictID(var DID, var DATE) async {
    await http
        .get(Uri.parse(
            'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=$DID&date=$DATE'))
        .then(
      (value) {
        Map result = jsonDecode(value.body);
        setState(() {
          slots = result['sessions'];
        });
        Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) => ResultsByDistrictID(slots: slots)),
        );
        //print(slots);
      },
    );
  }

  fetchStateIDs() async {
    await http
        .get(
            Uri.parse('https://cdn-api.co-vin.in/api/v2/admin/location/states'))
        .then(
      (value) {
        Map result = jsonDecode(value.body);
        setState(() {
          StateIDs = result['states'];
        });
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => FetchingStateIDs(StateID: StateIDs)));
        //print(slots);
      },
    );
  }

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
                  'SEARCH VACCINATION SLOTS BY DISTRICT ID',
                  style: kSmallTextStyling,
                ),
                SizedBox(
                  height: 20.0,
                ),
                TextField(
                  controller: fieldDistrictID,
                  keyboardType: TextInputType
                      .number, //this will make the keyboard suitable for typing the email.We can make the keyboard suitable for a particular user operation by keyword => keyBoard:TextInputType.
                  textAlign: TextAlign
                      .center, //this will aiiogn the text or any data entering in the textfeild align in the center
                  onChanged: (newValueID) {
                    //Do something with the user input.
                    DistrictID = newValueID;
                  },
                  decoration: kTextFeildStyling.copyWith(
                      hintText: 'Enter Your District iD'),
                ),
                SizedBox(
                  height: 20.0,
                ),
                TextField(
                  controller: fieldDate,
                  keyboardType: TextInputType
                      .datetime, //this will make the keyboard suitable for typing the email.We can make the keyboard suitable for a particular user operation by keyword => keyBoard:TextInputType.
                  textAlign: TextAlign
                      .center, //this will aiiogn the text or any data entering in the textfeild align in the center
                  onChanged: (newValueDate) {
                    //Do something with the user input.
                    date = newValueDate;
                  },
                  decoration: kTextFeildStyling.copyWith(
                      hintText: 'Enter the Date here (dd-mm-yyyy)'),
                ),
                SizedBox(
                  height: 20.0,
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
                        if (DistrictID != null && date != null) {
                          fetchslotsByDistrictID(DistrictID, date);
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
                ),
                SingleChildScrollView(
                  child: Row(
                    children: [
                      SizedBox(
                        width: 10.0,
                      ),
                      Expanded(
                        child: Text(
                          'TO FIND YOUR DISTRICT iD  ',
                          style: kSmallTextStyling,
                        ),
                      ),
                      Expanded(
                        child: RoundedButton(
                          colour: Colors.lightBlueAccent,
                          text: 'CLICK HERE',
                          onPressed: () async {
                            // fetchStateIDs();
                            setState(() {
                              showSpinner = true;
                            });
                            try {
                              if (DistrictID == null && date == null) {
                                fetchStateIDs();
                              }

                              //  showSpinner = true;   when we write like this it wil show spinner while loading and when we come back that spineer will be there only i.e spinner will be at rotating position only
                              setState(() {
                                showSpinner = false;
                              });
                            } catch (e) {
                              print(e);
                            }
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
