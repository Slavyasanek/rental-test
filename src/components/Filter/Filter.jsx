import { Dropdown } from "../Dropdown/Dropdown";
import { FilterBox, FilterButton, InputWrapper, Label, SelectWrapper } from "./Filter.styled";
import makes from '../../assets/makes.json';
import { useState } from "react";
import { nanoid } from "nanoid";
import { generatePrice } from "../../utils/generatePrice";
import { Input } from "../Input/Input";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import {BiSearchAlt} from 'react-icons/bi';

export const Filter = ({ setFilteredCars, cars, isLoading, setPage }) => {
    const makesArr = makes.map(i => ({ value: i, label: i }))
    const priceArr = generatePrice();
    const [make, setMake] = useState('');
    const [price, setPrice] = useState('');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('')

    const handleChange = e => {
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


    const filterCars = () => {
        const filterCriteria = {
            make: make ? make.value.toLowerCase() : '',
            rentalPrice: price ? price.value : '',
            mileage: {
                from: Number(from),
                to: Number(to)
            }
        }
        const res = cars.filter(car => {
            for (const key in filterCriteria) {
                if (key === 'mileage' && filterCriteria[key]) {
                    const { to, from } = filterCriteria.mileage;
                    if (from !== 0 && from > car[key]) {
                        return false;
                    }
                    if (to !== 0 && to < car[key]) {
                        return false;
                    }
                    if ((from > car[key] && to < car[key])) {
                        return false;
                    }
                } else if (key === 'rentalPrice' && filterCriteria[key]) {
                    if (filterCriteria.rentalPrice <= Number.parseInt(car[key].replace("$", ""))) {
                        return false;
                    }
                } else if (filterCriteria[key] && car[key].toLowerCase() !== filterCriteria[key].toLowerCase()) {
                    return false;
                }
            }
            return car;
        })
        if (res.length === 0) {
            toast('Nothing was found for your request', {
                style: {
                    borderRadius: '14px',
                    backgroundColor: '#0B44CD',
                    color: '#ffffff'
                },
                icon: <BiSearchAlt color="#ffffff" size={18}/>
            })
            return;
        } else {
            setPage(1);
            setFilteredCars(res);
        }
    }


    const makeSelectId = nanoid();
    const priceSelectId = nanoid();
    const diapazoneId = nanoid();
    return (
        <FilterBox>
            <SelectWrapper>
                <div>
                    <Label htmlFor={makeSelectId}>Car brand</Label>
                    <Dropdown
                        options={makesArr}
                        placeholder={'Enter the text'}
                        isSearchable={true}
                        value={make}
                        onChange={setMake}
                        id={makeSelectId}
                        isClearable={true}
                        name="make" />
                </div>
                <div>
                    <Label htmlFor={priceSelectId}>Price&#47;1 hour</Label>
                    <Dropdown
                        value={price}
                        onChange={setPrice}
                        options={priceArr}
                        id={priceSelectId}
                        placeholder={`To $`}
                        isSearchable={true}
                        isClearable={true}
                        name="price" />
                </div>
            </SelectWrapper>
            <div>
                <Label htmlFor={diapazoneId}>Сar mileage &#47; km</Label>
                <InputWrapper>
                    <Input
                        value={from}
                        onChange={handleChange}
                        id={diapazoneId}
                        name={'from'}
                    />
                    <Input
                        value={to}
                        onChange={handleChange}
                        name={'to'} />
                </InputWrapper>
            </div>
            <FilterButton type="button" id="search by categories" onClick={filterCars} disabled={isLoading && true}>Search</FilterButton>
        </FilterBox>)
};

Filter.propTypes = {
    setFilteredCars: PropTypes.func.isRequired,
    cars: PropTypes.arrayOf(PropTypes.shape),
    isLoading: PropTypes.bool,
    setPage: PropTypes.func
}