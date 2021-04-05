import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import Wishlist from '.'
import gamesMock from 'components/GameCardSlider/mock'

const props = {
  games: gamesMock
}

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />)
    expect(
      screen.getByRole('heading', { name: /my wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })

  it('should render empty when there are no games', () => {
    render(<Wishlist />)

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
