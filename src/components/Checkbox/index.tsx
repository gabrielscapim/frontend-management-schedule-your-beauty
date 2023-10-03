import React from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox({ id, label, handleChange, ...props }: CheckboxProps) {
  return (
    <div className={ styles['input-container'] }>
      <input
        type="checkbox"
        onChange={ (event) => handleChange(event) }
        { ...props }
      />
      <label htmlFor={ id }>
        { label }
      </label>
    </div>
  );
}

export default Checkbox;
