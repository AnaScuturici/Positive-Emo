import "./App.css";
import React from "react";
import axios from "axios";
import bocco from "./img_bocco.png";
import e from "express";

function App() {
  const click = async (e) => {
    e.preventDefault();
    const text = await axios.get("/api");
    //console.log(text.data);

    await axios.post(
      "https://platform-api.bocco.me/v1/rooms/272f4f0f-b20c-4b18-9f4e-0cba6e9fae17/messages/text",
      {
        text: text.data,
      },
      {
        headers: {
          Authorization: `Bearer ${await refresh()}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className='App'>
      <h1 className='title'>Positive Emo</h1>
      <div className='button-area'>
        <button onClick={() => click()}>
          <p>
            <img src={bocco} />
          </p>
        </button>
      </div>
    </div>
  );
}

export default App;
