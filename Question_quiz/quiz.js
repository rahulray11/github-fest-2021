var questions=[
    {
        key:1,
    question:"CSS stands for -",
    options: [ "Cascade style sheets",
               "Color and style sheets",
                "Cascading style sheets",
                "None of the above"],
    right_answer: "Cascading style sheets"
  },
  {
    key:2,
    question:"what is the full form of HTML",
    options: [ "high markup language",
                "hyper text mockup language",
                "hyper text markup language",
                "none of the above" 
              ],
    right_answer: "hyper text markup language"
    },
   
    
];


var main_heading=document.getElementById("main_heading");
var question_container=document.getElementById("question_container");
var question_title=document.getElementById("question_title");
var option_list=document.getElementById("option_list");
var result=document.getElementById("result");
var submit=document.getElementById("submit");
var next=document.getElementById("next");
var key=document.getElementById("key");
var question_key=document.getElementById("question_key");
var restart_button=document.getElementById("restart_button");

var score=0;
 var current_question=0;
function create_question()
{
 var question=questions[current_question];
 question_title.innerText=question.question;
 question.options.forEach(function(option)
 {
    main_heading.innerText="QUIZ";
     next.style.display="none";
     var input=document.createElement("input");
     input.setAttribute("type","radio");
     input.setAttribute("name","option");
     input.setAttribute("value",option);
     var li=document.createElement("li");
     
     var label=document.createElement("label");
     label.innerText=option;
     li.appendChild(input);
     li.appendChild(label);
     option_list.appendChild(li);
 })
}
create_question();

submit.addEventListener("click",function()
{
   
   var checked_answer="";
   var option_radio=document.getElementsByName("option");
   option_radio.forEach(function(option,index)
   {
       if(option.checked)
       {
       checked_answer=index;
       }
   });
   var selected_answer1=option_radio[checked_answer];
   
   if(selected_answer1==undefined)
   {
       alert("hey");
       return;
   }
   var selected_answer=selected_answer1.value;
  
   var is_right=questions[current_question].right_answer==selected_answer;
   if(is_right)
   {
       score++;
       result.innerText="correct";
    submit.style.display="none";
    next.style.display="block";
   }
   else{
    result.innerText="incorrect";
    submit.style.display="none";
    next.style.display="block";
   }

})
next.addEventListener("click",function()
{
    question_title.innerText="";
    option_list.innerText="";
    result.innerText="";
    submit.style.display="block";
    next.style.display="none";
    current_question++;
    if(questions[current_question])
    {
        create_question();
    }
    else{
        main_heading.innerText="Score= "+score;
        question_key.innerText="";
        restart_button.innerText="";
        show_result();
    }
})
function show_result()
{
    question_container.style.display="none";
    key.style.display="block";
    question_key.style.display="block";
    restart_button.style.display="block";
    var ul=document.createElement("ul");
    questions.forEach(function(question)
    {
        var li=document.createElement("li");
        var span=document.createElement("span");
        span.innerText=question.right_answer;
        li.innerText=question.question+" - " ;
        li.appendChild(span);
        ul.appendChild(li);
        question_key.appendChild(ul);

    })

    var btn=document.createElement("button");
    btn.innerText="restart";
    btn.setAttribute("id","btn_restart");
    restart_button.appendChild(btn);
   
   btn.addEventListener("click",function()
   {
       restart();
   })
    
}
function restart()
{
    key.style.display="none";
    restart_button.style.display="none";
    question_key.style.display="none";
    question_container.style.display="block";
    score=0;
    current_question=0;
    create_question();
}