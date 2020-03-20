'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');

//to models
const eightk_schema = require('../models/eightk_schema');

//connect server to DB
mongoose.connect(
    'mongodb://localhost:27017/eightk_db/eightk_collection',
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }
).then(
    () => {console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database'+ err)}
);
//mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended: true }));
app.use(cors());

//get all
app.get('/api/eightk/list', (req, res) => {
    eightk_schema.find({}).sort({ideightk_main: 'ascending'}).exec((err, list) => {
        if (err) return res.status(404).send('Error while get list.');
        return res.send({list});
    });
});``

//create a new document
app.post('/api/eightk/create', (req,res) => {
    const document = new eightk_schema({
        ideightk_main: req.body.ideightk_main,
        cik: req.body.cik,
        filling_date: req.body.filling_date,
        accepted: req.body.accepted,
        documents: req.body.documents,
        period_of_report: req.body.period_of_report,
        jrs_no: req.body.jrs_no,
        state_of_incorp: req.body.state_of_incorp,
        fiscal_year_end: req.body.fiscal_year_end,
        type: req.body.type,
        eightk_type: body.eightk_type,
        act: req.body.act,
        file_no: req.body.file_no,
        film_no: req.body.film_no,
        sic: req.body.sic,
        business_address1: req.body.business_address1,
        business_address2: req.body.business_address2,
        mailing_address1: body.mailing_address1,
        mailing_address2: body.mailing_address2,
        matching: req.body.matching,
        year: req.body.year,
        eightk_file_url: req.body.eightk_file_url,
        cik_file_url:req.body.cik_file_url,
        eightk_index_url: req.body.eightk_index_url,
        item: req.body.item,
        fdate: req.body.fdate,
        findexdate: req.body.findexdate,
        lindexdate: req.body.lindexdate,
        form: req.body.form,
        coname: req.body.coname,
        wrdsfname: req.body.wrdsfname,
        fsize: req.body.fsize,
        doccount: req.body.documents,
        fname: req.body.fname,
        rdate: req.body.rdate,
        secadate: req.body.secadate,
        secatime: req.body.secatime,
        secpdate: req.body.secpdate,
        accession: req.body.accession,
        regcount: req.body.regcount,
        item101: body.item101,
        item102: body.item102,
        item202: body.item102,
        item701: body.item701,
        item801: body.item801,
        item101_position: body.item101_position,
        item102_position: body.item102_position,
        item202_position: body.item202_position,
        item701_position: body.item701_position,
        item801_position: body.item801_position,
        length_item101: body.length_item101,
        length_item102: body.length_item102,
        length_item202: body.length_item202,
        length_item701: body.length_item701,
        length_item801: body.length_item801,
        item9: body.item9,
        item5: req.body.item5,
        item12: body.item12,
        item9_position: body.item9_position,
        item5_position: req.body.item5_position,
        item12_position: body.item12_position,
        input_id: req.body.input_id
    });
    document.save((err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ document });
    }); 
});

//update an existing document with ideightk_main
// app.post('/api/eightk/update/:id', (req, res) => {
//     let options = { new: true };
//     eightk_schema.findByIdAndUpdate(req.params.ideightk_main, req.body.item5, options, (err, document) =>{
//         if (err) return res.status(404).send({message: err.message});
//         return res.send({message: 'document updated.', document});
//     });
// });

//delete an existing document with ideightk_main
app.post('/api/eightk/delete/:id', (req,res) => {
    eightk_schema.findByIdAndRemove(req.params.ideightk_main, (err) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({message: 'document delete'});
    });
});

const PORT = 8080;
app.listen(PORT);
console.log('api calling on' + PORT + 'is:');
