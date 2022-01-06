import "./App.css";
import React from "react";
import axios from "axios";
import bocco from "./img_bocco.png";

function App() {
  async function refreshToken() {
    const response = await axios.post(
      "https://platform-api.bocco.me/oauth/token/refresh",
      {
        refresh_token: `${process.env.REACT_APP_REFRESH_TOKEN}`,
      }
    );
    const token = response.data.access_token;
    return token;
  }

  const click = async () => {
    try {
      const text = await axios.get("/api");

      await axios.post(
        `https://platform-api.bocco.me/v1/rooms/${process.env.REACT_APP_ROOM_ID}/messages/text`,
        {
          text: text.data,
        },
        {
          headers: {
            Authorization: `Bearer ${await refreshToken()}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
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
