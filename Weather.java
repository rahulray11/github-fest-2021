/*

   *Get a live weather status of given city*

    Give the city name in the input.

    Example:

        Chennai

*/

import java.net.*;

import java.io.*;

import java.util.*;

import java.util.Map.*;

import java.util.regex.*;

public class WeatherApp

{

    public static void showWeather(String location){

        String key="1516fe41c920442babd110027200105&q="+location;

        String url="http://api.weatherapi.com/v1/current.json?key="+key;

        

        try{

            URL uh=new URL(url);

            BufferedReader bf=new BufferedReader(new InputStreamReader(uh.openStream()));

            String json;

            json=bf.readLine();

            

            String data[]=json.split(",");

            Map<String,String> map=new HashMap<String,String>();

            for(int i=1;i<data.length;i++){

                if(Pattern.compile(".region*").matcher(data[i]).find()){

                data[i]=data[i].substring(data[i].indexOf(":")+1,data[i].length());

                    map.put("Region",data[i]);

                }

                else if(Pattern.compile(".country*").matcher(data[i]).find()){

               data[i]=data[i].substring(data[i].lastIndexOf(":")+1,data[i].length());

                    map.put("Country",data[i]);

                }

                else if(Pattern.compile(".localtime[^a-z]*").matcher(data[i]).find()){

                    data[i]=data[i].substring(data[i].indexOf(":")+1,data[i].length()-1);

                    map.put("Localtime",data[i]);

                }

                else if(Pattern.compile(".temp_c.").matcher(data[i]).find()){

                data[i]=data[i].substring(data[i].lastIndexOf(":")+1,data[i].length());

                    map.put("Temperature(Celcius)",data[i]);

                }

                else if(Pattern.compile(".*temp_f*").matcher(data[i]).find()){

                data[i]=data[i].substring(data[i].lastIndexOf(":")+1,data[i].length());

                    map.put("Temperature (Fahrenheit)",data[i]);

                }

                else if(Pattern.compile(".is_day*").matcher(data[i]).find()){

                    if(data[i].charAt(data[i].length()-1) == '1')

                        map.put("Day/Night","Day");

                    else

                        map.put("Day/Night","Night");

                }

                else if(Pattern.compile(".*text*").matcher(data[i]).find()){

                    data[i]=data[i].substring(data[i].lastIndexOf(':')+1,data[i].length());

                    map.put("Condition",data[i]);

                }

                else{

                        continue;

                }

            }

            for(Entry<String,String> e:map.entrySet()){

                System.out.println(e.getKey()+" : "+e.getValue()+"\n");

            }

            

        }

        catch(Exception e){

            e.printStackTrace();

        }

        

    }

    public static void main(String[] args) throws Exception {

        System.out.print("Enter a city name : ");

        String location=new Scanner(System.in).nextLine();

        System.out.println("\n\n\t\t\t\t=======================");

        System.out.println("\t\t\t\t|| Live Weather Info ||");

        System.out.println("\t\t\t\t=======================\n\n");

        System.out.println("Given location : "+location+"\n\n");

        showWeather(location);

    }

}
