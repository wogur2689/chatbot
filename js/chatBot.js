//타이핑
        var app = document.getElementById("typing");

        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75
        });

        typewriter
            .typeString("안드로이드에게 하고싶은 말을 전해주세요!")
            .pauseFor(2000)
            .deleteAll()
            .typeString("기본 명령어: 안녕/불꺼줘/불켜줘/뭐먹지/뭐할까")
            .pauseFor(2000)
            .deleteAll()
            .typeString("안드로이드에게 말을 가르치실수 있답니다 :)")
            .pauseFor(2000)
            .deleteAll()
            .start();

        //말하기
        var json = [{"user" : "안녕", "android" : "반가워!"},{"user" : "불꺼줘","android" : "잘자~"},
        {"user" : "불켜줘","android" : "아침이야 아침!"},{"user" : "뭐먹지", "android" : ""},{"user" : "뭐할까", "android" : ""}];

        var user = ""; //사용자의 질문을 임시 저장할 변수
        var android = ""; //사용자의 대답을 임시 저장할 변수

        var key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별합니다.

        function text_check(){
            var value = document.getElementById("console").value;
            var reply = document.getElementById("msg");

            if(key == 1){
                 if(value == "네"){
                       reply.innerHTML = "대답을 입력해주세요!";
                       key = 2;
                 }
                  else{
                      reply.innerHTML = "잘못입력하셨어요!";
                      key = 0;
                }
            }
            else if(key == 2){
                android = value; //전역변수 android값에 사용자의 입력을 저장
                json.push({user: `${user}`, android: `${android}`}); //json이라는 데이터에 값을 추가하는 push함수
                reply.innerHTML = "말을 배웠습니다!";
                key = 0; //키 값 0으로 초기화
            } else if(key == 0) {
                let food = ["짜장면", "짬뽕", "족발", "탕수육", "떡볶이", "치킨", "피자", "국밥", "라면", "햄버거", "삼겹살", "볶음밥"];
                let study = ["C", "Java", "Python", "JavaScript", "JQuery", "SQL", "PHP", "JSP", "GO", "R", "C++", "C#", "HTML", "CSS"];
                for(let i = 0; i < json.length; i++){
                    if(value == json[i].user){
                        reply.innerHTML = json[i].android;
                        if(json[i].user == "불꺼줘") {
                            document.bgColor="gray";
                            return;
                        }
                        else if(json[i].user == "불켜줘") {
                            document.bgColor="white";
                            return;
                        } 
                        else if(json[i].user == "뭐먹지") {
                            var j = Math.floor(Math.random()*food.length);
                            reply.innerHTML = food[j];
                            return;
                        }
                        else if(json[i].user == "뭐할까") {
                            var j = Math.floor(Math.random()*study.length);
                            reply.innerHTML = study[j];
                            return;
                        }
                        else {
                            return;
                        }
                    }
                }
                reply.innerHTML = "말을 가르쳐 주실래요?(네 or 아니요)";
                user = value;
                key = 1;
            }
        }
        document.getElementById("btn").addEventListener("click",text_check);