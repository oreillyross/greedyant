import React from 'react';
import styled from 'styled-components';


const Picture = () => {
  
   React.useEffect(() => {
     console.log('inside use effect')
     return () => console.log('cleaning up')
   }, [])

  return (<div>Some value</div>)

}

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
  url: ''
}


function PictureChooser() {
  return (
      <Container>
          <label htmlFor='filter'>Filter: </label>
          <input type='text' name='filter' id='filter' placeholder='type to filter list'/>
          
      </Container>
  )
}

export { PictureChooser }