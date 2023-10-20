export const generatePrice = () => {
    const priceArr = [];
    for (let i = 1; i <= 30; i++) {
        priceArr.push({value: i*10, label: `${i*10}$`})
    }
    return priceArr;
};
