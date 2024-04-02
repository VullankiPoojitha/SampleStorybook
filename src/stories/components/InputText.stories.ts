import type { Meta, StoryObj } from '@storybook/react';
import {InputText, InputProps} from './InputText';
import {fn} from '@storybook/test';


const meta: Meta<InputProps> = {
  component:InputText ,
  tags: ['autodocs'],
  argTypes: {
    placeholderText: { control: 'text' },
    fontSize:{control:'number'},
    border:{control:'text'},
    borderRadius: {control :'number'},
    value:{control:'text'}
  },
  args: { onChange: fn() },

};

export default meta;
type Story = StoryObj<InputProps>;

export const SmallInputText: Story = {
    args: {
       
        // children: 'Enter any Text',
        size:'small'
      }
};

export const MediumInputText: Story = {
    args: {
       
        // children: 'Enter any Text',
        size:'medium'
      }
};

export const LargeInputText: Story = {
    args: {
       
        // children: 'Enter any Text',
        size:'large'
      }
};













// import type { Meta, StoryObj } from '@storybook/react';
// import {InputText, InputProps} from './InputText';
// import {fn} from '@storybook/test';


// const meta: Meta<InputProps> = {
//   component:InputText ,
//   tags: ['autodocs'],
//   argTypes: {
//     placeholderText: { control: 'text' },
//     fontSize:{control:'number'},
//     border:{control:'text'},
//     borderRadius: {control :'number'}


    

//   },
// //   args: { onChange: fn() },

// };

// export default meta;
// type Story = StoryObj<InputProps>;

// export const SmallInputText: Story = {
//     args: {
       
//         // children: 'Enter any Text',
//         size:'small'
//       }
// };

// export const MediumInputText: Story = {
//     args: {
       
//         // children: 'Enter any Text',
//         size:'medium'
//       }
// };

// export const LargeInputText: Story = {
//     args: {
       
//         // children: 'Enter any Text',
//         size:'large'
//       }
// };





// import type { Meta, StoryObj } from '@storybook/react';

// import {InputText, InputProps} from './InputText';
// const meta: Meta<InputProps> = {
//   component:InputText ,
//   tags: ['autodocs'],
//   argTypes: {
//     placeholderText: { control: 'text' },
    

//   },
// //   args: { onChange: fn() },

// };

// export default meta;
// // export default {
// //   title: "Text Field",
// //   component: InputText,
// // } as Meta<any>;
// type Story = StoryObj<InputProps> 
// // const Template: Story<InputProps> = (args:any) => <InputText {...args} />;
// export const SmallInputText: Story = {
//     args: {
       
//         // children: 'Enter any Text',
//         size:'small'
//       }
// };

// export const Basic = Template.bind({});
// Basic.args = { label: "Name", placeholder: "Enter name" };