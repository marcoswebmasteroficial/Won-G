import { render, screen } from '@testing-library/react'

import FormResetPassword from '.'

describe('<FormResetPassword />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormResetPassword />)

    expect(screen.getByRole('heading', { name: /FormResetPassword/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
