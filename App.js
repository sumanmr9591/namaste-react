import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div>
    <h1>Title element</h1>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste Javascript JSX</h1>
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName, cuisine, star, duration }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://images.hindustantimes.com/img/2023/01/23/550x309/swiggy_drunk_order_biryani_bengaluru_1674461815050_1674461815225_1674461815225.jpg"
      />
      <h4>{resName}</h4>
      <h5>{cuisine}</h5>
      <h5>{star} Stars</h5>
      <h5>{duration}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="chinese, continental"
          star={3}
          duration="14 Minutes"
        />
        <RestaurantCard
          resName="Ashraya"
          cuisine="South Indian, North Indian"
          star={4.5}
          duration="35 Minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
