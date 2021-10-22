const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello Wold From node with nodemon')
});

const users = [
    { id: 0, name: 'jolol', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 1, name: 'kolil', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 2, name: 'jomir', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 3, name: 'josim', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 4, name: 'jolaka', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 5, name: 'jahad', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 6, name: 'kober', email: 'jolol@gmail.com', phone: '019999999999999' },
    { id: 7, name: 'abul', email: 'jolol@gmail.com', phone: '019999999999999' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})