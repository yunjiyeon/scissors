import React from "react";

const Box = (props) => {
  // 승,패를 유저, 컴퓨터에 반대로 나오게
  let rrr;
  if (
    props.title === "💻 computer" &&
    props.result !== "Tie😨" &&
    props.result !== ""
  ) {
    // computer 쪽, 비기지 않았고, 결과값이 비어있지 않을 때
    rrr = props.result === "Win😎" ? "Lose😭" : "Win😎";
    /* props.result : user 의 Win 이었을 때는 Lose 로 바뀜 
                      Lose 였을 때는 Win 으로 바뀜
    */
  } else {
    // 위의 경우가 아니면 props로 전달된 값을 그대로 쓰면 됨
    rrr = props.result;
  }

  return (
    <div className={`box ${rrr}`}>
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} className="item-img" />
      <h2>{rrr}</h2>
    </div>
  );
};

export default Box;
