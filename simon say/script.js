let game_seq=[];
let user_seq=[];
let btns=["yellow","purple","red","green"];

let started= false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false)
      {
        console.log("game started");
        started = true;
      }   
      
      levelUp();
    });

    function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        },250);
        

    }


    function userFlash(btn){
      btn.classList.add("userflash");
      setTimeout(function () {
          btn.classList.remove("userflash");
      },250);}


      function checkAns(idx){
       // let idx= level-1; fixed value h so we will not use it instead we make a call at checkAns 
        if (user_seq[idx] === game_seq[idx]){
          //console.log("samee value");
          if(user_seq.length == game_seq.length){
            setTimeout(levelUp, 1000 );
          }
        } else {
          h2.innerHTML = `Game over!! Your score was <b> ${level}</b> </br> Press any key to start`;
          document.querySelector("body").style.backgroundColor="red";
          setTimeout( function() {
           document.querySelector("body").style.Color="white"; 
          }, 1000);
          reset();
        }
      }


    function levelUp(){
      user_seq=[];
        level++;
        h2.innerText=` Level ${level}`;

        let ranIdx = Math.floor(Math.random()*3);
        let ranColor= btns[ranIdx];
        let ranBtn = document.querySelector(`.${ranColor}`);
        console.log(ranIdx);
        console.log(ranColor);
        console.log(ranBtn);
        game_seq.push(ranColor);
        console.log(game_seq);

        gameFlash(ranBtn);

    }

    function btnpress(){
      let btn = this;
      //console.log(this);
      userFlash(btn);
      userColor = btn.getAttribute("id");
      user_seq.push(userColor);

      checkAns(user_seq.length-1);
    }

    let allBtns = document.querySelectorAll(".btn");
    for (btn of allBtns){
      btn.addEventListener("click" , btnpress);
    }


    function reset(){
      started = false;
      level = 0;
      game_seq = [];
      user_seq = [];
    }