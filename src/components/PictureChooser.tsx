import React from 'react';
import styled from 'styled-components';

// takes an array of objects which have a url property to an 
//image file, and a name key value pair 
// displays a search bar above to filter list
// displays 2000 x 200 px picture with name below it
// clicking on image selects that image for use in an ingredient card

// demo data

const Container = styled.div`
  padding: 12px;
`



function PictureChooser(list: any[]) {
  return (
      <Container>
          <label htmlFor='filter'>Filter: </label>
          <input type='text' name='filter' id='filter' placeholder='type to filter list'/>
          {list.map(item => (
              <div>item.name</div>
          ))}
      </Container>
  )
}

export { PictureChooser }