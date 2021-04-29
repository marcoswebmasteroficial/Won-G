import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import Wishlist from '.'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'
import gamesMock from 'components/GameCardSlider/mock'

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Wishlist />, { wishlistProviderProps })
    expect(
      screen.getByRole('heading', { name: /my wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }
    render(<Wishlist />, { wishlistProviderProps })
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
