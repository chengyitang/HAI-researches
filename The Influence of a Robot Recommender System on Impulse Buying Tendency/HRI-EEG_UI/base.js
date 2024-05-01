let system_log = "";

// index
magic("startBtn", "start", "index", "mac");

// mac
magic("macBtn1", "R", "mac", "macP1");
magic("macBtn2", "IR", "mac", "macP1");

// macP1
magic("macP1Btn1", "D", "macP1", "macP2");
magic("macP1Btn2", "E", "macP1", "macP2");
magic("macP1Btn3", "X", "macP1", "macP2");

// macP2
magic("macP2Btn1", "D", "macP2", "macP3");
magic("macP2Btn2", "E", "macP2", "macP3");
magic("macP2Btn3", "X", "macP2", "macP3");

// macP3
magic("macP3Btn1", "D", "macP3", "macP4");
magic("macP3Btn2", "E", "macP3", "macP4");
magic("macP3Btn3", "X", "macP3", "macP4");

// macP4
magic("macP4Btn1", "D", "macP4", "ipad");
magic("macP4Btn2", "E", "macP4", "ipad");
magic("macP4Btn3", "X", "macP4", "ipad");

// ipad
magic("ipadBtn1", "IR", "ipad", "ipadP1");
magic("ipadBtn2", "R", "ipad", "ipadP1");

// ipadP1
magic("ipadP1Btn1", "D", "ipadP1", "ipadP2");
magic("ipadP1Btn2", "E", "ipadP1", "ipadP2");
magic("ipadP1Btn3", "X", "ipadP1", "ipadP2");

// ipadP2
magic("ipadP2Btn1", "D", "ipadP2", "ipadP3");
magic("ipadP2Btn2", "E", "ipadP2", "ipadP3");
magic("ipadP2Btn3", "X", "ipadP2", "ipadP3");

// ipadP3
magic("ipadP3Btn1", "D", "ipadP3", "ipadP4");
magic("ipadP3Btn2", "E", "ipadP3", "ipadP4");
magic("ipadP3Btn3", "X", "ipadP3", "ipadP4");

// ipadP4
magic("ipadP4Btn1", "D", "ipadP4", "download");
magic("ipadP4Btn2", "E", "ipadP4", "download");
magic("ipadP4Btn3", "X", "ipadP4", "download");


// downloadBtn onclick
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn){
  downloadBtn.addEventListener("click", () => {
    download(system_log, "test.txt");
  });
}

let click = 0; // count click

// func for all btn
function magic(btnID, event, now, next){
  let btn = document.getElementById(btnID);
  if (btn) {
    btn.addEventListener("click", () => {
      if (event == "start"){ // start button
        mark(event);
        //rest();
        //setTimeout(work, 10000);
        move(now, next);
      } 
      else if (event == "R"){
        mark(event);
        //rest();
        //setTimeout(work, 10000);
        move(now, next);
      }
      else if (event == "IR") {
        alert("你選擇的商品不符合你的需求喔。再考慮看看吧。");
        mark(event);
      }
      else { // EDX buttons

        if (click == 0){ // first pick

          mark(event);

          if (now == "macP1" || now == "macP4" || now == "ipadP2" || now == "ipadP4"){ // display robot

            click += 1;
            document.getElementById("robot").classList.remove("d-none");

            switch (now) {
              case "macP1":
                switch (event) {
                  case "E":
                    document.getElementById("msg1-D").classList.remove("d-none");
                    responsiveVoice.speak("有超過 85％ 擁有 MacBook 的人都額外購買了左邊正在打折的 eight in two Hub。讓您的裝置原本的兩個 Type C 接孔能夠額外連接 8 個外接裝置。", "Chinese Female");
                    break;
                  case "D":
                    document.getElementById("msg1-E").classList.remove("d-none");
                    responsiveVoice.speak("有超過 85％ 擁有 MacBook 的人都額外購買了右邊限量版的 nine in one Hub。讓您的裝置只需要一個Type C接孔就能額外連接9個外接裝置。", "Chinese Female");
                    break;
                  case "X":
                    document.getElementById("msg1-D").classList.remove("d-none");
                    responsiveVoice.speak("有超過 85％ 擁有 MacBook 的人都額外購買了左邊正在打折的 eight in two Hub。讓您的裝置原本的兩個 Type C 接孔能夠額外連接 8 個外接裝置。", "Chinese Female");
                    break;
                  default:
                    break;
                }
                break;
              case "macP4":
                switch (event) {
                  case "E":
                    document.getElementById("msg2-D").classList.remove("d-none");
                    responsiveVoice.speak("電子支付逐漸變得廣泛，有越來越多人追求更加輕薄的錢包。在這群人中，有超過 7 成的人都選擇了打折中的 Bellroy 的 Slim Sleeve 超薄錢包經典黑款式。還不跟上嗎？", "Chinese Female");
                    break;
                  case "D":
                    document.getElementById("msg2-E").classList.remove("d-none");
                    responsiveVoice.speak("電子支付逐漸變得廣泛，有越來越多人追求更加輕薄的錢包。在這群人中，有超過 7 成的人都選擇了右邊限量版的 Bellroy 的 Slim Sleeve 超薄錢包 浮雕印花限量款。你值得擁有", "Chinese Female");
                    break;
                  case "X":
                    document.getElementById("msg2-E").classList.remove("d-none");
                    responsiveVoice.speak("電子支付逐漸變得廣泛，有越來越多人追求更加輕薄的錢包。在這群人中，有超過 7 成的人都選擇了右邊限量版的 Bellroy 的 Slim Sleeve 超薄錢包 浮雕印花限量款。你值得擁有", "Chinese Female");
                    break;
                  default:
                    break;
                }
                break;
              case "ipadP2":
                switch (event) {
                  case "E":
                    document.getElementById("msg3-D").classList.remove("d-none");
                    responsiveVoice.speak("有超過 95 % 的學生在購買 iPad 的同時，也會購買左方折扣中的 白色 Apple Pencil ，馬上訂購享受無紙化學習的便利吧。", "Chinese Female");
                    break;
                  case "D":
                    document.getElementById("msg3-E").classList.remove("d-none");
                    responsiveVoice.speak("有超過 95 % 的學生在購買 iPad 的同時，也會購買右方限量版的 稀有黑色 Apple Pencil ，馬上訂購享受無紙化學習的便利吧。", "Chinese Female");
                    break;
                  case "X":
                    document.getElementById("msg3-D").classList.remove("d-none");
                    responsiveVoice.speak("有超過 95 % 的學生在購買 iPad 的同時，也會購買左方折扣中的 白色 Apple Pencil ，馬上訂購享受無紙化學習的便利吧。", "Chinese Female");
                    break;
                  default:
                    break;
                }
                break;
              case "ipadP4":
                switch (event) {
                  case "E":
                    document.getElementById("msg4-D").classList.remove("d-none");
                    responsiveVoice.speak("聖誕節快到了，你家還沒有花圈嗎？有 80 % 的消費者都在 IKEA 購買了左邊折價中的 STRALA 人造花環。趕快購買，加入歡慶聖誕的行列吧。", "Chinese Female");
                    break;
                  case "D":
                    document.getElementById("msg4-E").classList.remove("d-none");
                    responsiveVoice.speak("聖誕節快到了，你家還沒有花圈嗎？有 80 % 的消費者都在 IKEA 購買了右邊的 SMYCKA 人造花環 限量特製松樹款。趕快購買，加入歡慶聖誕的行列吧。", "Chinese Female");
                    break;
                  case "X":
                    document.getElementById("msg4-E").classList.remove("d-none");
                    responsiveVoice.speak("聖誕節快到了，你家還沒有花圈嗎？有 80 % 的消費者都在 IKEA 購買了右邊的 SMYCKA 人造花環 限量特製松樹款。趕快購買，加入歡慶聖誕的行列吧。", "Chinese Female");
                    break;
                  default:
                    break;
                }
                break;
              default:
                break;
            }

          } else {
            //rest();
            //setTimeout(work, 10000);
            move(now, next);
            console.log("over");
          }
        } else { //second pick
          document.getElementById("robot").classList.add("d-none");
          mark(event);
          //rest();
          //setTimeout(work, 10000);
          move(now, next);
          click = 0;
          console.log("over");
        }
      
      }
    });
  }
}

// mark system log
function mark(e) {
  var t1 = window.performance.now();
  system_log += `${t1} ${e}\n`;
  console.log(`${t1} ${e}\n`);
}

// move to next page
function move(now, next) {
  // turn off
  document.getElementById(now).classList.add("d-none");
  // turn on
  document.getElementById(next).classList.remove("d-none");
}

// Function to download data to a file
function download(data, filename) {
  var file = new Blob([data], {type: "text/plain"});
  var a = document.createElement("a"),
          url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);  
  }, 0); 
}

function rest() {
  $("#black-screen").hide(0);
}

function work() {
  $("#black-screen").show(0);
}

function mask(now, next) {
  // turn off
  document.getElementById(now).classList.add("d-none");
  // turn on
  document.getElementById(next).classList.remove("d-none");
}
