import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  arrowcolor?: 'white' | 'black'
}
const Showcase = ({ title, highlight, games, arrowcolor }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading line="left" lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider color={arrowcolor} items={games} />}
  </S.Wrapper>
)

export default Showcase
