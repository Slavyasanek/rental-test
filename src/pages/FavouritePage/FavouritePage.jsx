import { useEffect, useState } from "react";
import { getCars } from "../../api/cars";
import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourite/selectors";
import { SkeletonList } from "../../components/SkeletonList/SkeletonList";
import { CardList } from "../../components/CardList/CardList";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../../components/Modal/Modal";
import { EmptyNotification, Icon, Title, TitleWrapper } from "./FavouritePage.styled";
import { ListWrapper } from "../CatalogPage/CatalogPage.styled";
import { LoadButton } from "../../components/LoadButton/LoadButton";
import { Error } from "../../components/Error/Error";

const FavouritePage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [favouriteCars, setFavouriteCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const favourites = useSelector(selectFavourites);
    const [currentCar, setCurrentCar] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const res = await getCars();
                const favouritesArr = res.filter(car => favourites.includes(car.id));
                setFavouriteCars(favouritesArr)
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [favourites])

    const openModal = (e) => {
        if (e.target.nodeName !== 'BUTTON') return;
        const id = e.target.closest('li').id;
        try {
            const res = favouriteCars.find(c => Number(c.id) === Number(id))
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

    const loadMore = () => {
        if (favouriteCars.length > page * 8) {
            setPage(prevState => prevState + 1)
        } else {
            setPage(1);
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    };

    return (
        <>
            <TitleWrapper><Title>Car Favourites</Title><Icon /></TitleWrapper>
            {isLoading ? <SkeletonList count={favourites.length} /> :
                isError ? <Error/> :
                (favouriteCars.length > 0 ?
                    <ListWrapper>
                        <CardList cars={favouriteCars.slice(0, 8 * page)}
                            onClick={openModal} />
                        {favouriteCars.length > 8 &&
                            <LoadButton
                                onClick={loadMore}>
                                    {favouriteCars.length > page * 8 ? 'Load more' : 'Hide'}</LoadButton>}
                    </ListWrapper>
                    : <EmptyNotification>Your favourites list is currently empty.</EmptyNotification>)}
            <AnimatePresence>
                {isOpenModal &&
                    <Modal
                        closeMethod={closeModal}
                        car={currentCar} />}
            </AnimatePresence>
        </>
    )
}

export default FavouritePage;