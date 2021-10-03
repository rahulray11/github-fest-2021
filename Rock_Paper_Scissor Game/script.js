

const rpsGame = (yourChoice) => {
    console.log(yourChoice.id);

    const humanChoice=yourChoice.id;
    const botChoice=numberToChoice(randToRpsInt());
    
    console.log(botChoice);

    const results= decideWinner(humanChoice,botChoice); //[0,1] human lost ,bot win
    console.log(results);

    const message = finalMessage(results);//('message':'you won','color':'green')
    console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);


}



const randToRpsInt = () => {
    return Math.floor(Math.random()*3);
}

const numberToChoice = (number) => {
    return ['rock','paper','scissors'][number];
}

const decideWinner = (yourChoice, computerChoice) => {

    const rpsDataBase = {
        'rock':{'paper': 0,'rock':0.5,'scissors':1 },
        'paper':{'rock': 1,'paper':0.5,'scissors':0},
        'scissors':{'rock': 0,'scissors':0.5,'paper':1}
        //Also we can use if-else statements to do above one
    };//just an object

    const yourScore = rpsDataBase[yourChoice][computerChoice];
    const computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore,computerScore];

}


const finalMessage = ([yourScore, computerScore]) => {
    if (yourScore == 0) {
        return {'message':'You Lost','color':'red'};//Dictionary value
    } else if(yourScore==0.5){
        return {'message':'You Tied','color':'yellow'};
    } else {
        return {'message':'You Won','color':'green'};
    }
}

const rpsFrontEnd = (humanImageChoice,botImageChoice,finalMessage) => {
    const imageDataBase= {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    
    //let's remove the all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    const humanDiv = document.createElement('div');
    const botDiv = document.createElement('div');
    const messageDiv = document.createElement('div');

    humanDiv.innerHTML= "<img src='"+imageDataBase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color']+"; font-size:60px; padding:30px; '>"+finalMessage['message']+"</h2>"
    botDiv.innerHTML= "<img src='"+imageDataBase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
