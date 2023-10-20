import { useEffect } from "react";
import { useState } from "react";
import { getCars } from "../../api/cars";
import { CardList } from "../../components/CardList/CardList";
const CatalogPage = () => {
    const [cars, setCars] = useState([]);

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
    return (
        <>
        {cars && <CardList cars={cars}/>}
        </>
    )
}

export default CatalogPage;