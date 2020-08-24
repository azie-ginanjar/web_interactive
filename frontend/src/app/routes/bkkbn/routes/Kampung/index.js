import React from "react";
import kampung_kb from '../../../../../assets/multimedia/kampungn_kb.mp4'

const Kampung = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <video width="80%" autoPlay>
        <source src={kampung_kb} type="video/mp4"/>
      </video>
    </div>
  )
};
export default Kampung;
