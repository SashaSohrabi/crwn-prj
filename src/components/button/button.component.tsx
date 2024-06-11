import { FC, ReactNode } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
};

type ButtonComponent = typeof BaseButton | typeof GoogleSignInButton | typeof InvertedButton;

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): ButtonComponent =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

  export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    children?: ReactNode;
  }


const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
