import { Button } from "./Button";
export default {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
};

export const redButton = {
    args: {
      text: 'HelloButton',
      primary: true,
      label: 'Button',
      textColor: 'black',
      bgColor: 'red'
    },
  };
  