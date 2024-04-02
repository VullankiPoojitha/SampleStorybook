// // import React from 'react';
// import {Meta, Story }  from '@storybook/react/';
// import { CommonButton,Props } from '../CommonButton';

// const meta:Meta={
//     title:'Button',
//     component:CommonButton,
//     argTypes:{
//         children:{
//             defaultValue:'Default'
//         }
//     }
// }

// export default meta;

// const Template: Story<Props> =(args:any)=><CommonButton {...args}/>

// export const Default = ()=> Template.bind({});


// export const Secondary = ()=> Template.bind({});

// Secondary.args={
//     variant:'secondary',
//     children:'I am Secondary',
// }




// import type { Meta, StoryObj } from '@storybook/react';

// import { CommonButton, Props } from '../CommonButton';

// const meta: Meta<Props> = {
//   component: CommonButton,
// };

// export default meta;
// type Story = StoryObj<Props>;

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/api/csf
//  * to learn how to use render functions.
//  */
// export const Primary: Story = {
//   render: () => <CommonButton variant='primary'>hhhhh</CommonButton>,
// };

// export const Secondary: Story = {
//     render: () => <CommonButton variant='secondary'>hhhhhs</CommonButton>,
//   };
  

import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { CommonButton,Props } from '../CommonButton';
import {fn} from '@storybook/test';

const withBackground: Decorator =(Story)=>{
  
    return <div style={{ background: 'yellow', padding: '20px' }}><Story /></div>;
  
}

const meta: Meta<Props> = {
  component:CommonButton ,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },

  },
  parameters: {
    layout: 'centered',
    backgrounds:{
      values:[
        {name:'black',value:'#000'},
        {name:'dark', value:'#222'},
        {name:'light',value:'#ddd'},
        {name:'white',value:'#fff'}
      ]
    }
  },
  // decorators:[
  //   withBackground
  // ],
  args: { onClick: fn() },

};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        variant:'primary',
        children: 'I am primary',
      },
      decorators:[
        withBackground
      ],
};

export const Secondary: Story = {
  
    // children:'I am Secondary',
    args: {
        variant:'secondary',
        children: 'I am Secondary',
      }
};




// // import React from 'react';
// import {Meta}  from '@storybook/react';
// import { CommonButton,Props } from '../CommonButton';

// const meta:Meta={
//     title:'Button',
//     component:CommonButton
// }

// export default meta;


// export const Default = ()=> <CommonButton variant='primary'>Primary Button</CommonButton>


// export const Secondary = ()=> <CommonButton variant='secondary'>Secondary Button</CommonButton>