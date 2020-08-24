import React from "react";
import CardBox from "../../../../../components/CardBox";
import TinyBarChart from "./TinyBarChart";

const Summary = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">

      <div className="row">
        <CardBox heading="Jumlah  Permohonan Informasi">
          <TinyBarChart/>
        </CardBox>
      </div>
    </div>
  )
};
export default Summary;
