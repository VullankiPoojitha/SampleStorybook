import type {Meta, StoryObj} from '@storybook/react';
import { HeadingProps, Heading } from './Heading';


const meta:Meta<HeadingProps>={
    component:Heading,
    tags:['autodocs'],
argTypes:{
    },
}satisfies Meta<typeof Heading>

export default meta;

type Story = StoryObj<HeadingProps>;


export const SpinnerComponent: Story={
    args:{

    }
}