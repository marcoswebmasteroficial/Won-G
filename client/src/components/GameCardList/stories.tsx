import { Story, Meta } from '@storybook/react/types-6-0'
import GameCardList from '.'

export default {
  title: 'GameCardList',
  component: GameCardList
} as Meta

export const Default: Story = () => <GameCardList />
