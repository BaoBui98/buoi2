import React from "react";

export default function componentName(props) {
  console.log(props);
  // Để lấy giá trị thuộc tính đối tượn ta xài cú pháp props.ten_thuoc_tinh
  return (
    <>
      <div>
        Xe thương hiệu {props.brand},Giá {props.price}
      </div>
    </>
  );
}
