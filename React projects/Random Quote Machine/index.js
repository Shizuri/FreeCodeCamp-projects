const { useState, useEffect } = React;

const App = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [quoteText, setQuoteText] = useState("Quote");
    const [author, setAuthor] = useState("Author");

    const getRandomInclusive = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);

    const fillQuoteAndAuthor = () => {
        if (items.length > 0) {
            const quote = items[getRandomInclusive(0, items.length)];
            // console.log({ quote });
            setQuoteText(quote.quote);
            setAuthor(quote.author);
        }
    };

    // console.log(getRandomInclusive(0, 1))

    useEffect(() => {
        fetch(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.quotes);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fillQuoteAndAuthor();
    }, [items]);

    // console.log("items: ", items);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App" id="quote-box">
                <div className="App-upper-box">
                    <div className="App-text" id="text">
                        „{quoteText}“
					</div>
                    <div className="App-author" id="author">
                        - {author}
                    </div>
                </div>
                <div className="App-lower-box">
                    <a
                        href={`https://twitter.com/intent/tweet?text=„${quoteText}“ - ${author}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="App-tweet-quote"
                        id="tweet-quote"
                        data-size="large"
                        title="Tweet this quote!"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <button
                        onClick={fillQuoteAndAuthor}
                        className="App-new-quote"
                        id="new-quote"
                    >
                        New quote
					</button>
                </div>
            </div>
        );
    }
};

// ======================

ReactDOM.render(<App />, document.getElementById("root"));
