import React from "react";
import Car from "./Car";
export default function App() {
  const carSendBackToApp = (value) => {
    console.log(`Cha nhận data từ con: ${value}`);
  };
  return (
    <>
      <Car brand="Lampogini" price="$500" handleX={carSendBackToApp} />
    </>
  );
}
