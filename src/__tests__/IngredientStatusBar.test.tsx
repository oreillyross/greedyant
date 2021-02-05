import * as React from 'react';
import App from "../App";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Ingredient Status Bar', () => {
    it('renders a div that is 40px in height', () => {
        const app = render(<App/>)
    })
})
