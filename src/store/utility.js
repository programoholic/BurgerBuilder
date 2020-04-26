export const updateObject = (originalObject , modifiedVaules) => {
    return {
        ...originalObject,
        ...modifiedVaules
    }
}