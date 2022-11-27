
/*Javascript-Quellcode für die größenveränderbare Menüleiste*/
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]

toggleButton.addEventListener("click", () =>{
    listContainer.classList.toggle("active")
})

/*Funktion für das Quizspiel*/
function result(){
    var score=0;
    if(document.getElementById('correct1').checked){
        score++;   
        document.getElementById('answer1').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer1').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct2').checked){
        score++;
        document.getElementById('answer2').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer2').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct3').checked){
        score++;
        document.getElementById('answer3').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer3').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct4').checked){
        score++;
        document.getElementById('answer4').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer4').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct5').checked){
        score++;
        document.getElementById('answer5').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer5').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct6').checked){
        score++;
        document.getElementById('answer6').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer6').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct7').checked){
        score++;
        document.getElementById('answer7').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer7').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct8').checked){
        score++;
        document.getElementById('answer8').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer8').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct9').checked){
        score++;
        document.getElementById('answer9').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer9').innerHTML="<p id='false'>flasch :( </p>";
    }
    if(document.getElementById('correct10').checked){
        score++;
        document.getElementById('answer10').innerHTML="<p id='true'>richtig :) </p>";
    }else{
        document.getElementById('answer10').innerHTML="<p id='false'>flasch :( </p>";
    }
/*alert("your score is:" + score)*/
document.getElementById('QuizMessage').innerHTML="<p id='points'> Sie haben gepunktet: "+ score + " </p>"

}