import React, { Component, useState } from "react";
/* 컴퍼넌트에서 상태를 관리할 때 사용하는 hooks 중 하나 (미리 정해져 있음) */
import "./App.css";
import Box from "./components/Box";

/*
  rock scissors paper 

  1. 박스 2개 (타이틀, 사진, 결과)
  2. 박스 하단에 가위바위보 버튼
  3. 버튼 클릭 -> 클릭한 아이템이 user box 에 보임
  4. 버튼 클릭 -> computer 아이템이 랜덤으로 보임
  5. 3, 4번의 승패 나눔
  6. 5의 결과에 따라 박스 테두리색, 글씨 색이 변함 (승 - 파랑/패 - 빨강)
*/

function App() {
  const [userSelect, setUseSelect] =
    useState(); /* useState (null) 첫 화면은 비워놔도 되고 null 입력도 가능*/
  const [computerSelect, setComputerSelect] = useState(); // computer 빈 화면시 입력값을 쓰지 않으면 오류남
  const [result, setResult] = useState(""); // 승패 보여주는 state, 비어있는 string type

  const choice = {
    scissors: { name: "Scissors", img: "scissors.png" },
    rock: { name: "Rock", img: "rock.png" },
    paper: { name: "Paper", img: "paper.png" },
  };

  const play = (userChoice) => {
    // console.log('버튼 눌렀어요', userChoice);

    setUseSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    /* 랜덤 초이스 값은 computerChoice 값으로 들어가게*/
    // console.log('computerChoice', computerChoice);
    setComputerSelect(computerChoice);

    //judgement(choice[userChoice], computerChoice) // user가 선택한 값, computer가 선택한 값을 함수 judgement에 전달
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (uc, cc) => {
    console.log("유저선택값-", uc, "컴퓨터선택값-", cc);

    /* 삼항 연산자 */

    if (uc.name === cc.name) {
      return "Tie😨";
    } else if (uc.name === "Rock")
      return cc.name === "Scissors" ? "Win😎" : "Lose😭";
    else if (uc.name === "Scissors")
      return cc.name === "Paper" ? "Win😎" : "Lose😭";
    else if (uc.name === "Paper")
      return cc.name === "Rock" ? "Win😎" : "Lose😭";
  };

  /*
      user == computer --> itr(비김)
      user == rock / computer == scissors   --> win(이김)
      user == rock / computer == paper      --> lose(짐)
      user == scissors / computer == paper  --> win(이김)
      user == scissors / computer == rock   --> lose(짐)
      user == paper / computer == rock      --> win(이김)
      user == paper / computer == scissors  --> lose(짐)
    */

  /* 아래 처럼 해도 되고, 건건이 해야 하는 번거로움이 있어서 삼항 연산자로 쓸수 있음 */

  //   if (userC.name == computerC.name){
  //     return 'tie😨';
  //   } else if ( userC.name == 'Rock'){
  //     if( computerC.name == 'Scissors'){
  //       return 'Win😎'
  //     } else {
  //       return 'Lose😭'
  //     }
  //   } else if ( userC.name == 'Scissors'){
  //     if( computerC.name == 'Paper'){
  //       return 'Win😎'
  //     } else {
  //       return 'Lose😭'
  //     }
  // }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log('itemArray?', itemArray);
    /* Object.keys() 는 객체 choice 의  key값만 뽑아옴 (배열의 형태로) 자동으로 index값이 들어오고 length 값도 먹힘*/
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // Math.floor 소수점 아래는 삭제
    let final = itemArray[randomItem];
    // console.log('final', final);

    return choice[final];
    // choice 중 아이템 전체가 선택됨
  };

  return (
    <>
      <h1 className="main h1">😜 ROCK SCISSORS PAPER 🤪</h1>
      <p className="main resultP">{result}</p>
      <div className="main">
        <Box title="🙋‍♂️ user" item={userSelect} result={result} />
        <Box title="💻 computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
        {/* 콜백함수처럼 ()=> 입력하여 진행 */}
      </div>
    </>
  );
}

export default App;
