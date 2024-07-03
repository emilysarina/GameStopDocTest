import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './TestPage';

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};