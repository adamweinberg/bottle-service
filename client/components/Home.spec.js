/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'
import '@testing-library/jest-dom'

describe('Home', () => {
  // beforeEach(() => {
  //   home = shallow(<Home username="cody" />)
  // })

  // it('renders the email in an h3', () => {
  //   expect(home.find('h3').text()).to.be.equal('Welcome, cody')
  // })
  test('renders Home component', () => {
    render(<Home />)

    expect(screen.queryByText('Sey,')).toBeNull()
    // screen.getByText('Welcome')
    screen.debug()
  })

  test('some other', () => {
    render(<Home />)

    const x = screen.queryByText('Welcome')
    console.log(x)
  })
})
