import React from 'react';
import styles from './Input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
};

function Input({ id, label, className, ...props }: InputProps) {
  return (
    <div className={ styles['input-container'] }>
      { label.length !== 0 && (
        <label htmlFor={ id }>
          { label }
        </label>
      )}
      <input
        { ...props }
      />
    </div>
  );
}

export default Input;
