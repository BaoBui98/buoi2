import { useState } from "react";

// rfc
export default function App() {
  const [soA, setSoA] = useState(0);
  const [soB, setSoB] = useState(0);
  const [sum, setSum] = useState(0);
  const handleClick = () => {
    setSum(Number(soA) + Number(soB));
  };
  return (
    <>
      <div className="container">
        <div className="form-group">
          Số A:{" "}
          <input
            type="number"
            className="form-control"
            value={soA}
            onChange={(e) => setSoA(e.target.value)}
          />
        </div>

        <div className="form-group">
          Số B:{" "}
          <input
            type="number"
            className="form-control"
            value={soB}
            onChange={(e) => setSoB(e.target.value)}
          />
        </div>
        <div className="form-group">{sum}</div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Tính
          </button>
        </div>
      </div>
    </>
  );
}
