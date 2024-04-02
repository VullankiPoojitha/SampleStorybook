import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import { LeftNavBar,LeftNavBarProps } from './LeftNavBar';



const meta: Meta<LeftNavBarProps>={
    component: LeftNavBar,
    tags: ['autodocs'],
    argTypes:{
    color:{control:'color'},
    fontSize:{control:'number'},
    padding:{control:'number'},
    borderBottom:{control:'text'}
    },
    // args:{
    //     onClick:()=>{}
    // }
}


export default meta;

type Story = StoryObj<LeftNavBarProps>;

export const LeftSideNav: Story = {
    args: {
        // onClick:()=>{}
        onClick:fn(),

    }

    
}

// export const LeftNavWithOutContent: Story = {
//     args: {
//         // text:'none'

//     }

// }