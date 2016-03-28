var express = require('express');
var router = express.Router();
var test = require('./test.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    test.aa.bb();
    var noteModel = global.db.getModel('notes');
    noteModel.find({},function (err,notes) {
        if(err){
            return next(err);
        }else{
            console.log(notes.length);
            res.render('index', { title: 'Express',notes:notes});
        }
    });
});

router.get('/note',function (req, res ,next) {
    res.render('note',{title:'note'});
});

module.exports = router;
