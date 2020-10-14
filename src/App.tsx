import React from "react";
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
     
     <PictureChooser list={list}/>
        
     
    </div>
  ); 

}
