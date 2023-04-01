function useLocalStorage() {
    const setItem = (itemName, item) => {
        localStorage.setItem(itemName, item);
    }

    const removeItem = (itemName) => {
        localStorage.removeItem(itemName);
    }

    const getItem = (itemName) => {
        return localStorage.getItem(itemName) || ''
    }

    return {
        setItem,
        removeItem,
        getItem
    }
}

export { useLocalStorage };