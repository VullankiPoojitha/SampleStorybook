// import {Meta, StoryObj} from '@storybook/react';
// import {fn} from '@storybook/test';
// import {Accordion,AccordionProps} from './Accordion';


// const meta: Meta<AccordionProps>={
//     component: Accordion,
//     argTypes: {
//     title:{control:'text'},
       
//       },

// //   args: { onChange: fn() },
// args: {
//     onChange: () => {} // Dummy onChange function
//   }
    
// }

// export default meta;

// type Story = StoryObj<AccordionProps>;

// export const AccordionField: Story ={
//  args: {
//     // size:'small'
//     title: 'Accordion Title',
//   children: 'Accordion Content'

//  }
// }










// import {Meta, StoryObj} from '@storybook/react';
// import {fn} from '@storybook/test';
// import {Accordion,AccordionProps} from './Accordion';


// const meta: Meta<AccordionProps>={
//     component: Accordion,
//     argTypes: {
//     title:{control:'text'},
       
//       },

// //   args: { onChange: fn() },
// args: {
//     onChange: () => {} // Dummy onChange function
//   }
    
// }

// export default meta;

// type Story = StoryObj<AccordionProps>;

// export const AccordionField: Story ={
//  args: {
//     // size:'small'
//     title: 'Accordion Title',
//   children: 'Accordion Content'

//  }
// }

















import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Accordion,AccordionProps} from './Accordion';


const meta: Meta<AccordionProps>={
    component: Accordion,
    tags: ['autodocs'],

//   args: { onChange: fn() },
args: {
    onChange: () => {} // Dummy onChange function
  }
    
}

export default meta;

type Story = StoryObj<AccordionProps>;

export const AccordionField: Story ={
 args: {
    // size:'small'
    // value:"default"

 }
}