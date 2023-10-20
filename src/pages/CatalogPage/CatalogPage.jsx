import { useEffect } from "react";
import { useState } from "react";
import { getCars } from "../../api/cars";
import { CardList } from "../../components/CardList/CardList";
import { Modal } from "../../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { SkeletonList } from "../../components/SkeletonList/SkeletonList";
import { Filter } from "../../components/Filter/Filter";

const CatalogPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCar, setCurrentCar] = useState(null)

    const filterCars = (filterCriteria) => {
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
                        console.log(from > car[key] && to < car[key]);
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
            return;
        } else {
            setFilteredCars(res);
        }
    }

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const res = await getCars();
                setCars(res);
                setFilteredCars(res);
            } catch (error) {
                return;
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    const openModal = (e) => {
        if (e.target.nodeName !== 'BUTTON') return;
        const id = e.target.closest('li').id;
        try {
            const res = cars.find(c => Number(c.id) === Number(id))
            setCurrentCar(res);
            setIsOpenModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    const closeModal = () => {
        setIsOpenModal(false);
        setCurrentCar(null)
    }
    return (
        <>
            <Filter filterCars={filterCars} />
            {isLoading ? <SkeletonList count={8} /> : (cars && <CardList cars={filteredCars} onClick={openModal} />)}
            <AnimatePresence>
                {isOpenModal && <Modal
                    closeMethod={closeModal}
                    car={currentCar} />}
            </AnimatePresence>
        </>
    )
}

export default CatalogPage;