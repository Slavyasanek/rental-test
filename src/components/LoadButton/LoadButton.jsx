import { Button } from "./LoadButton.styled";
import PropTypes from "prop-types";

export const LoadButton = ({onClick, children}) => {
    return (<>
    <Button onClick={onClick}>{children}</Button>
    </>)
};

LoadButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any
}
