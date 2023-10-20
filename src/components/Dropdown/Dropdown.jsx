import Select from 'react-select'

export const Dropdown = ({placeholder, options, isSearchable, value, onChange, id}) => {
    return (
        <Select
        options={options}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onChange={onChange}
        value={value}
        id={id}
        />
    )
};
