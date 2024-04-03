import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {CommonField, CommonFieldProps} from '../CommonFields/CommonField';


const meta = {
    // title:''
    component: CommonField,
    parameters:{
        layout:'centered',
    },
    argTypes:{
    type:{control:'text'}
    },
    tags:['autodocs'],

} satisfies Meta<typeof CommonField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonComponentBasic: Story={
    args:{

    }
}