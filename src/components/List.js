
import React, { useState } from 'react'
import ListModal from './ListModal';

export const List = () => {
  
  return (
    <div>
      <h1 className="titles">Get all URL and shortcodes : </h1>
      <ListModal />
    </div>
  );
};












// const getData = () => {
//   axios
//     .get(baseURL)
//     .then((res) => {
//       setData(res.data.urls);
//       setIsAllCodeVisible(1);
//     })
//     .catch((err) => console.log(err));
// };

{/* <button onClick={() => getData()} style={{ marginBottom: "50px" }}>
  GET ALL the data from database
</button>
{isAllCodeVisible ? (
  <table className="styled-table">
    <thead>
      <tr>
        <th>Original URL</th>
        <th>ShortCode</th>
        <th>Number of time it Visited</th>
        <th>Expires at</th>
      </tr>
    </thead>
    <tbody>
      {data.map((urls) => {
        console.log(urls);
        return <ListItems key={urls.id} urls={urls} />;
      })}
    </tbody>
  </table>
) : (
  ""
)} */}