import { render, screen, fireEvent } from 'utils/test-utils'

import theme from 'styles/theme'
import item from './mock'
import GameCard from '.'

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...item} />)

    expect(
      screen.getByRole('heading', { name: item.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: item.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
      'src',
      item.img
    )
    expect(screen.getByRole('link', { name: item.title })).toHaveAttribute(
      'href',
      `/game/${item.slug}`
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...item} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...item} promotionalPrice={15} />)

    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('$15.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    render(<GameCard {...item} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    render(<GameCard {...item} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    render(
      <GameCard
        {...item}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
