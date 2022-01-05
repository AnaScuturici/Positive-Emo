import './App.css';
import React, {useEffect} from 'react';
import axios from "axios";
import bocco from './img_bocco.png';

function App() {


  async function refresh(){
    const response = await axios.post("https://platform-api.bocco.me/oauth/token/refresh", 
      { 
        "refresh_token": "94b4950e-4718-43f6-9d58-76d2b2cc10de"
    })
    const token = response.data.access_token;
    console.log("response", token);
    return token; 
  };

  // useEffect(()=>{
  //   refresh();
  // }, []);

  const click = async (e) => {
    e.preventDefault();
    try {
      const text = await axios.get("/api");
      console.log(text.data);
      

    await axios.post("https://platform-api.bocco.me/v1/rooms/272f4f0f-b20c-4b18-9f4e-0cba6e9fae17/messages/text",  
      {
        'text': text.data,
      },
     {
      headers: {
        'Authorization': `Bearer ${await refresh()}`,
        'Content-Type': 'application/json'
      },
    });
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="App">
      <h1 className='title'>Positive Emo</h1>
      <div className='button-area'>
        <button onClick={(e)=> click(e)}>
           <p><img src={bocco} /></p>
          </button>
      </div>
    </div>
  );
}

export default App;
