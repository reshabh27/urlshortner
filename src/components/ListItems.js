import React from "react";

export const ListItems = ({ urls }) => {
//   console.log(urls);


  return (
      <tr>
        <td>{urls.longUrl}</td>
        <td>{urls.shortCode}</td>
        <td>{urls.clicks}</td>
        <td>{urls.expiresAt ? urls.expiresAt : "Not set"}</td>
      </tr>
  );
};
