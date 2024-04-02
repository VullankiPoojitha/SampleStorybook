import { DropdownProps, Dropdown } from "./DropdownField";
import type { Meta, StoryObj } from '@storybook/react';
import {fn} from '@storybook/test';

const meta: Meta<DropdownProps> = {
    component:Dropdown ,
    tags: ['autodocs'],
    argTypes: {
    //   placeholderText: { control: 'text' },
      fontSize:{control:'number'},
      border:{control:'text'},
      borderRadius: {control :'number'},
    //   value:{control:'text'},
      width:{control:'number'},
      padding:{conartrol:'number'}
    },
    args: { onChange: fn() },
  
  };
  
  export default meta;

  type Story = StoryObj<DropdownProps>;

export const SmallDropdown: Story = {
    args: {
       
        // children: 'Enter any Text',
        size:'small'
      }
};

export const MediumDropdown: Story = {
    args: {
       
        // children: 'Enter any Text',
        size:'medium'
      }
};
export const LargeDropdown: Story = {
    args: {
       
        // children: 'Enter any Text',
        size:'large'
      }
};