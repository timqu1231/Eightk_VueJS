const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eightkSchema = Schema({
    ideightk_main: {
        type: String, 
        required: true
    },
    cik: {
        type: String, 
        required: true
    },
    filling_date: {
        type: String, 
        required: true
    },
    accepted: {
        type: String, 
        required: true
    },
    documents: {
        type: String, 
        required: true
    },
    period_of_report: {
        type: String, 
        required: true
    },
    jrs_no: {
        type: String, 
        required: true
    },
    state_of_incorp: {
        type: String, 
        required: true
    },
    fiscal_year_end: {
        type: String, 
        required: true
    },
    type: {
        type: String, 
        required: true
    },
    eightk_type: {
        type: String
    },
    act: {
        type: String, 
        required: true
    },
    file_no: {
        type: String, 
        required: true
    },
    film_no: {
        type: String, 
        required: true
    },
    sic: {
        type: String, 
        required: true
    },
    business_address1: {
        type: String, 
        required: true
    },
    business_address2: {
        type: String, 
        required: true
    },
    mailing_address1: {
        type: String
    },
    mailing_address2: {
        type: String
    },
    matching: {
        type: String, 
        required: true
    },
    year: {
        type: String, 
        required: true
    },
    eightk_file_url: {
        type: String, 
        require: true
    },
    cik_file_url: {
        type: String
    },
    eightk_index_url: {
        type: String, 
        required: true
    },
    item: {
        type: String, 
        required: true
    },
    fdate: {
        type: String, 
        required: true
    },
    findexdate: {
        type: String, 
        required: true
    },
    lindexdate: {
        type: String, 
        required: true
    },
    form: {
        type: String, 
        required: true
    },
    coname: {
        type: String, 
        required: true
    },
    wrdsfname: {
        type: String, 
        required: true
    },
    fsize: {
        type: String, 
        required: true
    },
    doccount: {
        type: String, 
        required: true
    },
    fname: {
        type: String, 
        required: true
    },
    rdate: {
        type: String, 
        required: true
    },
    secadate: {
        type: String, 
        required: true
    },
    secatime: {
        type: String
    },
    secpdate: {
        type: String, 
        required: true
    },
    accession: {
        type: String, 
        required: true
    },
    regcount: {
        type: String, 
        required: true
    },
    item101: {
        type: String
    },
    item102: {
        type: String
    },
    item202: {
        type: String
    },
    item701: {
        type: String
    },
    item801: {
        type: String
    },
    item101_position: {
        type: String
    },
    item102_position: {
        type: String
    },
    item202_position: {
        type: String
    },
    item701_position: {
        type: String
    },
    item801_position: {
        type: String
    },
    length_item101: {
        type: String
    },
    length_item102: {
        type: String
    },
    length_item202: {
        type: String
    },
    length_item701: {
        type: String
    },
    length_item801: {
        type: String
    },
    item9: {
        type: String
    },
    item5: {
        type: String, 
        required: true
    },
    item12: {
        type: String
    },
    item9_position: {
        type: String
    },
    item5_position: {
        type: String, 
        required: true
    },
    item12_position: {
        type: String
    },
    input_id: {
        type: String, 
        required: true
    },
});
const eightk_schema = mongoose.model("eightk_schema", eightkSchema);
module.exports = eightk_schema;