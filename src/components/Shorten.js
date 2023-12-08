import React, { useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:9999/shorten';

export const Shorten = () => {
  const [inputURL, setInputURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [expiresAt, setExpiresAt] = useState(new Date());
  const [newlyCreated, setNewlyCreated] = useState(0);

  // Function for checking if URL provided by the user is valid or not
  const isValidURL = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  // Function for creating the short URL from the long URL provided by the user
  const fetchData = (inputURL) => {
    if (isValidURL(inputURL)) {
      axios
        .post(baseURL, {
          longUrl: inputURL,
          customCode: customCode,
          expiresAt: expiresAt,
        })
        .then((res) => {
          setShortenedURL(res.data.shortUrl);
          setNewlyCreated(res.data.newlyCreated);
        })
        .catch((err) => console.log(err));
    } else {
      alert('Not a valid URL');
    }
  };

  return (
    <div className="shortbox">
      <h1 className="titles">URL Shortener:</h1>
      <div style={{marginBottom:'10px'}}>
        <label htmlFor="inputURL" style={{marginRight:'15px'}}>Enter long URL here:</label>
        <input
          type="text"
          placeholder="Enter long URL here"
          id="inputURL"
          onChange={(e) => setInputURL(e.target.value)}
        />
      </div>

      <div className="shortbox" style={{marginBottom:'10px'}}>
        <label htmlFor="customCode" style={{marginRight:'15px'}}>Enter custom code (optional):</label>
        <input
          type="text"
          placeholder="Enter custom code"
          id="customCode"
          onChange={(e) => setCustomCode(e.target.value)}
        />
      </div>

      <div className="shortbox" style={{marginBottom:'20px'}}>
        <label htmlFor="expiresAt" style={{marginRight:'15px'}}>Expires At (optional):</label>
        <input
          type="datetime-local"
          name="expiresAt"
          id="expiresAt"
          value={expiresAt}
          onChange={(e) => setExpiresAt(e.target.value)}
        />
      </div>
      <button onClick={() => fetchData(inputURL)}>Shorten URL</button>
      <div style={{marginTop:'20px'}}>
        {shortenedURL? `shortened URL is ${shortenedURL}` : ""}
        
        <br />
        {newlyCreated ? "Congratulations! You created a new link." : ""}
      </div>
    </div>
  );
};