import { nanoid } from "nanoid";
import { Key, Keywords } from "./Characteristic.styled";
import PropTypes from "prop-types";

export const Characteristic = ({items}) => {
    return (<Keywords>
        {items.map(i => <Key key={nanoid()}>{i}</Key>)}
    </Keywords>)
};

Characteristic.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.any
    )
}