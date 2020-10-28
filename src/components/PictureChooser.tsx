import React from 'react';
import styled from 'styled-components';
import { Picture } from './Picture';


// takes an array of objects which have a url property to an 
//image file, and a name key value pair 
// displays a search bar above to filter list
// displays 2000 x 200 px picture with name below it
// clicking on image selects that image for use in an ingredient card

// demo data

const Container = styled.div`
  padding: 12px;
  input {
    padding: 6px;
  }
`

const pic = {
  url: 'https://res.cloudinary.com/pantler/image/upload/v1556653536/dill-2500-56a20f953df78cf772718536_yynylc.jpg',
  title: 'Dill'
}

function PictureChooser() {
  return (
      <Container>
          <label htmlFor='filter'>Filter: </label>
          <input type='text' name='filter' id='filter' placeholder='type to filter list'/>
          <Picture picture={pic}/>
      </Container>
  )
}

export { PictureChooser }