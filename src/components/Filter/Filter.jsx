import { Dropdown } from "../Dropdown/Dropdown";
import { FilterBox, FilterButton, InputWrapper, Label } from "./Filter.styled";
import makes from '../../assets/makes.json';
import { useState } from "react";
import { nanoid } from "nanoid";
import { generatePrice } from "../../utils/generatePrice";
import { Input } from "../Input/Input";

export const Filter = () => {
    const makesArr = makes.map(i => ({ value: i, label: i }))
    const priceArr = generatePrice();
    const [make, setMake] = useState('');
    const [price, setPrice] = useState('');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('')

    const handleChange = e =>{
        switch (e.target.name) {
            case 'to':
                setTo(e.target.value);
                break;
            case 'from':
                setFrom(e.target.value);
                break;
            default:
                return;
        }
    }
    
    const makeSelectId = nanoid();
    const priceSelectId = nanoid();
    const diapazoneId = nanoid();
    return (
        <FilterBox>
            <div>
                <Label htmlFor={makeSelectId}>Car brand</Label>
                <Dropdown
                    options={makesArr}
                    placeholder={'Enter the text'}
                    isSearchable={true}
                    value={make}
                    onChange={setMake}
                    id={makeSelectId} />
            </div>
            <div>
                <Label htmlFor={priceSelectId}>Price/1 hour</Label>
                <Dropdown
                value={price}
                onChange={setPrice}
                options={priceArr}
                id={priceSelectId}
                placeholder={`To $`}/>
            </div>
            <div>
                <Label htmlFor={diapazoneId}>Сar mileage / km</Label>
                <InputWrapper>
                <Input
                value={from}
                onChange={handleChange}
                id={diapazoneId}
                side={'left'}
                name={'from'}
                />
                <Input
                value={to}
                onChange={handleChange}
                side={'right'}
                name={'to'}/>
                </InputWrapper>
            </div>
            <FilterButton type="button" id="search by categories">Search</FilterButton>
        </FilterBox>)
};
