import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import bocco from './img/img_bocco.png';

function App() {

  const [textData, setTextData] = useState("Click me")

  async function refreshToken(){
    const response = await axios.post("https://platform-api.bocco.me/oauth/token/refresh", 
      { 
        "refresh_token": process.env.REACT_APP_REFRESH_TOKEN,
    })
    const token = response.data.access_token;
    return token; 
  };

  const click = async () => {
    try {
      const text = await axios.get("/api");
      setTextData(text.data);
      
    await axios.post(`https://platform-api.bocco.me/v1/rooms/${process.env.REACT_APP_ROOM_ID}/messages/text`,  
      {
        'text': text.data,
      },
     {
      headers: {
        'Authorization': `Bearer ${await refreshToken()}`,
        'Content-Type': 'application/json'
      },
    });
    } catch (error) {
      console.error(error); 
    };
  };

  return (
    <div className="App">
      <h1 className='title'>Positive Emo-chan</h1>
      <div className='button-area'>
        <button onClick={()=> click()}>
           <p><img src={bocco} /></p>
        </button>
      </div>
      <div className='text-area'>
        <p>{textData}</p>
      </div>
    </div>
  );
}

export default App;
