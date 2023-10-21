import PropTypes from "prop-types";
import { CardBox, CardTitle, CardTitleOutline, CharacteristicBox, Image, ImageWrapper, LearnButton, LikeButton, LikeIconFilled, LikeIconOutline, TitleWrapper } from "./Card.styled";
import sample from '../../assets/car-sample.jpg'
import { Characteristic } from "../Characteristic/Characteristic";
import { useDispatch } from "react-redux";
import { addToLike, removeFromLike } from "../../redux/favourite/favouriteSlice";

export const Card = ({ isLiked, id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address }) => {
    const place = address.split(", ");
    const dispatch = useDispatch();

    const like = () => {
        dispatch(addToLike(id));
    }

    const dislike = () => {
        dispatch(removeFromLike(id));
    }

    const handleError = ({currentTarget}) => {
        currentTarget.src = sample;
    }

    return (
        <CardBox id={id}>
            <div>
            <ImageWrapper>
                <Image src={img ? img : sample} onError={handleError}/>
                {isLiked ? 
                    <LikeButton onClick={dislike}><LikeIconFilled/></LikeButton>
                    : <LikeButton onClick={like}><LikeIconOutline /></LikeButton>}
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
            <LearnButton type="button" id="learn more baout car">Learn more</LearnButton>
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
    isLiked: PropTypes.bool
}