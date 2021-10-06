import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Show from './Show';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
function App() {
  const [city,setCity]=useState();
  const [data,setData] = useState('delhi');
  const [weather, setWeather] = useState();
  const [response,setResponse] = useState();
  useEffect(
    ()=>{
       const  f = async ()=>{
        const apikey= '3265874a2c77ae4a04bb96236a642d2f';
         const api= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
        
         axios.get(api).then(res => {
          //  console.log(res);
             setResponse(res);
      }).catch(err => {
        console.log('eror');
        setResponse(undefined);
    })
         
        
     
      
         
        
      } 
      f();
      
    }
  ,[city]);
  useEffect( ()=>{
    console.log(city);
    console.log(response);

    if (response===undefined){
        setData(undefined);
         setWeather(undefined);
    }
    else {
        setData(response.data.main);
         setWeather( (response.data.weather));
    }

  },[response]);
  return (
    <div className="App">
          
          
          <div className="wrapper">
             <div className="wave"></div>
                 <div className='input-area'>
                    <input type='text' placeholder='Enter city' onChange={(e)=>{setCity(e.target.value); } }  />
                 </div>  
                 { ( data===undefined || weather===undefined)  ?(
                   (city!=null) ?
                   <div className='no'>Not found  <SentimentVeryDissatisfiedIcon style={{fontSize:'5rem'}}/></div>
                   : 
                   <div className='no'> <div className='welcome'>Welcome <EmojiPeopleIcon style={{fontSize:'5rem'}} /> </div>
                   <br></br>
                      <div className='enter'>
                      Enter city
                      </div>
                    </div>
                   
                   )
                   
                    :(
                   <Show  city={city} temp={data.temp} minTemp={data.temp_min} maxTemp={data.temp_max} weather={weather[0].main} />
                 )}  
                 
              
          </div>
         
          <div className='author'>By <a href='https://ishubhamrana.github.io/' target='_blank'>Shubham Rana</a></div>  
    </div>
  );
}

export default App;
