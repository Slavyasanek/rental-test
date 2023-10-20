import { useEffect, useState } from "react";
import { getCars } from "../../api/cars";
import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourite/selectors";
import { SkeletonList } from "../../components/SkeletonList/SkeletonList";
import { CardList } from "../../components/CardList/CardList";

const FavouritePage = () => {
    const [favouriteCars, setFavouriteCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const favourites = useSelector(selectFavourites);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const res = await getCars();
                const favouritesArr = res.filter(car => favourites.includes(car.id));
                setFavouriteCars(favouritesArr)
            } catch (error) {
                return;
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [favourites])

    return (
        <>
            <h1>favourite</h1>
            {isLoading ? <SkeletonList count={favourites.length}/> :
                (favouriteCars.length > 0 && <CardList cars={favouriteCars} />)}
        </>
    )
}

export default FavouritePage;