import * as React from 'react'
import styled from 'styled-components'

const Card = styled.div`
   padding: 1.2rem;
   border: 1px solid black;
   width: 200px;
`

const Container = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3px;
`

function IngredientCards() {
    return (
        <Container>
            
            <Card>
            <header><h3>Turmeric</h3></header>
            <pre>Verstegen</pre>
            amount left: 45g
            original amount: 49g
            <div>expiry date: 15/06/2023</div>
            </Card>
            <Card>
            <header><h3>Turmeric</h3></header>
            <pre>Verstegen</pre>
            amount left: 45g
            original amount: 49g
            <div>expiry date: 15/06/2023</div>
            </Card>
            <Card>
            <header><h3>Turmeric</h3></header>
            <pre>Verstegen</pre>
            amount left: 45g
            original amount: 49g
            <div>expiry date: 15/06/2023</div>
            </Card>
            <Card>
            <header><h3>Turmeric</h3></header>
            <pre>Verstegen</pre>
            amount left: 45g
            original amount: 49g
            <div>expiry date: 15/06/2023</div>
            </Card>
        
        </Container>
    )
}

export { IngredientCards  }