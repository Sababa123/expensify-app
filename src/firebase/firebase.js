import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/*database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
    description: 'Gum',
    note: 'This is me',
    amount: 195,
    createdAt: 0
});

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

database.ref('expenses')
.once('value')
.then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
});

/*database.ref('notes/-LaPynJNBO_Oi9Umr9le').remove();

database.ref('notes').push({
    title: 'Course Topics',
    body: 'React Native, Python'
});

const notes = [{
    id: '2',
    title: 'First note',
    body: 'This is my note'
}, {
    id: '761ase',
    title: 'Second note',
    body: 'This is my note'
}];

database.ref('notes').set(notes);

database.ref().set({
    name: 'Sababa Saad',
    age: 23,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Karachi',
        country: 'Pakistan'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed ',e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

setTimeout(() => {
    database.ref().update({
        name: 'Mike',
        'job/company': 'Facebook'
    });
}, 3500);

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

database.ref('location/city')
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
.catch((e) => {
    console.log('Error', e);
});

database.ref('isSingle').set(null);

database.ref()
.remove()
.then(() => {
    console.log('Data removed');
})
.catch(() => {
    console.log('Data not removed',e);
});*/
