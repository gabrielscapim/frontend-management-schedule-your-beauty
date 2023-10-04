import React from 'react';
import styles from './Select.module.css';

type SelectProps = React.ComponentProps<'select'> & {
  id: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: number[] | string[];
};

function Select({ id, label, handleChange, options, ...props }: SelectProps) {
  return (
    <div className={ styles['select-container'] }>
      <label
        htmlFor={ id }
      >
        { label }
      </label>

      <select
        id={ id }
        onChange={ (event) => handleChange(event) }
        { ...props }
      >
        { options.map((option) => (
          <option
            key={ `select-option-${option}` }
            value={ option }
          >
            { option }
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
