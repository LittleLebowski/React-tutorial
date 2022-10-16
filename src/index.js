import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// react course on youtube time: 02.01.00
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

function BookList() {
  const items = (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
  sendRoot.render(items);
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Auther />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71tR2ZEgPYL._AC_UL210_SR195,210_.jpg"
    alt=""
  />
);

const Title = () => <h1>Harry Potter and the Order of the Phoenix:</h1>;

const Auther = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75 rem", marginTop: "0.25 rem" }}>
    Mr. Jim Kay (Illustrator), Neil Packer (Illustrator)
  </h4>
);

BookList();
