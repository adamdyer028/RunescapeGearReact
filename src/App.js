import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import UserDisplayComponent from './components/UserDisplayComponent';
import NavBarComponent from './components/NavBarComponent';
import FeedComponent from './components/FeedComponent';



function GearItem({imgSrc, className}) {
  return (
    <div className={className}>
      <img src={imgSrc}></img>
    </div>
  );
}

function GearLayout() {
  return (
    <div className='gear-select'>
      <div className='gear-items'>  
        <GearItem className="head" imgSrc="/images/head.png"/>
        
        <GearItem className="cape" imgSrc="/images/cape.png"/>
        <GearItem className="neck" imgSrc="/images/neck.png"/>
        <GearItem className="ammo" imgSrc="/images/ammunition.png"/>
        
        <GearItem className="weapon" imgSrc="/images/weapon.png"/>
        <GearItem className="body" imgSrc="/images/body.png"/>
        <GearItem className="shield" imgSrc="/images/shield.png"/>
        
        <GearItem className="legs" imgSrc="/images/legs.png"/>

        <GearItem className="hands" imgSrc="/images/hands.png"/>
        <GearItem className="feet" imgSrc="/images/feet.png"/>
        <GearItem className="ring" imgSrc="/images/ring.png"/>
      </div>
    </div>  
  );
}

function GearSelect() {
  return (
  <div>
    <h1>Select Your Gear:</h1>
    <GearLayout /> 
    <UserDisplayComponent />
  </div>
  );
}

export default function App() {
  return (
    <div className='gearComponent'>
      <NavBarComponent />
      <FeedComponent />
    </div>
  );
}





