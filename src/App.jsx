import "./App.css";
import { Wishlist } from "./components/Wishlist";
import data from "./data.json";
import { useState, useEffect } from "react";
import { Searchlist } from "./components/Searchlist";
function App() {
  const [wishlist, setWishlist] = useState([]);
  const [searchedStocks, setSearchedStocks] = useState([]);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(true);
  //console.log(searched);
  useEffect(() => {
    const searched = data.filter((el) => el[0].startsWith(input));
    if (input === "") {
      setFlag(true);
    } else {
      setFlag(false);
    }

    setSearchedStocks(searched);
  }, [input]);

  const handleOnchange = (e) => {
    var inp = e.target.value.toUpperCase();
    setInput(inp);
  };
  const handleAdd = (e) => {
    //console.log(e.target.value);
    var wish = [...wishlist, ...data.filter((el) => el[0] == e.target.value)];
    setFlag(true);
    setWishlist(wish);
    //console.log(wishlist);
  };
  //console.log(searchedStocks);
  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          value={input}
          placeholder="search stocks..."
          onChange={handleOnchange}
        />
      </div>
      {flag ? (
        <Wishlist
          wishlistData={wishlist}
          setWishlistData={(el) => {
            setWishlist(el);
          }}
        />
      ) : (
        <Searchlist
          searchData={searchedStocks}
          handleAdd={handleAdd}
          wishlist={wishlist}
        />
      )}
    </div>
  );
}

export default App;
