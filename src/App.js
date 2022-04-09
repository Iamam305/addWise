
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [quote, setQuote] = useState({});


  useEffect(() => {
    fetchRandomQuote();
  }, []);



  async function fetchRandomQuote() {
    try {
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className='advice_parent'>
        <div className='advice_card'>
          <h1>" {quote.content} "</h1>

          <button className='advice_button' onClick={fetchRandomQuote}>GET ADVIDE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
