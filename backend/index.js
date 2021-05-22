const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
var cors = require('cors')

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const PORT = 9000;

//Route
    const dataPath = './cities.json'
    app.get('/api/route', (req,res) => {
        // function call to read method, takes json file parameter
        fs.readFile(dataPath, 'utf8',(err, data) =>{
            if(err)
            {
                console.log(err)
            }
            //Sends data if no error
            res.json(JSON.parse(data))
        })
    })


app.listen(PORT,() => {
    console.log(`Listening on port,${PORT}`)
})