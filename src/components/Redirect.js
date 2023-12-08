import axios from 'axios';
import React, { useState } from 'react'

const baseURL = "http://localhost:9999/show/"


export const Redirect = () => {
  const [shortcode, setShortcode] = useState("");
  const [originalURL, setOriginalURL] = useState("");

  const findRedirect = (shortcode) => {
    // console.log(shortcode);
    axios.get(baseURL + shortcode)
    .then((res) => console.log(res))
    .catch(err => {
      console.log(err);
      window.open(err.config.url, "_blank", "noreferrer");
    });
  };

  return (
    <div>
      <h1 className="titles"> Track your shorted URL : </h1>
      <input
        type="text"
        value={shortcode}
        placeholder="Enter short code"
        onChange={(e) => setShortcode(e.target.value)}
        id="shortcodeinp"
      />
      <button onClick={() => findRedirect(shortcode)}>
        Go To original URL
      </button>
    </div>
  );
};
