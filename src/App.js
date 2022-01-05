import './App.css';
import React from 'react';

function App() {

  const click = async () => {
    await fetch("https://platform-api.bocco.me/v1/rooms/272f4f0f-b20c-4b18-9f4e-0cba6e9fae17/messages/text", {
      method: 'post',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyZTQ4OTM2Ni0zODZhLTQ0NDgtOWYzMy05NWU3MzIyMzU1MzgiLCJpc3MiOiJwbGF0Zm9ybS1hcGkiLCJleHAiOjE2NDEzNDk5NjEsInBsYW4iOiJmcmVlIiwiaWF0IjoxNjQxMzQ2MzYxfQ.a1lih5iWb08I5g9H7NubynzbIBUjZJFmaZnu8zphwztyXMWrq0Euq2fxdTEr_KDWQC7sDRRGeCm6bFsHPrhUMg',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text:"Hello!"
      }),
    });
  };

  return (
    <div className="App">
      <h1 className='title'>Positive Emo</h1>
      <div className='button-area'>
        <button onClick={()=> click()}>emoちゃんのimg？</button>
      </div>
    </div>
  );
}

export default App;
