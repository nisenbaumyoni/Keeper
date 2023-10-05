import React from "react";

export function Footer() {
  const date = new Date().getFullYear();

  //const year = date.getFullYear();

  return (<footer><p>Copyright ⓒ {date}</p></footer>)
}