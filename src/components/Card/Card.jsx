import PropTypes from "prop-types";
import { CardBox, CardTitle, CardTitleOutline, CharacteristicBox, Image, ImageWrapper, Key, Keywords, LearnButton, LikeButton, LikeIconOutline, TitleWrapper } from "./Card.styled";
import { nanoid } from "nanoid";

export const Card = ({ id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address }) => {
    const place = address.split(", ");
    return (
        <CardBox>
            <div>
            <ImageWrapper>
                <Image src={img} />
                <LikeButton><LikeIconOutline /></LikeButton>
            </ImageWrapper>
            <CharacteristicBox>
                <TitleWrapper>
                    <CardTitle>{make} <CardTitleOutline>{model}</CardTitleOutline>, {year}</CardTitle>
                    <CardTitle>{rentalPrice}</CardTitle>
                </TitleWrapper>
                <Keywords key={nanoid()}>
                    <Key key={nanoid()}>{place[1]}</Key>
                    <Key key={nanoid()}>{place[2]}</Key>
                    <Key key={nanoid()}>{rentalCompany}</Key>
                </Keywords>
                <Keywords key={nanoid()}>
                    <Key key={nanoid()}>{type}</Key>
                    <Key key={nanoid()}>{model}</Key>
                    <Key key={nanoid()}>{id}</Key>
                    <Key key={nanoid()}>{functionalities[0]}</Key>
                </Keywords>
            </CharacteristicBox>
            </div>
            <LearnButton>Learn more</LearnButton>
        </CardBox>
    )
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
}