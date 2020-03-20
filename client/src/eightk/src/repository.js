import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

export function getList() {
    return axios.get(`${BASE_URL}/api/eightk/list`)
            .then(response => response.data);
}


export function deleteDocument(id){
    return axios.post(`${BASE_URL}/api/eightk/delete/${id}`)
            .then(response => response.data)
            .catch(err => Promise.reject(err.message));
}

export function createDocument(data) {
    return axios.post(`${BASE_URL}/api/eightk/create`,
    {   
        ideightk_main: data.ideightk_main,
        cik: data.cik,
        filling_date: data.filling_date,
        accepted: data.accepted,
        documents: data.documents,
        period_of_report: data.period_of_report,
        jrs_no: data.jrs_no,
        state_of_incorp: data.state_of_incorp,
        fiscal_year_end: data.fiscal_year_end,
        type: data.type,
        eightk_type: data.eightk_type,
        act: data.act,
        file_no: data.file_no,
        film_no: data.film_no,
        sic: data.sic,
        business_address1: data.business_address1,
        business_address2: data.business_address2,
        mailing_address1: data.mailing_address1,
        mailing_address2: data.mailing_address2,
        matching: data.matching,
        year: data.year,
        eightk_file_url: data.eightk_file_url,
        cik_file_url: data.cik_file_url,
        eightk_index_url: data.eightk_index_url,
        item: data.item,
        fdate: data.fdate,
        findexdate: data.findexdate,
        lindexdate: data.lindexdate,
        form: data.form,
        coname: data.coname,
        wrdsfname: data.wrdsfname,
        fsize: data.fsize,
        doccount: data.documents,
        fname: data.fname,
        rdate: data.rdate,
        secadate: data.secadate,
        secatime: data.secatime,
        secpdate: data.secpdate,
        accession: data.accession,
        regcount: data.regcount,
        item101: data.item101,
        item102: data.item102,
        item202: data.item102,
        item701: data.item701,
        item801: data.item801,
        item101_position: data.item101_position,
        item102_position: data.item102_position,
        item202_position: data.item202_position,
        item701_position: data.item701_position,
        item801_position: data.item801_position,
        length_item101: data.length_item101,
        length_item102: data.length_item102,
        length_item202: data.length_item202,
        length_item701: data.length_item701,
        length_item801: data.length_item801,
        item9: data.item9,
        item5: data.item5,
        item12: data.item12,
        item9_position: data.item9_position,
        item5_position: data.item5_position,
        item12_position: data.item12_position,
        input_id: data.input_id
    })      .then(response => {
                return response.data
            })
            .catch(err => Promise.reject(err.message));
}

// export function updateDocument(data, id) {
//     return axios.post(`${BASE_URL}/api/eightk/update/${id}`, { data })
//                 .then(response => {
//                         return response.data
//                 })
//                 .catch(err => Promise.reject(err.message));
// }