import type { Meta, StoryObj } from '@storybook/react';
import { TabsProps, Tabs } from "./Tabs";
import { fn } from '@storybook/test';



const meta: Meta<TabsProps>={
    component: Tabs,
    tags: ['autodocs'],
    argTypes:{
    padding: {control:'number'},
    background:{control:'color'},
    fontSize:{control:'number'},
    borderRadius:{control:'number'},
    border:{control:'text'},
    // height:{control:'number'},
    // width:{control:'number'},
    color:{control:'color'}
    // title:{control:'text'},
    // content:{control:'text'}
    },
    // args: { onClick: fn() },

};

export default meta;


type Story = StoryObj<TabsProps>;

export const TabsComponent: Story ={

}

