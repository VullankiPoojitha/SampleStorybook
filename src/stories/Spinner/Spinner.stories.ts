import type {Meta, StoryObj} from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';


const meta:Meta<SpinnerProps>={
    component:Spinner,
    tags:['autodocs'],
argTypes:{
    },
}satisfies Meta<typeof Spinner>

export default meta;

type Story = StoryObj<SpinnerProps>;


export const SpinnerComponent: Story={
    args:{

    }
}