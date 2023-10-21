import PropTypes from "prop-types";
import { Box, InputWrapper } from "./Input.styled";

export const Input = ({ value, onChange, id, name }) => {
    return (
        <InputWrapper name={name}>
            <Box type="number"
            value={value}
            onChange={onChange}
            id={id}
            name={name}/>
        </InputWrapper>
    )
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    side: PropTypes.string,
    name: PropTypes.string
}