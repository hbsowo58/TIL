const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/views"));

app.get('/', async (req, res) =>{
    // console.log(req.query);
    const page = Number(req.query.page)
    await axios.get("https://jsonplaceholder.typicode.com/posts/",{
        params: {
            _start: page ? 9 * (page - 1) : 0,
            _limit: 9,
        }
    })
    .then(response =>{
        res.render("index", { data: response.data, page: page || 1 });
    })
    .catch((err) =>{
        res.render("error");
    })
})


app.get('/detail/:id', async (req, res) => {
    const { id } = req.params;
    const urls = [
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    ];

    console.log(id);

    const [post, comments] = await Promise.all(
        urls.map((url) => {
            return axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => console.log(err));
        })
    )
    res.render("detail",{ post:post, comments:comments})
})


app.listen(8000, () => {
    console.log("server is listening on 8000");
});