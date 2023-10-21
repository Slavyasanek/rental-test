import { Button } from "./LoadButton.styled";
import PropTypes from "prop-types";

export const LoadButton = ({onClick}) => {
    return (<>
    <Button onClick={onClick}>Load more</Button>
    </>)
};

LoadButton.propTypes = {
    onClick: PropTypes.func
}
