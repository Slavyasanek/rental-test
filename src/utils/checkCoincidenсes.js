export const checkCoincidences = (cars, filterCriteria) => {
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
    return res;
};
