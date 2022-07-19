const setOfWords = [
    "My name is Akash SriVastava and I am a Software Developer.",
    "Hope you are having fun this a simple  game you can make.",
    "If you want  the source code then link is given in the description so you can create your own version of this challenge."
];
const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime(); // jb user ne game start kiya tb kya time tha
    btn.innerText = "Done";
}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime(); //jb user ne done kiya tb time kya tha 
    let totalTime = ((endTime - startTime) / 1000); //typing speed pta chl jayega 1000 se divid es liye kiya kyoki ye milisec mein hai 
    console.log(totalTime);

    let totalStr = typeWords.value; //user ne kitna likha hai or kya
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = "You typed total at " + speed + " words per minutes. ";

    finalMsg += compareWord(msg.innerText, totalStr);
    msg.innerText = finalMsg;

}

const compareWord = (str1, str2) => {
    let words1 = str1.split(" "); //total words pta lgana ho ek sentence mein ki kitne words or space hai to split() ka use karte hai space ki wo ek seperate word manleta hai
    let words2 = str2.split(" ");
    let cnt = 0;
    //arrayName the foreach then it will take whole function with value and index no. of that array
    words1.forEach(function(item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}
btn.addEventListener('click', function() {

    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})