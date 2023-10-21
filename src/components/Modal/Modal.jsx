import { Backdrop, CharacteristicWrapper, CloseButton, CloseIcon, ConditionItem, ConditionText, Conditions, ContactLnk, Description, Image, ImageWrapper, InfoBlock, ModalBox, Subtitle, Title } from "./Modal.styled";
import sample from '../../assets/car-sample.jpg'
import PropTypes from "prop-types";
import { Characteristic } from "../Characteristic/Characteristic";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { findAge } from "../../utils/findAge";

const backdropVars = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring", stiffness: 100, damping: 18 } },
    exit: { opacity: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
}

export const Modal = ({ car, closeMethod }) => {
    const { id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, address, rentalConditions, mileage } = car;
    const place = address.split(", ");
    const {array, age} = findAge(rentalConditions);
    
    const closeBackdrop = e => {
        if (e.target === e.currentTarget) {
            closeMethod();
        }
    }

    useEffect(() => {
        document.body.classList.add('close');
        const closeEsc = (e) => {
            if (e.code === 'Escape') closeMethod();
        }
        window.addEventListener('keydown', closeEsc)
        return () => {
            document.body.classList.remove('close')
        }
    }, [closeMethod])

    const handleError = ({ currentTarget }) => {
        currentTarget.src = sample;
    }

    return (
        <Backdrop
            onClick={closeBackdrop}
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={backdropVars}>
            <ModalBox>
                <CloseButton onClick={closeMethod}><CloseIcon /></CloseButton>
                <ImageWrapper>
                    <Image src={img ? img : sample} onError={handleError} />
                </ImageWrapper>
                <Title>{make} <span>{model}</span>, {year}</Title>
                <CharacteristicWrapper>
                    <Characteristic key={nanoid()} items={[place[1], place[2], `Id: ${id}`, `Year: ${year}`, `Type: ${type}`]} />
                    <Characteristic key={nanoid()} items={[`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`]} />
                </CharacteristicWrapper>
                {description &&
                    <InfoBlock>
                        <Description>{description}</Description>
                    </InfoBlock>}
                {(accessories || functionalities) &&
                    <InfoBlock>
                        <Subtitle>Accessories and functionalities:</Subtitle>
                        {functionalities && <Characteristic key={nanoid()} items={functionalities} />}
                        {accessories && <Characteristic key={nanoid()} items={accessories} />}
                    </InfoBlock>}
                <Subtitle>Rental Conditions:</Subtitle>
                {(array.length > 0 || age || mileage || rentalPrice) && (
                    <InfoBlock>
                        <Conditions>
                            {age && <ConditionItem><ConditionText>Minimum age: <span>{age}</span></ConditionText></ConditionItem>}
                            {array.map(item => (<ConditionItem key={nanoid()}><ConditionText>{item}</ConditionText></ConditionItem>))}
                            {mileage && <ConditionItem><ConditionText>Mileage: <span>{mileage.toLocaleString('en-US')}</span></ConditionText></ConditionItem>}
                            {rentalPrice && <ConditionItem><ConditionText>Price: <span>{rentalPrice}</span></ConditionText></ConditionItem>}
                        </Conditions>
                    </InfoBlock>
                )}
                <ContactLnk href="tel:+380730000000">Rental car</ContactLnk>
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