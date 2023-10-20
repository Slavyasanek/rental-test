import { useEffect } from "react";
import { useState } from "react";
import { getCars } from "../../api/cars";
import { CardList } from "../../components/CardList/CardList";
import { Modal } from "../../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { SkeletonList } from "../../components/SkeletonList/SkeletonList";

const CatalogPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCar, setCurrentCar] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const res = await getCars();
                setCars(res)
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
            {isLoading ? <SkeletonList count={8}/> : (cars && <CardList cars={cars} onClick={openModal} />)}
            <AnimatePresence>
                {isOpenModal && <Modal
                    closeMethod={closeModal}
                    car={currentCar} />}
            </AnimatePresence>
        </>
    )
}

export default CatalogPage;