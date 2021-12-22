import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <>
      <div className="container">
        <h3>Question and Answers</h3>
        <section className="info">
          {data.map((single) => {
            return (
              <div>
                <SingleQuestion key={single.id} {...single} />
              </div>
            );
          })}
        </section>
      </div>
      <section></section>
    </>
  );
}

export default App;
