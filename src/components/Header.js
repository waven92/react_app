import React from "react";

// ヘッダーをレンダリングするコンポーネント
const Header = (props) => {
  return (
    <header className="App-header">
      <h1>{props.text}</h1>
    </header>
  );
};

export default Header;