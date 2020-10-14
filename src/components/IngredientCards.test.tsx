import React from 'react';  
import App from "../App";
import { render, screen } from '@testing-library/react'

describe('Ingredient cards', () => {
    
    
    it('should render the search box', () => {
        const container = render(<App/>)
        const filterTextBox = screen.getByRole('textbox', {
            name: /filter:/i
          })
          expect(filterTextBox).toBeDefined()
    })

    


})