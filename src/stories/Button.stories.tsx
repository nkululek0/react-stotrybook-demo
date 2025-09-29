import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import { Button } from '../components/Button';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  },
  args: {
    onClick: fn()
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Click Me',
    variant: 'primary',
    size: 'lg'
  },
  render({buttonText, ...args}) {
    return <Button {...args}>{buttonText}</Button>;
  }
};

export const Secondary: Story = {
  args: {
    buttonText: 'Click Me',
    variant: 'secondary',
    size: 'md'
  }
};