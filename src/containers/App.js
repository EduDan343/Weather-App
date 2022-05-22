import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
//import { Switch } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';//no sirve es el q venia en la homework...
const key = '8c5ad37f9fe19431fce62b8e2c9a94e9'  //sirve...

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {

    console.log('funcion onSearch..', ciudad)
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            humidity:  recurso.main.humidity,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    console.log('ejecucion de onfilter...')
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Switch >
        <Route path="/about" component={About} />
        <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose} />} />
        <Route exact path='/ciudad/:ciudadId' render={({match}) => (<Ciudad city={onFilter(match.params.ciudadId)}/>)}/>
        {/* <div>
          <Cards cities={cities} onClose={onClose} />
        </div>  */}
        {/* <Route path='/ciudad:id'/> */}
        {/* <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={ onFilter(match.params.ciudadId) } />} */}
      
      </Switch >
      {/* <Nav onSearch={onSearch}/>
      <BrowserRouter >
        <Route path='/about' element={<About />} />
        <Route path='/' element={ <Cards cities={cities} onClose={onClose} /> } />


      </BrowserRouter > */}
    </div>
  );
}

export default App;
