import React from 'react'
import Container from './Container'
import { render, screen } from '@testing-library/react'

const demoData = [{ name: "Bob" }, { name: "Jimmy" }, { name: "Jones" }];

describe('Container', () => {
it('renders a Container', () => {
  render(<Container/>);
})
it('renders AddBox if no array passed', () => {
render(<Container/>)
screen.getByAltText('add item', {exact: true})

})
})

