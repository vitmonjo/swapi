export function countInstances(string) {
    let counter = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const currentStoredItem = localStorage.key(i);
        if (String(currentStoredItem).includes(string)) counter++;
    }
    return counter;
}

export function checkExistence(string) {
    return localStorage.getItem(`${string}-0`);
}

export function getInstances(string) {
    const instances = [];
    for (let i = 0; i < countInstances(string); i++) {
        instances.push(localStorage.getItem(`${string}-${i}`));
    }
    return instances;
}