import React from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox(
  { id, label, handleChange, disabled = false, ...props }: CheckboxProps,
) {
  return (
    <div className={ styles['input-container'] }>
      <input
        id={ id }
        type="checkbox"
        onChange={ (event) => handleChange(event) }
        disabled={ disabled }
        { ...props }
      />
      <label
        htmlFor={ id }
        className={ disabled ? styles.disabled : '' }
      >
        { label }
      </label>
    </div>
  );
}

export default Checkbox;
