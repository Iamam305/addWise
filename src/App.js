
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingQuote, setLoadingQuote] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);



  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true);
      setErrorMessage("");
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      setLoadingQuote(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoadingQuote(false);
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
