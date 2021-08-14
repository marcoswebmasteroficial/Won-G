import { Story, Meta } from '@storybook/react/types-6-0'
import SearchInput, { SearchInputProps } from '.'

export default {
  title: 'SearchInput',
  args: {
    iconPosition: 'right',
    placeholder: 'Pesquisar Game',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  component: SearchInput
} as Meta

export const Default: Story<SearchInputProps> = (args) => (
  <div
    style={{
      maxWidth: 300,
      padding: 15,
      display: 'flex',
      justifyContent: 'flex-end'
    }}
  >
    <SearchInput {...args} />
  </div>
)
