import React from "react";

const complexEvent = (author) => {
  console.log(author);
};
const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert("congrats you added click");
};
const Book = ({ title, author, img }) => {
  console.log({ title, author, img });
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        button
      </button>
      <button type="button" onClick={() => complexEvent(author)}>
        complex event
      </button>
    </article>
  );
};
export default Book;
