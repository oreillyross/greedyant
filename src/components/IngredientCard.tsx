import * as React from 'react'
import styled from 'styled-components'

const Card = styled.div`
   width: 100px;
   height: 100px;
   border: 1px solid black;
`
function IngredientCard() {
    return (
        <div>
            
            <Card>
            <header><h3>Turmeric</h3></header>
            <pre>Verstegen</pre>
            amount left: 45g
            original amount: 49g
            expiry date: 15/06/2023
            </Card>
        
        </div>
    )
}

export { IngredientCard }