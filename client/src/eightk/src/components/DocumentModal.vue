<template>
  <article class="message">
    <div class="message-header">
      <p>{{ document.ideightk_main}}</p>
      <button @click="deleteDocument" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{ document.cik }}
      <br>
      <br>
      <!-- <UpdateNoteModal :note="note" @updateNote="updateNote" :key="document.ideightk_main"/> -->
    </div>
  </article>
</template>
<script>
  import { deleteDocument } from '../repository'
  // import UpdateModal from './UpdateModal'
  // import Moment from 'moment'
  export default {
    name: 'DocumentModal',
    props: [ 'document' ],
    // components: { UpdateModal },
    methods: {
      deleteDocument(e){
        e.preventDefault();
        deleteDocument(this.document.ideightk_main)
          .then(() => this.$emit('deleteDocument', this.document.ideightk_main))
          .catch(err => alert(err))
      },
      // updateNote(document){
      //   this.$emit('updateDocument', document)
      // }
    },
    // filters: {
    //   moment(date) {
    //     return Moment(date).format('MMMM Do YYYY, h:mm:ss a');
    //   }
    // }
  }
</script>