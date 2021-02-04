import axios from 'axios';

export const fetchAllQuotes = async () => {
    let quotesUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    try {
        const response = await axios.get(quotesUrl);
        return response.data.quotes;
    } catch(error) {
        return error;
    }
}