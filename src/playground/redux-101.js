import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
    return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));




// Object Destructuring
/*const person = {
    name: 'Sababa',
    age: 23,
    location: {
        city: 'Karachi',
        temp: 22
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`My name is ${firstName} and I am ${age} years old!`);

const { city, temp: temperature } = person.location;
if ( city && temperature ) {
    console.log(`I live in ${city} and the temperature here is ${temperature}`); 
}

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        //name: "Penguin"
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);*/

// Array Destructuring

/*const address = ["C-81 Block I North Nazimabad", "Karachi", "Pakistan", "74700"];

const [ , city, country="UK"] = address;

console.log(`You are in ${city}, ${country}`);*/

const item = ["Coffee (iced)", "$2.00", "$2.50", "$2.50"];
const [ obj, ,medium ] = item;
console.log(`A medium ${obj} costs ${medium}`);