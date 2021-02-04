import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaTwitterSquare } from 'react-icons/fa';
import { fetchAllQuotes } from './api'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.');
  const [author, setAuthor] = useState('Oprah Winfrey');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`


  useEffect(() => {
    const fetchQuotes = async () => {
      const allQuotes = await fetchAllQuotes();
      setQuotes(allQuotes);
      setLoading(false);
    }

    fetchQuotes();
  }, []);

  if(isLoading) {
    return <div>Loading...</div>
  }

  console.log(quotes[randomIndex].quote, quotes[randomIndex].author)

  const handleClick = () => {
    setQuote(quotes[randomIndex].quote);
    setAuthor(quotes[randomIndex].author);
  }

  return (
    <div>
      <Card id="quote-box" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <div id="text">{quote}</div>
            <div id="author">{author}</div>
          </Card.Text>

          <a id="tweet-quote" href={twitterLink}><FaTwitterSquare size={42}/></a>
         
          <Button id="new-quote" variant="primary" onClick={!isLoading ? handleClick : null}>New quote</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
