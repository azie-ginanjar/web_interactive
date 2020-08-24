import React, {useState} from "react";
import MovingComponent from 'react-moving-text';
import pic from "../../../../../assets/images/home_pic.png"

const AnimationsForChaining = ["unfold", "fadeOutToRight", "fadeOut", "fadeInFromTop", "fadeInFromLeft", "swing", "shadow", "jelly", "blur", "glowing", "bounce", "flash", "effect3D", "pulse", "spin", "fadeIn", "fadeInFromRight", "fadeOutToLeft", "fold", "shakeMix"]

const Home = () => {
  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType(AnimationsForChaining[animationIndex+1])
  }

  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <MovingComponent
        onAnimationEnd={handleChainAnimation}
        type={animationType}
        duration="1000ms"
        timing="linear"
        fillMode="forwards"
        iteration={1}>
        <h1 align={'center'} style={{
          fontSize: '4em'
        }}>Selamat datang</h1>
        <h1 align={'center'}>di Web Interaktif Pejabat Pengelola Informasi dan</h1>
        <h1 align={'center'}>Dokumentasi Perwakilan BKKBN Provinsi Jawa Barat</h1>
      </MovingComponent>
      <div style={{
        paddingLeft: '250px'
      }}>
        <img src={pic} width={'1000px'}/>
      </div>
    </div>
  )
};

export default Home;
