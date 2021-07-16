import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Main from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#ffffff' }) //toHaveStyle verifica os estilos
  })
})
