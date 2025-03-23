
// Part of Exercise 1
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rand = 0;
let score = 0;

const generate_btn = document.getElementsByClassName("btn1")[0];
const display_text = document.getElementById("display_content");
const input_val = document.getElementById("guess-input");
const guess_btn = document.getElementsByClassName("btn1")[1];

input_val.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        guess_btn.click();
    }
});

generate_btn.addEventListener('click', function () {
    display_text.textContent = "";
    input_val.value="";
    score = 0;
    rand = getRandomNum(1, 100);
});

guess_btn.addEventListener('click', function () {
    if (input_val.value > rand) {
        display_text.textContent = "Try guessing a smaller number";
        score++;
    } else if (input_val.value < rand) {
        display_text.textContent = "Try guessing a bigger number";
        score++;
    } else {
        display_text.textContent = `You have guessed it right! Your Score is ${score}`;
    }
    input_val.value="";
});

// Part of Exercise 2
let SWGarr=["SNAKE","WATER","GUN"];
let rand_SWG = getRandomNum(0,2);

const Start_new_btn2 = document.getElementsByClassName("btn2")[0];
const display_text2 = document.getElementById("display_content2");
const input_val2 = document.getElementById("swg-input");
const play_btn2 = document.getElementsByClassName("btn2")[1];

Start_new_btn2.addEventListener('click', function () {
    display_text2.textContent = "";
    input_val2.value="";
    rand_SWG = SWGarr[getRandomNum(0,2)];
});

input_val2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        play_btn2.click();
    }
});

play_btn2.addEventListener('click', 
function () {
    if (input_val2.value.toUpperCase() == rand_SWG) {
        display_text2.textContent = "It's a TIE";
    } else if (input_val2.value.toUpperCase() == "SNAKE" && rand_SWG == "WATER") {
        display_text2.textContent = "Computer Plays Water and You Win!!";
    } else if (input_val2.value.toUpperCase() == "SNAKE" && rand_SWG == "GUN") {
        display_text2.textContent = "Computer Plays Gun and You Lose";
    } else if (input_val2.value.toUpperCase() == "WATER" && rand_SWG == "SNAKE") {
        display_text2.textContent = "Computer Plays Snake and You Lose";
    } else if (input_val2.value.toUpperCase() == "WATER" && rand_SWG == "GUN") {
        display_text2.textContent = "Computer Plays Gun and You Win!!";
    } else if (input_val2.value.toUpperCase() == "GUN" && rand_SWG == "WATER") {
        display_text2.textContent = "Computer Plays Water and You Lose";
    } else if (input_val2.value.toUpperCase() == "GUN" && rand_SWG == "SNAKE") {
        display_text2.textContent = "Computer Plays Snake and You Win!!";
    }
    rand_SWG = SWGarr[getRandomNum(0,2)];
    input_val2.value="";
});


// For exercise 3
let jokes=["What kind of music do mummies listen to? Wrap music", "What falls in winter but never gets hurt? Snow.", "How many months have 28 days? All of them!", "Why was the broom late to school? It over-swept!", "What kind of nut doesn't like money? Cash ew", "What do you call a ghost's true love? A ghoul-friend.", "What's white and can't climb trees? A fridge.", "What is the strongest animal in the sea? Mussels."];
let joke = jokes[getRandomNum(0,7)];

const jokebtn = document.getElementById("joke-btn");
const display_text3 = document.getElementById("display_content3");

jokebtn.addEventListener('click', function () {
    display_text3.innerHTML = jokes[getRandomNum(0,7)];
});


// For Exercise 4
clock()
function clock(){
    const hour_hand = document.getElementsByClassName("hour")[0];
    const min_hand = document.getElementsByClassName("min")[0];
    const sec_hand = document.getElementsByClassName("sec")[0];

    let now=new Date()
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let hour_deg = 30*hours + 0.5*mins + 0.0083*secs + 180;
    let min_deg = 6*mins + 0.1*secs + 180;
    let sec_deg = 6*secs + 180;

    hour_hand.style.transform = `rotate(${hour_deg}deg)`
    min_hand.style.transform =`rotate(${min_deg}deg)`
    sec_hand.style.transform =`rotate(${sec_deg}deg)`
};
setInterval(clock,1000)



// // For Exercise 6

document.getElementsByClassName("btn6")[1].addEventListener("click",function(){
    document.getElementsByClassName("hidden-text")[0].style.display="none";
    document.getElementById("todo-input").style.display="block";
    document.getElementsByClassName("btn6")[1].style.display="none";
    document.getElementsByClassName("btn6")[0].style.display="block";
    document.getElementById("back-btn").style.display="block";
    document.getElementById("clear-btn").style.display="none";
});

document.getElementById("todo-input").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let item = document.getElementById('todo-input').value;
        if (item) {
            let list = JSON.parse(localStorage.getItem('myList')) || [];

            list.push(item);

            localStorage.setItem('myList', JSON.stringify(list));

            document.getElementById('todo-input').value = '';
        }
    }
});

document.getElementsByClassName("btn6")[0].addEventListener("click",function(){
    document.getElementsByClassName("hidden-text")[0].style.display="block";
    document.getElementById('todo-input').style.display="none";
    document.getElementsByClassName("btn6")[1].style.display="block";
    document.getElementsByClassName("btn6")[0].style.display="none";
    document.getElementById('back-btn').style.display="block";
    document.getElementById("clear-btn").style.display="block";

    let array = JSON.parse(localStorage.getItem('myList')) || [];

    let ul = document.getElementById('myList');
    ul.innerHTML = '';

    array.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
});

document.getElementById("back-btn").addEventListener("click",function(){
    document.getElementsByClassName("hidden-text")[0].style.display="none";
    document.getElementById('todo-input').style.display="none";
    document.getElementById("back-btn").style.display="none";
    document.getElementsByClassName("btn6")[1].style.display="block";
    document.getElementsByClassName("btn6")[0].style.display="block";
    document.getElementById("clear-btn").style.display="none";
})

document.getElementById("clear-btn").addEventListener("click",function(){
    document.getElementsByClassName("hidden-text")[0].style.display="none";
    document.getElementById('todo-input').style.display="none";
    document.getElementById("back-btn").style.display="none";
    document.getElementsByClassName("btn6")[1].style.display="block";
    document.getElementsByClassName("btn6")[0].style.display="block";
    document.getElementById("clear-btn").style.display="none";

    let array = JSON.parse(localStorage.getItem("myList") || []);
    array = [];
    localStorage.setItem("myList",JSON.stringify(array));
})


// For exercise 7
document.getElementsByClassName("btn7")[1].style.display="none";

class PasswordGenerator{
    constructor(length){
        this.length = length;
        this.special_chars = [
            '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
            ':', ';', '<', '=', '>', '?', '@',
            '[', '\\', ']', '^', '_', '`',
            '{', '|', '}', '~'
          ];
    }
    generate_rand(i,j){
        return Math.floor(i + Math.random()*(j-i+1));
    }
    generate(){
        let password='';
        for(let i=0;i<this.length;i++)
        {
            let type_char = this.generate_rand(0,3);
            if(type_char==0)
            {
                let lowercase_char=String.fromCharCode(this.generate_rand(97,122));
                password+= lowercase_char;
            }
            else if(type_char==1)
            {
                let uppercase_char=String.fromCharCode(this.generate_rand(65,90));
                password+= uppercase_char;
            }
            else if(type_char==2)
            {
                let number=String.fromCharCode(this.generate_rand(48,57));
                password+= number;
            }
            else
            {
                let special=this.special_chars[this.generate_rand(0,31)];
                password+=special;
            }
        }
        return password;
    }
}

let password='';
document.getElementsByClassName("btn7")[0].addEventListener("click",function(){
    document.getElementById("password-length").style.display='block';
    document.getElementsByClassName("btn7")[0].style.display='none';
})

document.getElementById("password-length").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let length = document.getElementById("password-length").value;
        
        let pass_generator = new PasswordGenerator(length);
        let password = pass_generator.generate()

        document.getElementById("password-length").type='text';
        document.getElementById("password-length").value=password;

        document.getElementsByClassName("btn7")[1].style.display='block';
    }
});

document.getElementsByClassName("btn7")[1].addEventListener("click",function(){
    navigator.clipboard.writeText(document.getElementById("password-length").value);
    document.getElementsByClassName("btn7")[1].style.display='none';
    document.getElementsByClassName("btn7")[0].style.display='block';
    document.getElementById("password-length").style.display='none';
    document.getElementById("password-length").val='';
    document.getElementById("password-length").type='number';
})


// For exercise 8

function checkAlarmInput(hour, minute, second, hours, minutes, seconds) {
    if (hour < 0 || hour > 23) {
        throw new Error("Hour must be between 0 and 23");
    }
    if (minute < 0 || minute > 59) {
        throw new Error("Minute must be between 0 and 59");
    }
    if (second < 0 || second > 59) {
        throw new Error("Second must be between 0 and 59");
    }
    if ( hour < hours || 
        (hour == hours && minute < minutes) ||
        (hour==hours && minute == minutes && second < seconds)) {
        throw new Error("Time must not be before current time ")
    }
    console.log("Valid time input");
}

function playBeep() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'sawtooth'; // waveform: sine, square, sawtooth, triangle
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // 440 Hz = standard "A" note
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Volume (0.0 to 1.0)

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 10); // Play for 1 second
}

document.getElementsByClassName("btn8")[0].addEventListener("click",function(){
    document.getElementById("hour").style.display='none';
    document.getElementById("minute").style.display='none';
    document.getElementById("second").style.display='none';
    document.getElementById("hr").style.display='flex';
    document.getElementById("min").style.display='flex';
    document.getElementById("sec").style.display='flex';

    document.getElementsByClassName("btn8")[0].style.display="none";
    document.getElementsByClassName("btn8")[1].style.display="block";

    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;

    document.getElementById("hr").value=hour;
    document.getElementById("min").value=minute;
    document.getElementById("sec").value=second;
})

document.getElementsByClassName("btn8")[1].addEventListener("click",function(){
    let hours = document.getElementById("hr").value;
    let minutes = document.getElementById("min").value;
    let seconds = document.getElementById("sec").value;
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    try {
        checkAlarmInput(hours, minutes, seconds, hour, minute, second);
    } catch (err) {
        console.error("Caught an error:", err.message);
    }
    const beepstart=setInterval(() => {
        let nowtime=new Date();
        if(hours==nowtime.getHours() && minutes==nowtime.getMinutes() && seconds==nowtime.getSeconds())
        {
            playBeep();
            clearInterval(beepstart);
        }
    }, 1000);
    document.getElementById("hour").style.display='flex';
    document.getElementById("minute").style.display='flex';
    document.getElementById("second").style.display='flex';
    document.getElementById("hr").style.display='none';
    document.getElementById("min").style.display='none';
    document.getElementById("sec").style.display='none';

    document.getElementsByClassName("btn8")[0].style.display="block";
    document.getElementsByClassName("btn8")[1].style.display="none";

    document.getElementById("hr").value="";
    document.getElementById("min").value="";
    document.getElementById("sec").value="";
})

timenow();
function timenow(){
    let hour_box= document.getElementById("hour");
    let minute_box= document.getElementById("minute");
    let second_box= document.getElementById("second");
    let curr_time = new Date();

    hour_box.innerHTML = curr_time.getHours();
    minute_box.innerHTML = curr_time.getMinutes();
    second_box.innerHTML = curr_time.getSeconds();
}
setInterval(timenow,1000);






















