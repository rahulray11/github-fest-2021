const countDownTimer = () =>{
    const baseDate = new Date("October 31, 2021 00:00:00").getTime();  // here update the date for the countdown-timer to set
    // console.log(baseDate);
    const currentDate = new Date().getTime();
    const timeDiff = baseDate-currentDate;
    
    //Converting time parts into milliseconds 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating the current time 
    
    const dayText = Math.floor(timeDiff / day);
    const hourText =  Math.floor((timeDiff % day)/hour);
    const minuteText = Math.floor((timeDiff % hour)/minute);
    const secondText = Math.floor((timeDiff % minute)/second);
    
    document.querySelector('.day').innerHTML = dayText;
    document.querySelector('.hour').innerHTML = hourText;
    document.querySelector('.minute').innerHTML = minuteText;
    document.querySelector('.second').innerHTML = secondText;
   
};


setInterval(countDownTimer, 1000);