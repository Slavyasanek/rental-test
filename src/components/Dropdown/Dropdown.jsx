import Select from 'react-select'
import PropTypes from "prop-types";

export const Dropdown = ({ placeholder, options, isSearchable, value, onChange, id, isClearable, name }) => {
    return (
        <Select
            options={options}
            placeholder={placeholder}
            isSearchable={isSearchable}
            onChange={onChange}
            value={value}
            id={id}
            isClearable={isClearable}
            name={name}
            styles={{
                control: (styles) => ({
                    ...styles,
                    backgroundColor: '#F7F7FB',
                    height: '48px',
                    border: 'none',
                    borderRadius: '14px',
                    minWidth: 'max-content',
                    boxShadow: 'none'
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
                    fontSize: '14px',
                    '@media screen and (min-width: 1440px)': {
                        fontSize: '18px',
                    }
                }),
                singleValue: (styles) => ({
                    ...styles,
                    color: '#121417',
                    fontWeight: 500,
                    lineHeight: 1.11,
                    fontSize: '14px',
                    '@media screen and (min-width: 1440px)': {
                        fontSize: '18px',
                    }
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
                    cursor: 'pointer',
                    padding: '4px',
                    ':hover': {
                        backgroundColor: '#F7F7FB'
                    }
                }),
                indicatorSeparator: () => ({
                    display: 'none'
                }),
                dropdownIndicator: (styles, state) => ({
                    ...styles,
                    cursor: 'pointer',
                    '> svg': {
                        fill: 'black'
                    },
                    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
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
    isClearable: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}