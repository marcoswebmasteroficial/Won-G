import { render, screen } from 'utils/test-utils'
import mocks from './mock'
import GameCardList from '.'

describe('<GameCardList />', () => {
  it('should render the gamecardlist', () => {
    const { container } = render(<GameCardList items={mocks.slice(0, 9)} />)
    expect(screen.getByText(mocks[0].title)).toBeInTheDocument()
    expect(container.querySelectorAll('li')).toHaveLength(9)
  })
})
