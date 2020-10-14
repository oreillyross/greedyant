import React from 'react';

// takes an array of objects which have a url property to an 
//image file, and a name key value pair 
// displays a search bar above to filter list
// displays 2000 x 200 px picture with name below it
// clicking on image selects that image for use in an ingredient card

// demo data

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

function PictureChooser() {
  return (
      <div>
          <input type='text' name='filter' id='filter'/>

      </div>
  )
}

export { PictureChooser }