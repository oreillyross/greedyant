import React from "react";
import { IngredientList } from "./components/IngredientsList";
import { PictureChooser } from "./components/PictureChooser";



const list = [
  {
   imgUrl: './pic.jpg',
   name: 'A name of an ingredient'      
  },
  {
      imgUrl: './pic.jpg',
      name: 'A name of an ingredient'      
     },
     {
      imgUrl: './pic.jpg',
      name: 'A name of an ingredient'      
     },
     {
      imgUrl: './pic.jpg',
      name: 'A name of an ingredient'      
     },
]



export default function App() {
  return (
    <div>
     
    
        <IngredientList/>
     
    </div>
  ); 

}
