import axios from 'axios';
import React, { useState } from 'react'

const baseURL = "http://localhost:9999/delete/";

export const Delete = () => {
  const [shortcode, setShortcode] = useState("");

  const deleteURL = (shCode) => {
    axios
      .delete(baseURL + shCode)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        if (err.response.status === 404)
          alert("This short code does not exist");
        else if (err.response.code === 500)
          alert("There is an server error please try after some time");
        else alert("please try after some time");
      });
  };

  return (
    <div>
      <h1 className="titles">Delete shorted URL : </h1>
      <input
        type="text"
        value={shortcode}
        placeholder="Enter short code"
        onChange={(e) => setShortcode(e.target.value)}
        id=""
      />
      <button  onClick={() => deleteURL(shortcode)}>
        Delete URL
      </button>
    </div>
  );
};
