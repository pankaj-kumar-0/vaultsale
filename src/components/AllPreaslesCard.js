import React from 'react';
import "../Styles/AllPresalesCard.css";


const AllPreaslesCard = ({item}) => {
  return (
    <>
    <div className="Presale_card">
          <div className="sale_btn" style={{backgroundColor: `${item.sale_btn_bg_color}`}} >
              {item.sale_btn_status}
              </div>
          <div className="name_row">
            <div className="img_box">
              <img src={item.image} alt="loading" />
            </div>
            <h1>{item.name}</h1>
          </div>

          <div className="progress_heading">
            <div className="progress_box1">
              {item.obtain_bnb} BNB
            </div>
            <div className="progress_box2">
              <div className="total_bnb">{item.obtain_bnb}/{item.total_bnb} BNB</div>
              <div className="bnb_persentage">Progress ({item.progress}%)</div>

            </div>
          </div>

          <div className="progress_bg">
            <div className="progress_line" style={{width:`${item.progress}%`}} ></div>
          </div>

          <div className="cap_box">
            <div className="cap">
              Softcap<br/><span>400 BNB</span>
            </div>
            <div className="cap">
              Hardcap<br/><span>1200 BNB</span>
            </div>
          </div>

          <div className="lower_box">
            <div className="sale_end_time">
                Sales end:<br/><span>04:15:51:09</span>
            </div>
            <div className="view_pool_btn">View Pool</div>
          </div>
          <div className="lower_line"></div>
          <div className="middle_line"></div>

        </div>
    </>
  )
}

export default AllPreaslesCard
