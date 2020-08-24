import React, {useState} from "react";
import song from "../../assets/multimedia/berencana_hebat.mp4";
import icon from "../../assets/images/avatar_bkkbn.jpeg"
import ComplexButtons from "./ComplexButtons";
import MovingComponent from 'react-moving-text';

const AnimationsForChaining = ["unfold", "fadeOutToRight", "fadeOut", "fadeInFromTop", "fadeInFromLeft", "swing", "shadow", "jelly", "blur", "glowing", "bounce", "flash", "effect3D", "pulse", "spin", "fadeIn", "fadeInFromRight", "fadeOutToLeft", "fold", "shakeMix"]

const Home = () => {
  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType(AnimationsForChaining[animationIndex+1])
  }

  return (
    <div className="animated slideInUpTiny animation-duration-3" style={{
      margin: '0 auto',
      paddingTop: '2%'
    }}>
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
        paddingBottom: '2%',
        paddingLeft: "90px"
      }}>
        <img src={icon} height={500}/>
      </div>
      <div>
        <ComplexButtons />
      </div>
    </div>
  )
};

export default Home;
