import React from 'react'
import Container from './Container'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

const demoData = [{ name: "Bob" }, { name: "Jimmy" }, { name: "Jones" }];

describe('Container', () => {
it('renders a Container', () => {
  render(<Container content={[{name: 'bob'}]}/>);
})
it('renders AddBox if no array passed', () => {
render(<Container/>)

const addBox = screen.getByAltText('add item', {exact: true})
expect(addBox).toBeInTheDocument()


})
})

