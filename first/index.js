const redis = require('redis');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const redisClient = redis.createClient({
    port: 6379,
    host: 'redis'
});
const mongooseConnection = require("./connection")
const User = require('./user');

redisClient.on('connect', function () {
    console.log('Redis client connected');
});

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

redisClient.set('my test key', 'my test value', redis.print);

mongooseConnection().then(() => {
    console.log("MongoDb connectedd");
});

app.get('/key', (req, res) => {
    redisClient.get('my test key', function (error, result) {
        if (error) {
            console.log(error);
            throw error;
        }
        res.send('key is ' + result)
        console.log('GET result ->' + result);
    });
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post("/user-create", async (req, res) => {
    const user = new User({ username: "userTests" });
    await user.save().then(() => console.log("User created"));
    res.send("User created \n");
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));