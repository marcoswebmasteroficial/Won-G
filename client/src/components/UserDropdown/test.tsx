import { render, screen, userEvent } from 'utils/test-utils'

import UserDropdown from '.'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))
describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Marcos" />)
    expect(screen.getByText(/marcos/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Marcos" />)
    userEvent.click(screen.getByText(/marcos/i))
    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /My Orders/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /My Wishlist/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
