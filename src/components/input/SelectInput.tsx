import * as React from 'react';
import "./SelectInput.css"
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className: string ;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange , className }) => {
  return (
    <select
      className={`
     selectinput
      ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;