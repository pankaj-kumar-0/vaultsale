import React from "react";
import "../Styles/AllPreSales.css";
import Heading from "../components/Heading";
import presale_img1 from "../Assets/Images/All Presales imgs/presale1.png";
import cards from "../Data/AllPresalesCardsData";
import AllPreaslesCard from "../components/AllPreaslesCard";

const AllPreSales = () => {
  return (
    <div className="all_presales_page">
      <div className="top_sorting_bar">
        <div className="sorting_bar_heading_box">
          <Heading text="Your Launchpads" />
        </div>
        <div className="sorting_box">
          <div className="all_pre_box1">
            <input
              className="search_bar"
              type="text"
              placeholder="Enter token name or Symbol"
            />
          </div>
          <div className="all_pre_box2">
            <div className="row_heading">
              <div id="Filter_heading">Filter by</div>
              <div id="sort_heading">Sort by</div>
            </div>
            <div className="row_heading">
              <div id="filter">
                All <i className="bi bi-caret-down-fill"></i>
              </div>
              <div id="sort">
                No Filter <i className="bi bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all_pre_sales">
        {cards.map((data, index) => (
          <AllPreaslesCard key={index} item={data} />
        ))}
      </div>
    </div>
  );
};

export default AllPreSales;
