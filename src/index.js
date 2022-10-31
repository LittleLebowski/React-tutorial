//import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { objBooks } from "./books";
import Book from "./Book";
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
BookList();
