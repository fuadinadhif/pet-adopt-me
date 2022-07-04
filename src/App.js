import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Search from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// * THIS COME FROM ---------------------------------------------
// import ReactDOM from "react-dom";
// import Pet from "./Pet";

// const App = () => {
//   return (
//     <div>
//       <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="Dog" breed="Havanese" />
//       <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
//       <Pet name="Doink" animal="Cat" breed="Mix" />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

// * FROM THIS --------------------------------------------------
// import React from "react";
// import { render } from "react-dom";
// import Pet from "/.Pet.js";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));
