import * as React from 'react'
import styled from 'styled-components'


//ups roca
// url placement size repeat o clip attachment
const StyledDisplay = styled.div`
  margin: 24px;
  font-size: 16px;
  padding: 16px;
  width: 400px;
  height: 400px;
  border: 1px solid green;
  background-image: url('https://res.cloudinary.com/pantler/image/upload/c_scale,w_384/v1556653564/1200px-Bright_red_tomato_and_cross_section02_u8hklz.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 20px;
  
`

const IngredientDisplay = () => {
    return (

        <StyledDisplay>
            <div>
                Tomatoes
            </div>
        </StyledDisplay>
    )
}

export { IngredientDisplay }