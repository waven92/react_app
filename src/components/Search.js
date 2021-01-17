import React, { useState } from "react"; // Reactのstateの機能を関数コンポーネントに追加することができる


const Search = (props) => {
  // searchValueというstate変数を宣言、初期値は空、setSearchValueで更新
  const [searchValue, setSearchValue] = useState("");
  
  // 入力フォームにて、キーストロークごとに実行される関数
  const handleSearchInputChanges = (e) => {
    // 入力された値を"searchValue"変数にセットする
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  // 「SEARCH」ボタンをクリックした時に呼ばれる関数
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <button onClick={callSearchFunction} type="submit">SEARCH</button>
      </form>
    );
}

export default Search;