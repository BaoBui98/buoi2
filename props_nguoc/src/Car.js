import React from "react";

export default function componentName(props) {
  const handleX = props.handleX;
  console.log(handleX);
  handleX("Xe hơi lên giá rồi !!!");
  return (
    <>
      <div>
        Xe thương hiệu {props.brand},Giá {props.price}
      </div>
    </>
  );
}
