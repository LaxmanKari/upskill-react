import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: 1,
  },
  "Namaste Everyone from laxman"
);

//React functional component
const HeaderComponent = () => {
  return <h1>Namaste React from laxman </h1>;
};

//reatc function component using normal function
const NavComponent = function () {
  return (
    <>
      <h1> Hey </h1>
      <HeaderComponent />
      <Heading3 />
      <h2> Hi </h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading using React Create Element API/Function"
);



//creating a h3 tag using JSX
const Heading3 = () => (
  <>
    {" "}
    <h3 id="h3" key="3" className="something">
      Created using JSX
    </h3>
    <h2></h2>
  </>
);

//react functional component

const Header = () => (
  <>
    <div>
      <h1>
        {" "}
        Header component
        <ul>
          <li>List-1</li>
        </ul>
      </h1>
    </div>
  </>
);

const Header2 = () => (
  <>
    
    <div>
      <ul>
        <li>
          Hello
        </li>
      </ul>
    </div>
  </>
)

root.render(<Header2 />);
