import PropTypes from "prop-types";
import { CardBox, CardTitle, CardTitleOutline, CharacteristicBox, Image, ImageWrapper, LearnButton, LikeButton, LikeIconOutline, TitleWrapper } from "./Card.styled";
import sample from '../../assets/car-sample.jpg'
import { Characteristic } from "../Characteristic/Characteristic";

export const Card = ({ id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address }) => {
    const place = address.split(", ");
    return (
        <CardBox id={id}>
            <div>
            <ImageWrapper>
                <Image src={img ? img : sample} />
                <LikeButton><LikeIconOutline /></LikeButton>
            </ImageWrapper>
            <CharacteristicBox>
                <TitleWrapper>
                    <CardTitle>{make} <CardTitleOutline>{model}</CardTitleOutline>, {year}</CardTitle>
                    <CardTitle>{rentalPrice}</CardTitle>
                </TitleWrapper>
                <Characteristic items={[place[1], place[2], rentalCompany]}/>
                <Characteristic items={[type, model, id, functionalities]}/>
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