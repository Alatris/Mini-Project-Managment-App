import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['auto docs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        onClick: () => console.log('Primary clicked'),
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        onClick: () => console.log('Secondary clicked'),
        className: 'bg-green-500 hover:bg-green-600',
    },
};