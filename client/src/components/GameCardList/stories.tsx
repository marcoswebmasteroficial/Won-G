import { Story, Meta } from '@storybook/react/types-6-0'
import { GameCardProps } from 'components/GameCard'
import GameCardList from '.'
import items from './mock'
export default {
  title: 'Game/GameCardList',
  component: GameCardList,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardList items={args} {...args} />
  </div>
)
