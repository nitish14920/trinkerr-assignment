import React, { useRef } from "react";

export const Searchlist = ({ searchData, handleAdd, wishlist }) => {
  return (
    <div className="list">
      {searchData.map((el, i) => {
        var a = el[1] - el[2];
        var cl;
        a > 0 ? (cl = "green-color") : (cl = "red-color");
        var x = wishlist.filter((ele) => ele[0] === el[0]);

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

              <div
                style={{
                  display: "flex",
                  width: "15vw",
                  justifyContent: "space-between",
                }}
              >
                {x.length ? (
                  ""
                ) : (
                  <button className="add_btn" value={el[0]} onClick={handleAdd}>
                    +
                  </button>
                )}

                <div className="searchlist-stock-prices">
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
                          color: "rgb(252, 52, 52)",
                        }}
                        className="fas fa-sort-down arrow-down"
                      ></i>
                    )}
                    {((el[1] - el[2]) / el[2]).toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
