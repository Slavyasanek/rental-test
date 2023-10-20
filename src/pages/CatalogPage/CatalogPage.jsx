import { useEffect } from "react";
import { useState } from "react";
import { getCars } from "../../api/cars";
import { CardList } from "../../components/CardList/CardList";
import { Modal } from "../../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";

const CatalogPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getCars();
                setCars(res)
            } catch (error) {
                return;
            }
        }
        fetchData();
    }, [])

    const openModal = (e) => {
        console.log(e.target);
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
            {cars && <CardList cars={cars} onClick={openModal} />}
            <AnimatePresence>
                {isOpenModal && <Modal
                    closeMethod={closeModal}
                    car={currentCar} />}
            </AnimatePresence>
        </>
    )
}

export default CatalogPage;