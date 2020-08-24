import React from "react";
import gdpk from '../../../../../assets/multimedia/gdpk.swf'

const GDPK = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <object data={gdpk} width={1200} height={700}/>
    </div>
  )
};
export default GDPK;
