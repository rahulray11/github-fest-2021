import 'package:co_win/constants.dart';
import 'package:flutter/material.dart';

class ResultsByLATLAN extends StatefulWidget {
  static String id = 'ResultsByLATLAN';
  final List slots;
  ResultsByLATLAN({required this.slots});
  @override
  _ResultsByLATLANState createState() => _ResultsByLATLANState();
}

class _ResultsByLATLANState extends State<ResultsByLATLAN> {
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
                        height: 500.0,
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
                                    widget.slots[index]['location'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'District Name - ' +
                                    widget.slots[index]['district_name']
                                        .toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'State Name - ' +
                                    widget.slots[index]['state_name']
                                        .toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                'PINCODE - ' +
                                    widget.slots[index]['pincode'].toString(),
                                style: kResultTextStyling,
                              ),
                            ),
                            kDividerConst,
                            Expanded(
                              child: Text(
                                  'Block Name - ' +
                                      widget.slots[index]['block_name']
                                          .toString(),
                                  style: kResultTextStyling),
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
