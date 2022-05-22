import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import termometro from '../img/termometro.svg'

export default function Card ({min, max, name, img, onClose, id, humidity, wind}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <Link to={`/ciudad/${id}`}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className='iconTemp'></div>
            <div className="tempInfo">
              <p><b>Temp Min</b></p>
              <p>{min}°</p>
            </div>
            <div className="tempInfo2">
              <p><b>Temp Max</b></p>
              <p>{max}°</p>
            </div>
            <div id='iconHumedad'></div>
            <div className='humedad'>
                <p>Humidity :</p>
                <p>{humidity}%</p>
            </div>
            <div className='iconWind'></div>
            <div className='wind'>
                <p>Wind: </p>
                <p>{wind*2} km/h</p>
            </div>
            <div className="iconClima">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="70" alt="icon clima" />
            </div>
          </div>
        </div>
        </Link>
        {/* <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">+Info {name}</h5>
        </Link> */}
      </div>
    );
};
