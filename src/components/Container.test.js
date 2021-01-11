import React from 'react'
import Container from './Container'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

const demoData = [{ name: "Bob" }, { name: "Jimmy" }, { name: "Jones" }];

describe('Container', () => {
it('renders a Container', () => {
  render(<Container content={[]}/>);
})
it('renders AddBox if empty array passed', () => {
render(<Container content={[]}/>)
const addBox = screen.getByAltText('add item', {exact: true})
expect(addBox).toBeInTheDocument()

it('renders three boxes', () => {
  render(<Container/ content={demoData}>)
  const threeBoxes = screen.getAllByText(/Box/)
})

})
})

