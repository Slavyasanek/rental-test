import { useEffect } from "react";
import { useState } from "react";
import { getCars } from "../../api/cars";
import { CardList } from "../../components/CardList/CardList";
import { Modal } from "../../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { SkeletonList } from "../../components/SkeletonList/SkeletonList";
import { Filter } from "../../components/Filter/Filter";
import { LoadButton } from "../../components/LoadButton/LoadButton";
import { ListWrapper } from "./CatalogPage.styled";
import { Error } from "../../components/Error/Error";

const CatalogPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [currentCar, setCurrentCar] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const res = await getCars();
                setCars(res);
                setFilteredCars(res);
                setIsError(false);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    const loadMore = () => {
        if (filteredCars.length > page * 8) {
            setPage(prevState => prevState + 1)
        } else {
            setPage(1);
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    };

    const openModal = (e) => {
        if (e.target.nodeName !== 'BUTTON') return;
        const id = e.target.closest('li').id;
        try {
            const res = cars.find(c => Number(c.id) === Number(id))
            setCurrentCar(res);
            setIsOpenModal(true);
        } catch (error) {
            return;
        }
    }

    const closeModal = () => {
        setIsOpenModal(false);
        setCurrentCar(null)
    }
    return (
        <>
            <h1 className="hidden">Catalog of cars</h1>
            <Filter
                setFilteredCars={setFilteredCars}
                cars={cars}
                isLoading={isLoading}
                isError={isError}
                setPage={setPage} />
            {isLoading ? <SkeletonList count={8} />
                : (isError ? <Error/> : 
                (filteredCars.length > 0 &&
                    <ListWrapper>
                        <CardList
                            cars={filteredCars.slice(0, 8 * page)}
                            onClick={openModal} />
                        {filteredCars.length > 8 &&
                            <LoadButton
                                onClick={loadMore}>{filteredCars.length > page * 8 ? 'Load more' : 'Hide'}</LoadButton>}
                    </ListWrapper>))}
            <AnimatePresence>
                {isOpenModal && <Modal
                    closeMethod={closeModal}
                    car={currentCar} />}
            </AnimatePresence>
        </>
    )
}

export default CatalogPage;