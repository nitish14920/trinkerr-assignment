import React from "react";

export const Wishlist = ({ wishlistData, setWishlistData }) => {
  const handleDelete = (e) => {
    var newWish = wishlistData.filter((el) => el !== e);
    setWishlistData(newWish);
  };
  return (
    <div className="list">
      <div className="wishlist-header">
        <h1>Nitish's WishList</h1>
        <button
          onClick={() => {
            setWishlistData([]);
          }}
        >
          <i className="fas fa-trash-alt"></i>. All
        </button>
      </div>
      <div className="searchlist">
        {wishlistData.map((el, i) => {
          var a = el[1] - el[2];
          var cl;
          a > 0 ? (cl = "green-color") : (cl = "red-color");
          return (
            <>
              <div key={i} className="search-stock-div">
                <div>
                  <h3 className={cl}>{el[0].substr(0, el[0].length - 5)}</h3>
                  <div
                    style={{
                      color: "#aeafaf",
                      width: "40px",
                      fontSize: ".7rem",
                      borderRadius: "3px",
                      backgroundColor: "#f5f4f4",
                    }}
                  >
                    NSE
                  </div>
                </div>
                <div className="wishlist-stock-prices">
                  <h3 className={cl}>{el[1]}</h3>
                  <p>
                    {((el[1] - el[2]) / el[2]).toFixed(2) > 0 ? (
                      <i
                        style={{
                          position: "relative",
                          top: "4px",
                          right: "6px",
                          color: "rgb(5, 255, 130)",
                        }}
                        className="fas fa-sort-up"
                      ></i>
                    ) : (
                      <i
                        style={{
                          position: "relative",
                          bottom: "2px",
                          right: "6px",
                          color: "rgb(252, 52, 52",
                        }}
                        className="fas fa-sort-down"
                      ></i>
                    )}
                    {((el[1] - el[2]) / el[2]).toFixed(2)}%
                  </p>
                </div>
              </div>
              <button
                className="del_btn"
                value={el[0]}
                onClick={() => {
                  handleDelete(el);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};
