import { store } from "../store/store";

function eventListener(element, event) {
    return new Promise(resolve => {
        element?.addEventListener(event, resolve);
    });
}

// Define an async function to handle the event listener logic
async function handleCounterAction(type) {
    const element = document.querySelector(`#${type.toLowerCase()}`);
    await eventListener(element, 'click');
    store.dispatch({ type: `${type.toUpperCase()}` });
}

// Use the async function to handle both increment and decrement actions
async function init() {
    await handleCounterAction('INCREMENT');
    await handleCounterAction('DECREMENT');
}

init();
