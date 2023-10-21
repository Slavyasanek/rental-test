export const findAge = (string) => {
    const array = string.split("\n");
    const indexAge = array.findIndex(el => el.includes("Minimum age"));
    if (indexAge === -1) {
        return {array};
    }
    const ageString = array.splice(indexAge, 1);
    const age = ageString[0].replace("Minimum age: ", "");
    return {array, age};
};
