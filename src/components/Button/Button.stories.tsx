import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Warning = Template.bind({});

Warning.args = {
  type: 'warning',
  children: 'Button',
};
