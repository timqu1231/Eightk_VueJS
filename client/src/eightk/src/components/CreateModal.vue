<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Add new document
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input v-model="ideightk_main" class="input" type="text" placeholder="ideightk_main">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="cik" class="textarea"  placeholder="cik">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="filling_date" class="textarea"  placeholder="filling_date">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="accepted" class="textarea"  placeholder="accepted">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="documents" class="textarea"  placeholder="documents">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="period_of_report" class="textarea"  placeholder="period_of_report">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="jrs_no" class="textarea"  placeholder="jrs_no">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="state_of_incorp" class="textarea"  placeholder="state_of_incorp">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="fiscal_year_end" class="textarea"  placeholder="fiscal_year_end">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="type" class="textarea"  placeholder="type">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="eightk_type" class="textarea"  placeholder="eightk_type">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="act" class="textarea"  placeholder="act">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="file_no" class="textarea"  placeholder="file_no">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="film_no" class="textarea"  placeholder="film_no">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="sic" class="textarea"  placeholder="sic">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="business_address1" class="textarea"  placeholder="business_address1">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="business_address2" class="textarea"  placeholder="business_address2">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="mailing_address1" class="textarea"  placeholder="mailing_address1">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="mailing_address2" class="textarea"  placeholder="mailing_address2">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="matching" class="textarea"  placeholder="matching">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="year" class="textarea"  placeholder="year">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="eightk_file_url" class="textarea"  placeholder="eightk_file_url">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="cik_file_url" class="textarea"  placeholder="cik_file_url">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="eightk_index_url" class="textarea"  placeholder="eightk_index_url">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item" class="textarea"  placeholder="item">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="fdate" class="textarea"  placeholder="fdate">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="findexdate" class="textarea"  placeholder="findexdate">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="lindexdate" class="textarea"  placeholder="lindexdate">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="form" class="textarea"  placeholder="form">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="coname" class="textarea"  placeholder="coname">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="wrdsfname" class="textarea"  placeholder="wrdsfname">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="fsize" class="textarea"  placeholder="fsize">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="doccount" class="textarea"  placeholder="doccount">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="fname" class="textarea"  placeholder="fname">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="rdate" class="textarea"  placeholder="rdate">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="secadate" class="textarea"  placeholder="secadate">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="secatime" class="textarea"  placeholder="secatime">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="secpdate" class="textarea"  placeholder="secpdate">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="accession" class="textarea"  placeholder="accession">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="regcount" class="textarea"  placeholder="regcount">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item101" class="textarea"  placeholder="item101">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item102" class="textarea"  placeholder="item102">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item202" class="textarea"  placeholder="item202">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item701" class="textarea"  placeholder="item701">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item801" class="textarea"  placeholder="item801">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item101_position" class="textarea"  placeholder="item101_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item102_position" class="textarea"  placeholder="item102_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item202_position" class="textarea"  placeholder="item202_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item701_position" class="textarea"  placeholder="item701_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item801_position" class="textarea"  placeholder="item801_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="length_item101" class="textarea"  placeholder="length_item101">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="length_item102" class="textarea"  placeholder="length_item102">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="length_item202" class="textarea"  placeholder="length_item202">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="length_item701" class="textarea"  placeholder="length_item701">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="length_item801" class="textarea"  placeholder="length_item801">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item9" class="textarea"  placeholder="item9">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item5" class="textarea"  placeholder="item5">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item12" class="textarea"  placeholder="item12">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item9_position" class="textarea"  placeholder="item9_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item5_position" class="textarea"  placeholder="item5_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="item12_position" class="textarea"  placeholder="item12_position">
                </textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="input_id" class="textarea"  placeholder="input_id">
                </textarea>
            </div>
          </div>
          <button @click="create" class="button is-primary is-pulled-right"></button>
        </section>
      </div>
      <button @click="toggle" class="modal-close is-large" aria-label="close"></button>
    </div>
    <button @click="toggle" class="button is-primary is-pulled-right">Create</button>
    <br>
  </div>
</template>
<script>
import { createDocument }  from '../repository.js'
export default {
  name: 'CreateModal',
  data(){
    return {
        ideightk_main: '',
        cik: '',
        filling_date: '',
        accepted: '',
        documents: '',
        period_of_report: '',
        jrs_no: '',
        state_of_incorp: '',
        fiscal_year_end: '',
        type: '',
        eightk_type: '',
        act: '',
        file_no: '',
        film_no: '',
        sic: '',
        business_address1: '',
        business_address2: '',
        mailing_address1: '',
        mailing_address2: '',
        matching: '',
        year: '',
        eightk_file_url: '',
        cik_file_url: '',
        eightk_index_url: '',
        item: '',
        fdate: '',
        findexdate: '',
        lindexdate: '',
        form: '',
        coname: '',
        wrdsfname: '',
        fsize: '',
        doccount: '',
        fname: '',
        rdate: '',
        secadate: '',
        secatime: '',
        secpdate: '',
        accession: '',
        regcount: '',
        item101: '',
        item102: '',
        item202: '',
        item701: '',
        item801: '',
        item101_position: '',
        item102_position: '',
        item202_position: '',
        item701_position: '',
        item801_position: '',
        length_item101: '',
        length_item102: '',
        length_item202: '',
        length_item701: '',
        length_item801: '',
        item9: '',
        item5: '',
        item12: '',
        item9_position: '',
        item5_position: '',
        item12_position: '',
        input_id: '',
    }
  },
  methods: {
    create(){
        let data = { 
            ideightk_main: this.ideightk_main,
            cik: this.cik,
            filling_date: this.filling_date,
            accepted: this.accepted,
            documents: this.documents,
            period_of_report: this.period_of_report,
            jrs_no: this.jrs_no,
            state_of_incorp: this.state_of_incorp,
            fiscal_year_end: this.fiscal_year_end,
            type: this.type,
            eightk_type: this.eightk_type,
            act: this.act,
            file_no: this.file_no,
            film_no: this.film_no,
            sic: this.sic,
            business_address1: this.business_address1,
            business_address2: this.business_address2,
            mailing_address1: this.mailing_address1,
            mailing_address2: this.mailing_address2,
            matching: this.matching,
            year: this.year,
            eightk_file_url: this.eightk_file_url,
            cik_file_url: this.cik_file_url,
            eightk_index_url: this.eightk_index_url,
            item: this.item,
            fdate: this.fdate,
            findexdate: this.findexdate,
            lindexdate: this.lindexdate,
            form: this.form,
            coname: this.coname,
            wrdsfname: this.wrdsfname,
            fsize: this.fsize,
            doccount: this.documents,
            fname: this.fname,
            rdate: this.rdate,
            secadate: this.secadate,
            secatime: this.secatime,
            secpdate: this.secpdate,
            accession: this.accession,
            regcount: this.regcount,
            item101: this.item101,
            item102: this.item102,
            item202: this.item102,
            item701: this.item701,
            item801: this.item801,
            item101_position: this.item101_position,
            item102_position: this.item102_position,
            item202_position: this.item202_position,
            item701_position: this.item701_position,
            item801_position: this.item801_position,
            length_item101: this.length_item101,
            length_item102: this.length_item102,
            length_item202: this.length_item202,
            length_item701: this.length_item701,
            length_item801: this.length_item801,
            item9: this.item9,
            item5: this.item5,
            item12: this.item12,
            item9_position: this.item9_position,
            item5_position: this.item5_position,
            item12_position: this.item12_position,
            input_id: this.input_id 
        }
      createDocument(data)
        .then(data => {
          this.$emit('createDocument', data.document);
          this.ideightk_main = this.cik = this.filling_date = this.accepted = this.documents = this.period_of_report =
            this.jrs_no = this.state_of_incorp = this.fiscal_year_end = this.type = this.eightk_type = this.act = this.file_no = 
              this.film_no = this.sic = this.business_address1 = this.business_address2 = this.mailing_address1 = this.mailing_address2 = 
          this.matching = this.year = this.eightk_file_url = this.cik_file_url = this.eightk_index_url = this.item = this.fdate = this.findexdate = 
            this.lindexdate = this.form = this.coname = this.wrdsfname = this.fsize = this.documents = this.fname = this.rdate = this.secadate = this.secatime = 
              this.secpdate = this.accession = this.regcount = this.item101 = this.item102 = this.item102 = this.item701 = this.item801 = this.item101_position = 
          this.item102_position = this.item202_position = this.item701_position = this.item801_position = this.length_item101 = this.length_item102 = this.length_item202 = 
            this.length_item701 = this.length_item801 = this.item9 = this.item5 = this.item12 = this.item9_position = this.item5_position = this.item12_position = this.input_id = '';
          //this.toggle();
        })
        .catch(err => alert(err.message));
    },
    // toggle(){
    //   this.isActive = !this.isActive;
    // },
  },
}
</script>