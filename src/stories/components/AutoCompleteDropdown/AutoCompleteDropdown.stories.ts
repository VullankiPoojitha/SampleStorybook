import { AutoComplete, AutoCompleteProps } from "./AutoComplete";
import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import { DropdownProps } from "../dropdown/DropdownField";

const meta: Meta<AutoCompleteProps>={
    component:AutoComplete,
    tags:['autodocs'],
    argTypes:{

    }
}

export default meta;

type Story = StoryObj<DropdownProps>;

export const AutoCompleteDropdown: Story ={
    
}