import Select from 'react-select'

export const Dropdown = ({placeholder, options, isSearchable, value, onChange, id, isClearable}) => {
    return (
        <Select
        options={options}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onChange={onChange}
        value={value}
        id={id}
        isClearable={isClearable}
        />
    )
};
