import { Card } from "../Card/Card";
import PropTypes from "prop-types";
import { List } from "./CardList.styled";
import { nanoid } from "nanoid";
import {selectFavourites} from "../../redux/favourite/selectors";
import { useSelector } from "react-redux";

export const CardList = ({ cars, onClick }) => {
    const favourites = useSelector(selectFavourites)
    return (
        <List onClick={onClick}>
            {cars.map(({ id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address}) =>
                <Card
                    key={nanoid()}
                    id={id}
                    address={address} 
                    year={year}
                    make={make}
                    model={model}
                    type={type}
                    img={img}
                    rentalPrice={rentalPrice}
                    rentalCompany={rentalCompany}
                    functionalities={functionalities}
                    isLiked={favourites.includes(id)}/>)}
        </List>
    )
};

CardList.propTypes = {
    cars: PropTypes.array,
    onClick: PropTypes.func
}