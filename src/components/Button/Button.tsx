import React, { FC } from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { ButtonType as AntButtonType } from 'antd/lib/button';
import './style.less';

const extraButtonTypes = ['warning'] as const;

type ExtraButtonType = typeof extraButtonTypes[number];

type ButtonType = AntButtonType | ExtraButtonType;

export interface ButtonProps extends Omit<AntButtonProps, 'type'> {
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({ type = 'primary', ...props }) => {
  if (extraButtonTypes.includes(type as ExtraButtonType)) {
    return <AntButton className={`ant-btn-${type}`} {...props} />;
  }

  return <AntButton type={type as AntButtonType} {...props} />;
};

export default Button;
