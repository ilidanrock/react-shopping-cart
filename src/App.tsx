import { useState }  from 'react';
import { useQuery } from "react-query";
//Components 
import Drawer from '@material-ui/core/Drawer'
import { LinearProgress } from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import AddShoopingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from '@material-ui/core/Badge'
//Styles
import { Wrapper } from "./App.styles";

export type CartItemType = {
  
}

const getProducts = async () => 
  await (await fetch('https://fakestoreapi.com')).json()

const App = () => {
  return (
    <div>
      Start
    </div>
  );
}

export default App;
