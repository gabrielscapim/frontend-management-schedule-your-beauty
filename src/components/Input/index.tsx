import React from 'react';
import styles from './Input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

function Input({ id, label, className, handleChange, ...props }: InputProps) {
  return (
    <div className={ styles['input-container'] }>
      { label.length !== 0 && (
        <label htmlFor={ id }>
          { label }
        </label>
      )}
      <input
        id={ id }
        onChange={ (event) => handleChange(event) }
        { ...props }
      />
    </div>
  );
}

export default Input;
