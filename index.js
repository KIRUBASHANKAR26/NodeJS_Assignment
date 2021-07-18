const express = require('express');
const fs = require('fs');
let app = express();
let bodyParser = require('body-parser')
let port = 3001;
app.use(bodyParser.json());
app.get('/home',(req,res) => {
    return res.json(
        [
            {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
            },
            {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
            },
            {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
            }
        ]
    );
})

app.get('/cricket',(req,res) => {
    return res.json([
        {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        },
        {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
        }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
        }
        }]);
})

app.get('/movie',(req,res) => {
    return res.json(
        [
            {
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
            },
            {
            "userId": 1,
            "id": 2,
            "title": "sunt qui excepturi placeat culpa"
            },
            {
            "userId": 1,
            "id": 3,
            "title": "omnis laborum odio"
            }
        ]
    );
})


app.put('/update',(req,res) => {
    let userData = req.body;
    let data = JSON.stringify(userData)
    fs.writeFile('userData.txt',data,(err)=> {
        if(!err){
            res.send("File is created")
        }
    });
    res.send(userData);
})


app.listen(port, () => {
    console.log("server")
})

app.get('*', function(req, res){
    res.status(404).send('Not found');
});