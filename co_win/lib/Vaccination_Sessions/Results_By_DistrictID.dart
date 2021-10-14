import 'package:co_win/constants.dart';
import 'package:flutter/material.dart';

class ResultsByDistrictID extends StatefulWidget {
  static String id = 'ResultsByDistrictID';
  final List slots;

  ResultsByDistrictID({required this.slots});

  @override
  _ResultsByDistrictIDState createState() => _ResultsByDistrictIDState();
}

class _ResultsByDistrictIDState extends State<ResultsByDistrictID> {
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
                    itemCount: widget.slots.length,
                    itemBuilder: (context, index) {
                      return Container(
                        height: 350.0,
                        padding: EdgeInsets.all(10),
                        margin: EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Colors.blue,
                          borderRadius: BorderRadius.circular(30.0),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: Text(
                                  'Center ID - ' +
                                      widget.slots[index]['center_id']
                                          .toString(),
                                  style: kResultTextStyling),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Center Name - ' +
                                    widget.slots[index]['name'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Center Address - ' +
                                    widget.slots[index]['address'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Vaccine Name - ' +
                                    widget.slots[index]['vaccine'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Slots - ' +
                                    widget.slots[index]['slots'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Fee Type - ' +
                                    widget.slots[index]['fee_type'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                  'Fee Type - ' +
                                      widget.slots[index]['fee'].toString(),
                                  style: kResultTextStyling),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Total Vaccine Doses Available - ' +
                                    widget.slots[index]['available_capacity']
                                        .toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Vaccine Doses Available For Dose1 - ' +
                                    widget.slots[index]
                                            ['available_capacity_dose1']
                                        .toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'Vaccine Doses Available For Dose2 - ' +
                                    widget.slots[index]
                                            ['available_capacity_dose2']
                                        .toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                          ],
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
