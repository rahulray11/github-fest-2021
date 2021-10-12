import 'package:flutter/material.dart';
import 'package:co_win/constants.dart';

class FetchingDistrictiDs extends StatelessWidget {
  List DistrictsIDs = [];
  FetchingDistrictiDs({required this.DistrictsIDs});
  bool showSpinner = false;
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
                    itemCount: DistrictsIDs.length,
                    itemBuilder: (context, index) {
                      return Container(
                        height: 60.0,
                        padding: EdgeInsets.all(20),
                        margin: EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Colors.blue,
                          borderRadius: BorderRadius.circular(50.0),
                        ),
                        /*child: GestureDetector(
                          onTap: () {},*/
                        child: Row(
                          //  crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Text(
                                  DistrictsIDs[index]['district_name']
                                      .toString(),
                                  style: kResultTextStyling),
                            ),
                            Expanded(
                              child: Text(
                                DistrictsIDs[index]['district_id'].toString(),
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
