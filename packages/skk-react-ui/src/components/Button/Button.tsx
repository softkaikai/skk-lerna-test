import React from 'react';

import style from './Button.module.css';

interface ButtonProps {
    type?: string;
    children: string;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={style.base}>{props.children}</button>
    )
}
