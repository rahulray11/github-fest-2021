import 'package:flutter/material.dart';
import 'package:co_win/constants.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:co_win/ID_s/District_IDs.dart';
//import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';

class FetchingStateIDs extends StatefulWidget {
  List StateID = [];

  FetchingStateIDs({required this.StateID});

  @override
  _FetchingStateIDsState createState() => _FetchingStateIDsState();
}

class _FetchingStateIDsState extends State<FetchingStateIDs> {
  List DistrictsID = [];
  var IDState;
  var Dis;
  fetchDistrictsIDs(var ID) async {
    await http
        .get(Uri.parse(
            'https://cdn-api.co-vin.in/api/v2/admin/location/districts/$ID'))
        .then(
      (value) {
        Map result = jsonDecode(value.body);
        setState(() {
          DistrictsID = result['districts'];
        });
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) =>
                FetchingDistrictiDs(DistrictsIDs: DistrictsID),
          ),
        );
        //print(slots);
      },
    );
  }

  //bool showSpinner = false;
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
                'CLICK ON THE STATE TO FIND THE DISTRICT ID',
                style: TextStyle(
                    color: Colors.red,
                    fontWeight: FontWeight.w700,
                    fontFamily: 'Lora'),
              ),
              Expanded(
                child: Container(
                  padding: EdgeInsets.all(10),
                  height: MediaQuery.of(context).size.height,
                  width: MediaQuery.of(context).size.width,
                  /*decoration: BoxDecoration(
                    color: Colors.blue,
                    borderRadius: BorderRadius.circular(20.0),
                  ),*/
                  child: ListView.builder(
                    itemCount: widget.StateID.length,
                    itemBuilder: (context, index) {
                      return Container(
                        height: 60.0,
                        padding: EdgeInsets.all(20),
                        margin: EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Colors.blue,
                          borderRadius: BorderRadius.circular(50.0),
                        ),
                        child: GestureDetector(
                          onTap: () async {
                            setState(() {
                              IDState = widget.StateID[index]['state_id'];
                              fetchDistrictsIDs(IDState);
                              //showSpinner = true;
                            });
                            /*try {
                                IDState = widget.StateID[index]['state_id'];
                                Dis = DistrictsID[index]['district_id'];
                                if (Dis != null) {
                                  fetchDistrictsIDs(IDState);
                                }
                                setState(() {
                                  showSpinner = false;
                                });
                              } catch (e) {
                                print(e);
                              }*/
                          },
                          child: Row(
                            //  crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Expanded(
                                child: Text(
                                    widget.StateID[index]['state_name']
                                        .toString(),
                                    style: kResultTextStyling),
                              ),
                              Expanded(
                                child: Text(
                                  widget.StateID[index]['state_id'].toString(),
                                  style: kResultTextStyling,
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ),
            ],
          )),
    );
  }
}
