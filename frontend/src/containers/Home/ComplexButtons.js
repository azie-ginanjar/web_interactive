import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import gkpd_icon from '../../assets/images/bkkbn_thumbnail.jpg';
import UIFx from "uifx";
import beep from '../../assets/audios/button-3.wav';
import { useHistory } from 'react-router-dom';

const beep_sound = new UIFx(beep)

const images = [
  {
    url: gkpd_icon,
    title: 'Menu',
    width: '100%',
    type: 'gdpk'
  }
];

function ComplexButtons() {

  const history = useHistory();

  return (
    <div className="complex-btn-wrapper">
      {images.map(image => (
        <ButtonBase
          focusRipple
          onClick={() => {
            beep_sound.play();
            history.push('/app/bkkbn/permohonan')
          }}
          key={image.title}
          className="complex-btn ripple-effect"
          style={{
            width: image.width,
          }}>
          <div
            className="img-src"
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className="img-btn-overlay"/>
          <div className="img-btn">
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className="img-title"
            >
              {image.title}
              <div className="img-marked"/>
            </Typography>
          </div>
        </ButtonBase>
      ))}
    </div>
  );
}

export default ComplexButtons;
