import express, {response} from 'express';

const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({info: 'Hello World'})
})

app.listen(port, () => {
    console.log("App running on port: " + port);
})