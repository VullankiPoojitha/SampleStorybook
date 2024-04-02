import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import { FooterComponent, FooterProps } from './FooterComponent';


const meta: Meta<FooterProps>={
    component: FooterComponent,
    tags:['autodocs'],
    argTypes:{
        textAlign:{control:'text'}
    }

}

export default meta;

type Story = StoryObj<FooterProps>;

export const Footer: Story={
    args:{

    }
}