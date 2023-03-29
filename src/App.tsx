import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FooterApp from './components/FooterApp';
import HeaderApp from './components/HeaderApp';
import MenuApp from './components/MenuApp';
import PrincipalApp from './components/Principal';
import { MenuList } from './types';

const INITIAL_STATE = {
  "lista": [
    {
      "card_list": [],
      "pays_transfer": [
        {
          "between_cards": [],
          "banks": [],
          "credit_card": []
        }
      ],
      "support": [
        {
          "lock": [],
          "change_pass": []
        }
      ],
      "enterprises": []
    }
  ]
}


function App() {
  const [menuList, setMenuList] = useState<MenuList>({lista:{}})

  useEffect(() => {
    setMenuList(INITIAL_STATE)
  },[])
console.log(menuList)
  return (
    <div className="App">
      <HeaderApp />
      <MenuApp menuList={menuList} />
      <PrincipalApp />
      <FooterApp />
    </div>
  );
}

export default App;
