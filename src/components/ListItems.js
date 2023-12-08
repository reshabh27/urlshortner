import React from "react";

export const ListItems = ({ urls }) => {
  console.log(urls);
  let formattedDate = new Date().toLocaleDateString();
  let formattedTime = new Date().toLocaleTimeString();
  if (urls.expiresAt !== "Not set") {
    formattedDate = new Date().toLocaleDateString();
    formattedTime = new Date().toLocaleTimeString();
  }
  return (
    <tr>
      <td>{urls.longUrl}</td>
      <td>{urls.shortCode}</td>
      <td>{urls.clicks}</td>
      <td>{urls.expiresAt ? urls.expiresAt : "Not set"}</td>
    </tr>
  );
};
