import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <article className="question">
        <header key={id}>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setToggle(!toggle)}>
            {toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </header>
        <p>{toggle ? "" : info}</p>
      </article>
    </>
  );
};

export default Question;
