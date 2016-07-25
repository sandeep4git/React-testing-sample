/**
 * Created by sandeeptc on 7/14/16.
 */
    var express=require('express');
    var app=express();
    var mongojs = require('mongojs');
    var db= mongojs('contactList',['contactList']);
    var bodyParser=require('body-parser');
    //var str2json = require('string-to-json');

    app.use(express.static(__dirname+"/public"));

    app.use(bodyParser.json({
    extended: true
    }));
    app.use(bodyParser.json());

    app.get('/contactList',function(req,res){
        console.log("I received a GET request")

        db.contactList.find(function(err,docs){
           console.log(docs);
            res.json(docs);
        });
    });

    app.post('/contactList',function(req,res){
       console.log(req.body);
        db.contactList.insert(req.body,function(err,doc){
           res.json(doc);
        });
    });

    app.get('/contactList/display/:id',function(req,res){
            var id=req.params.id;
        console.log(id);

        db.contactList.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
            console.log(doc);
            //res.json(JSON.stringify(doc));
            res.json(doc);
        });

    });

    app.post('/contactList/update/:id',function(req,res){
        var id=req.params.id;
        console.log(req.body);
        console.log(req.body.firstname);
        db.contactList.findAndModify({query:{_id:mongojs.ObjectId(id)},
        update:{$set:{firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,phone:req.body.phone}},
        new:true},function(err,doc){
        res.json(doc);

        })

    });

app.listen(3000);
    console.log("Server running on port 3000");
