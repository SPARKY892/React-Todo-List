import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { title = "Welcome to React" } = props;

  return (
    <header className="App-header">
      <h1 className="App-title">{title}</h1>
    </header>
  );
};

Header.PropTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
