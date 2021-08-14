import { render, screen, fireEvent } from 'utils/test-utils'
import SearchInput from '.'

describe('<SearchInput />', () => {
  it('should render the heading', () => {
    const { container } = render(<SearchInput />)

    expect(
      screen.getByRole('heading', { name: /SearchInput/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
