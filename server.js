const express = require('express');
const app = express();

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const name = [
        {
            name:'Bob',
            color: 'red',
            readyToParty: true
        },
        {
            name:'Fred',
            color: 'green',
            readyToParty: false
        },
        {
            name:'Steve',
            color: 'yellow',
            readyToParty: true
        }
    ];
    

app.get('/greeting', (req, res) => {
    res.send('Hello There');
});

app.get('/greeting/:name', (req, res) =>{
	res.send('Hello There ' + req.params.name + ', how are you today?');
});


app.get('/tip/:total/:tipPercentage', (req, res) =>{
	res.send('Your tip is: ' + (req.params.total/100) * req.params.tipPercentage )
});


app.get('/magic/:question', (req, res) =>{
	let random = Math.floor(Math.random() * (20));
	res.send(req.params.question + '? ' + responses[random])

})




app.listen(3000, () => {
    console.log('listening');

});