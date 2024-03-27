import React, { useState } from "react";
import Loading from "../../components/loading/Loading";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { generateShortUrl, clearUrl } from "../../feature/shorturl/urlSlice";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const { loading, shortUrl, error } = useSelector((state) => state.url);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setShowResult(true);
    setCopied(false);
    dispatch(clearUrl());
    dispatch(generateShortUrl(inputValue));
  };

  const handleClipboard = (text) => {
    if (navigator.clipboard) {
      // Use the Clipboard API for modern browsers
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error copying text using Clipboard API: ", error);
          fallbackCopyText(text); // Fallback to old method
        });
    } else {
      // Fallback to old method for browsers that don't support the Clipboard API
      fallbackCopyText(text);
    }
  };
  
  const fallbackCopyText = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <section className="homepage-section">
        <div className="homepage-container">
          <div className="container-header">
            <h1 className="homepage-title">
              Simple yet elegant solution
              <br />
              for <span className="highlight">long</span> URLs.
            </h1>
            <p className="homepage-desc">
              Transform long, cumbersome URLs into short, manageable links
              effortlessly. Simplify your sharing experience and track your
              links' performance with our intuitive URL shortening service.
              Start shortening URLs today!
            </p>
          </div>

          <div className="search-box-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />
            <button onClick={handleSubmit}>Make it short!</button>
          </div>

          <div className={`${showResult ? "search-box-result" : "null"}`}>
            {loading && !error && <Loading />}
            {shortUrl && !error && (
              <div className="result-box">
                <div className="result-container">
                  <p className="shorten-url">{shortUrl}</p>
                  <div className="copy-clipboard">
                    <span>
                      {copied ? (
                        <>
                          <i className="fa-solid fa-check"></i>
                          <Link to={shortUrl} target="_blank">
                            <i className="fa-solid fa-link"></i>
                          </Link>
                        </>
                      ) : (
                        <>
                          <i
                            className="fa-regular fa-copy"
                            onClick={() => handleClipboard(shortUrl)}
                          ></i>
                          <Link to={shortUrl} target="_blank">
                            <i className="fa-solid fa-link"></i>
                          </Link>
                        </>
                      )}
                    </span>
                  </div>
                </div>
                {/* <div className="again-btn">
                  <button>one more?</button>
                </div> */}
              </div>
            )}
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
