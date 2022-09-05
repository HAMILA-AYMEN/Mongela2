
import './App.css';
import React, { useState} from "react";
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

import  NavBar  from './components/NavBar'


import Citizen from './img/Citizen.jpg'
import b2 from './img/b2.jpg'
import Festina from './img/Festina.jpg'
import Seconda from './img/Seconda.jpg'
import Locksley from './img/Locksley.jpg'
import Daniel from './img/Daniel.jpg'
import Boss from './img/Boss.jpg'
import ListMongela from './components/ListMongela';
import Panier from './components/Panier';








function App() {
  const [searchTitle, setsearchTitle] = useState("");
  
  const [Data,setData ]=useState([
    {
      id:1,
      img:Citizen,
      title:'Citizen',
      desc:'Montre Chronographe Homme Citizen Red Arrows A-T AT8060-09E',
      price:428,

  },
  {
      id:2,
      img:b2,
      title:'Citizen',
      desc:'Montre Chronographe Homme Citizen Navihawk AT JY8037-50E',
      price:608,

  },
  {
      id:3,
      img:Festina,
      title:'Festina',
      desc:' Montre Festina F20560/4',
      price:159,

  },
  {
      id:4,
      img:Locksley,
      title:'Locksley',
      desc:' Montre Locksley London LL106940',
      price:160,

  },
  {
      id:5,
      img:Seconda,
      title:'Sekonda',
      desc:'Montre Homme Sekonda 3207',
      price:321,

  },
  {
      id:6,
      img:Daniel,
      title:'Daniel Wellington',
      desc:'Montre Daniel Wellington DW00100482',
      price:360,

  },
  {
      id:7,
      img:Boss,
      title:'Hugo Boss',
      desc:'Montre Hugo Boss 1513779',
      price:376,

  }
  

  ]);
 
 
  

   
  return (
    <CartProvider>
    <div> 
      <NavBar setsearchTitle={setsearchTitle}  />
   

      <Routes>
      <Route path="/" element={ <ListMongela Data={Data} searchTitle={searchTitle}/> } />
      <Route path="/Panier" element={ <Panier/>} />
      
      </Routes>
      
      
      
            
            
    
      
    </div>
    </CartProvider>
  );
}

export default App;
