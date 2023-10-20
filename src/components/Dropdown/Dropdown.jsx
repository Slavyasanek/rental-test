import Select from 'react-select'
import PropTypes from "prop-types";

export const Dropdown = ({ placeholder, options, isSearchable, value, onChange, id, isClearable }) => {
    return (
        <Select
            options={options}
            placeholder={placeholder}
            isSearchable={isSearchable}
            onChange={onChange}
            value={value}
            id={id}
            isClearable={isClearable}
            styles={{
                control: (styles) => ({
                    ...styles,
                    backgroundColor: '#F7F7FB',
                    height: '48px',
                    border: 'none',
                    borderRadius: '14px',
                    minWidth: 'max-content'
                }),
                input: (styles) => ({
                    ...styles,
                    color: '#121417',
                    fontWeight: 500,
                    lineHeight: 1.11,
                }),
                placeholder: (styles) => ({
                    ...styles,
                    color: '#121417',
                    fontWeight: 500,
                    lineHeight: 1.11,
                }),
                singleValue: (styles) => ({
                    ...styles,
                    color: '#121417',
                    fontWeight: 500,
                    lineHeight: 1.11,
                }),
                menu: (styles) => ({
                    ...styles,
                    borderRadius: '14px',
                    overflow: 'hidden',
                    padding: '14px 8px'
                }),
                menuList: (styles) => ({
                    ...styles,
                    color: 'rgba(18, 20, 23, 0.20)',
                    fontSize: '16px',
                    gap: '8px',
                    '::-webkit-scrollbar': {
                        borderRadius: '12px',
                        width: '6px',
                        backgroundColor: 'transparent',
                    },
                    '::-webkit-scrollbar-thumb': {
                        borderRadius: '10px',
                        backgroundColor: 'rgba(18, 20, 23, 0.05)',
                        width: '6px'
                    }
                }),
                option: (styles) => ({
                    ...styles,
                    padding: 0,
                    cursor: 'pointer',
                    ':hover': {
                        backgroundColor: '#F7F7FB'
                    }
                }),
                indicatorSeparator: () => ({
                    display: 'none'
                }),
                dropdownIndicator: (styles) => ({
                    ...styles,
                    cursor: 'pointer',
                    '> svg': {
                        fill: 'black'
                    }
                })
            }}
        />
    )
};

Dropdown.propTypes = {
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape),
    isSearchable: PropTypes.bool.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isClearable: PropTypes.bool.isRequired
}