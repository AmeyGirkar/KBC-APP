const welcomescreen  = document.getElementById("welcomeScreen")
const quizArea  = document.getElementById("quizArea")

const levels = [
    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"
]

let currentLevelIndex=0;

function startGame(){
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("usernameError");

    if(username.trim() === ""){
        errorMessage.innerHTML="Please Enter Name"
        return
    }
    errorMessage.innerHTML="";
    welcomescreen.classList.add("hide");
    // console.log(welcomescreen)
    quizArea.classList.remove("hide")


}


function loadLevel(){
    const levelList = document.getElementById("levelArea");
    levels.reverse().forEach((level,index)=>{
        const levelDiv = document.createElement("div")
        levelDiv.textContent = `${15 -index}.${level}`;
        levelList.appendChild(levelDiv)

    })

}

loadLevel()