import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ComponentProps<'button'> & {
  label: string;
  handleClick: () => void;
};

function Button({ handleClick, label, ...props }: ButtonProps) {
  return (
    <button
      className={ styles.button }
      onClick={ handleClick }
      { ...props }
    >
      { label }
    </button>
  );
}

export default Button;
