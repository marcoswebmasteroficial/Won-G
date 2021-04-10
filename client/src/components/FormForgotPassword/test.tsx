import { render, screen } from '@testing-library/react'

import FormForgotPassword from '.'

describe('<FormForgotPassword />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormForgotPassword />)

    expect(screen.getByRole('heading', { name: /FormForgotPassword/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
