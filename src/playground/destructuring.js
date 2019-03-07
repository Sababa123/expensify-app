/*const person = {
    name: 'Sababa',
    age: 23,
    location: {
        city: 'Karachi',
        temp: 15
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

const address = [ 'C-81, Block I', 'North Nazimabad', 'Karachi', '74700' ];

const [ , , city = 'New York' ] = address;

console.log(`You are in ${city}.`);*/

const item = [ 'Coffee (iced)', '$2.00', '$3.50', '$2.75' ];

const [ product, , mcost ] = item;

console.log(`A medium ${product} costs ${mcost}.`);
