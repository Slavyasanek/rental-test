import { Backdrop, CloseButton, CloseIcon, ConditionItem, ConditionText, Conditions, Description, Image, ImageWrapper, ModalBox, Subtitle, Title } from "./Modal.styled";
import sample from '../../assets/car-sample.jpg'
import PropTypes from "prop-types";
import { Characteristic } from "../Characteristic/Characteristic";
import { nanoid } from "nanoid";

export const Modal = ({car, closeMethod}) => {
    const { id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, address, rentalConditions, mileage} = car;
    const place = address.split(", ");
    const conditionsArr = rentalConditions.split('\n')
    return (
        <Backdrop>
            <ModalBox>
                <CloseButton onClick={closeMethod}><CloseIcon/></CloseButton>
                <ImageWrapper>
                    <Image src={img ? img : sample}/>
                </ImageWrapper>
                <Title>{make} <span>{model}</span>, {year}</Title>
                <Characteristic key={nanoid()} items={[place[1], place[2], `Id: ${id}`, `Year: ${year}`, `Type: ${type}`]}/>
                <Characteristic key={nanoid()} items={[`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`]}/>
                <Description>{description}</Description>
                {accessories && functionalities && <Subtitle>Accessories and functionalities:</Subtitle>}
                {functionalities && <Characteristic key={nanoid()} items={functionalities}/>}
                {accessories && <Characteristic key={nanoid()} items={accessories}/>}
                <Subtitle>Rental Conditions:</Subtitle>
                <Conditions>
                    {conditionsArr.map(item => (<ConditionItem key={nanoid()}><ConditionText>{item}</ConditionText></ConditionItem>))}
                 {mileage && <ConditionItem><ConditionText>Mileage: <span>{mileage}</span></ConditionText></ConditionItem>}
                    {rentalPrice && <ConditionItem><ConditionText>Price: <span>{rentalPrice}</span></ConditionText></ConditionItem>}
                </Conditions>
            </ModalBox>
        </Backdrop>
    )
};

Modal.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number,
        year: PropTypes.number.isRequired,
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        type: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        fuelConsumption: PropTypes.string,
        engineSize: PropTypes.string,
        accessories: PropTypes.arrayOf(PropTypes.string),
        functionalities: PropTypes.arrayOf(PropTypes.string),
        rentalPrice: PropTypes.string,
        address: PropTypes.string,
        rentalConditions: PropTypes.string,
        mileage: PropTypes.number
    }),
    closeMethod: PropTypes.func.isRequired
}