const images=["dice1","dice2","dice3","dice4","dice5","dice6"]
function random(){
    const index=Math.floor(Math.random()*6);
    
    const index2=Math.floor(Math.random()*6);
    document.querySelector('.img1').src='images/'+images[index]+'.png';
    document.querySelector('.img2').src='images/'+images[index2]+'.png';
    // if(index>index2){
    //     alert('Player 1 won !!!')

    // }
    // else if(index2>index){
    //     alert('Player 2 won !!!');
    // }
    // else{
    //     alert('Its a Draw');
    // }
}    
const submit=document.querySelector(".submit");
submit.addEventListener('click',()=>{
    random();
})
