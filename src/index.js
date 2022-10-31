import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// react course on youtube time: 02.59.00
const sendRoot = ReactDOM.createRoot(document.getElementById("root"));

// const Greeting = () => {
//   const element = (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
//   sendRoot.render(element); //return kullanılabilir
// };

// function Person() {
//   return <h1>My name is Slim Shady</h1>;
// }

// const Message = () => <h4>This is fucking boring!!!</h4>;
// Greeting();
//ReactDOM.render(<Greeting />, document.getElementById("root")); eski yöntem
<></>;
const objBooks = [
  {
    id: 1,
    title: "Harry abi ve sirlar odasi",
    author: "one brave lady",
    img: "https://images-na.ssl-images-amazon.com/images/I/71tR2ZEgPYL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 2,
    title: "The Guy From Friends",
    author: "Handsome Boi",
    img: "https://images-na.ssl-images-amazon.com/images/I/81ZkvDcuCzL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 3,
    title: "Diary of a Wimpy Kid Book 17",
    author: "Diper Överlöde",
    img: "https://images-na.ssl-images-amazon.com/images/I/81PQlW-p8nL._AC_UL210_SR195,210_.jpg",
  },
  {
    id: 4,
    title: "Series That Fat Boi didnt finish yet",
    author: "Fat Boi",
    img: "https://images-na.ssl-images-amazon.com/images/I/91k-kLccE8L._AC_UL210_SR195,210_.jpg",
  },
];

function BookList() {
  const items = (
    <section className="booklist">
      {objBooks.map((bk) => {
        return <Book key={bk.id} {...bk} />;
      })}
    </section>
  );
  sendRoot.render(items);
}

const Book = ({ title, author, img }) => {
  console.log({ title, author, img });
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

BookList();
