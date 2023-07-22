const Pretest = [
    {question:1, imgsrc:"img/Pretest/E-2014_9-B.png",  options:{A:'X 為 OFF, Y 為 OFF', B:'X 為 OFF, Y 為 ON', C:'X 為 ON, Y 為 OFF', D:'X 為 ON, Y 為 ON'}},
    {question:2, imgsrc:"img/Pretest/D-2015_19-C.png", options:{A:'1', B:'2', C:'3', D:'沒有任何方法能保證獲勝'}}, 
    {question:3, imgsrc:"img/Pretest/E-2015_3-C.png",  options:{A:'A', B:'B', C:'C', D:'D'}},
    {question:4, imgsrc:"img/Pretest/D-2014_1-B.png",  options:{A:'4', B:'5', C:'6', D:'7'}},
    {question:5, imgsrc:"img/Pretest/E-2015_21-B.png", options:{A:'蘋可小姐、伯朗先生、格林太太', B:'伯朗先生、格林太太、蘋可小姐', C:'格林太太、蘋可小姐、伯朗先生', D:'伯朗先生、蘋可小姐、格林太太'}},
    {question:6, imgsrc:"img/Pretest/D-2014_11-A.png", options:{A:'GYGBGYBB', B:'YYBYGGBG', C:'GBYBYGY', D:'YBBYBYY'}},
];

const Test1 = [
    {question:1, imgsrc:"img/Task1/E-2014_13-C.png", options:{A:'18, 15, 12, 11, 25, 22, 31, 44, 43, 52', B:'52, 43, 44, 31, 22, 25, 11, 12, 15, 18', C:'11, 31, 12, 22, 52, 43, 44, 15, 25, 18', D:'11, 12, 15, 18, 22, 25, 31, 43, 44, 52'}, robot:"A"}, 
    {question:2, imgsrc:"img/Task1/E-2015_11-C.png", options:{A:'5', B:'10', C:'11', D:'12'}, robot:"A"},
    {question:3, imgsrc:"img/Task1/D-2014_27-D.png", options:{A:'6 車次', B:'9 車次', C:'15 車次', D:'18 車次'}, robot:"A"},
    {question:4, imgsrc:"img/Task1/D-2014_29-B.png", options:{A:'2', B:'3', C:'4', D:'5'}, robot:"A"},
    {question:5, imgsrc:"img/Task1/E-2015_16-A.png", options:{A:'-1, 1, -1, 1', B:'1, -1, -1, 1', C:'1, 1, -1, -1', D:'-1, -1, 1, 1'}, robot:"A"},
    {question:6, imgsrc:"img/Task1/D-2014_20-C.png", options:{A:'6', B:'7', C:'8', D:'15'}, robot:"A"},
];

const Test2 = [
    {question:1, imgsrc:"img/Task2/D-2014_7-B.png",  options:{A:'87', B:'85', C:'82', D:'81'}, robot:"A"}, 
    {question:2, imgsrc:"img/Task2/E-2014_15-C.png", options:{A:'9 小時', B:'10 小時', C:'11 小時', D:'12 小時'}, robot:"A"},
    {question:3, imgsrc:"img/Task2/E-2014_18-A.png", options:{A:'abbbaabbccbaaaabbc', B:'aaaaccbbaacaaccccbbaabbc', C:'caaccccaaccccccacccc', D:'acacbcbcbcbcacacbcbcccccbcbcacbcbcc'}, robot:"A"},
    {question:4, imgsrc:"img/Task2/D-2014_26-D.png", options:{A:'8 單位長', B:'9 單位長', C:'10 單位長', D:'11 單位長'}, robot:"A"},
    {question:5, imgsrc:"img/Task2/D-2015_13-B.png", options:{A:'3', B:'4', C:'5', D:'6'}, robot:"A"},
    {question:6, imgsrc:"img/Task2/E-2015_17-C.png", options:{A:'紅', B:'綠', C:'白', D:'洋紅'}, robot:"A"},
];

const questions_set = {"pretest":Pretest, "test1":Test1, "test2":Test2};

function show_question() {
    question_info(questions[index]);
    if(has_robot) {
        document.getElementById("msg_id").innerText = "機器人認為答案是 " + questions[index]["options"][questions[index]["robot"]];
        button.value = "確認";
    } else {
        button.value = "送出";
    }
    button.addEventListener("click", click);
};

function question_info(question) {
    // [LOG] QUESTION
    content += `${window.performance.now()} QUESTION ${question["question"]} \n`;
    console.log(`${window.performance.now()} QUESTION ${question["question"]}`);

    document.getElementById("question").innerText = ` 第 ${question["question"]} 題 `;
    document.getElementById("img").src = question["imgsrc"];
    document.getElementById("label_input_14_1").innerText = question["options"]["A"];
    document.getElementById("label_input_14_2").innerText = question["options"]["B"];
    document.getElementById("label_input_14_3").innerText = question["options"]["C"];
    document.getElementById("label_input_14_4").innerText = question["options"]["D"];
}

function next_question() {
    radio_checked = document.querySelector('input[name="radio"]:checked');

    // [LOG] SUBMIT
    content += `${window.performance.now()} SUBMIT ${radio_checked.value} \n`
    console.log(`${window.performance.now()} SUBMIT ${radio_checked.value}`);

    if(index < questions.length - 1) {
        radio_checked.checked = false;
        button.removeEventListener("click", click);
        index += 1;
        show_question();
    } else {
        // [LOG] FINISHED
        content += `${window.performance.now()} FINISHED \n`
        console.log(`${window.performance.now()} FINISHED`);

        // [LOG FILE] 
        logFile();
        document.body.innerHTML = "DONE";
    }
}

function click() {
    radio_checked = document.querySelector('input[name="radio"]:checked');
    if (radio_checked == null) {
        // [LOG] NOCHECKED
        content += `${window.performance.now()} NOCHECKED \n`
        console.log(`${window.performance.now()} NOCHECKED`)
        return
    }
    if(button.value == "送出") {
        if (has_robot) {
            button.value = "確認";
            document.getElementById("msg_id").style.display = "none";
        }
        next_question()
    } else {
        // [LOG] CONFIRM
        content += `${window.performance.now()} CONFIRM ${radio_checked.value} \n`
        console.log(`${window.performance.now()} CONFIRM ${radio_checked.value}`);

        button.value = "送出";
        document.getElementById("msg_id").style = "";
    }
}

function check(radio) {
    // [LOG] CHECK
    content += `${window.performance.now()} CHECK ${radio.value} \n`
    console.log(`${window.performance.now()} CHECK ${radio.value}`);
}

function logFile() {
    const blob = new Blob([content], { type: 'plain/text' });
    const fileUrl = URL.createObjectURL(blob);

    const element = document.createElement('a');
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', "logfile.txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

function countdown() {
    sec = time%60;
    min = (time-sec)/60;
    if (sec < 10) {
        t = `${min}:0${sec}`;
    } else {
        t = `${min}:${sec}`;
    }
    timer.innerText = t;
    time -= 1;
}

index = 0;
questions = questions_set[document.title];
has_robot = "robot" in questions[0];
content = "";
let button = document.getElementById("submit");
let timer = document.getElementById("timer");
time = 1200;
setInterval(countdown, 1000);
show_question(index);