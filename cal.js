var express = require ('express');

var app = new express();

app.get('/',function (req,res) {

    console.log('req.query',req.query);

    var formula = req.query;

    console.log(formula.key);

    var final = eval(formula.key);

    console.log(final);

    console.log(formula.key+'='+final);

    res.end(formula.key+'='+final);
});

app.listen(3003);