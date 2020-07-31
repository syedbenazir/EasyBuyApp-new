import React from "react";

// Stateless Functional Component

const NavBar = ({ totalNums }) => {
  return (
    <nav>
      <div>
        <span style={{ width: 50 }}>{totalNums}</span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;
