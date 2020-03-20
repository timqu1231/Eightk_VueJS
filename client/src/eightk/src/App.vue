<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <span class="title is-size-1">eightkkkk List</span>
          </a>
        </div>
      </div>
    </nav>
    <br><br>
    <div  class="container">
      <!-- <div v-if="list">
        <CreateModal @createDocument="createDocument"/>
        <br>
        <div>
          <document-modal v-for="(document, index) in list" :document="document" :key="index" @deleteDocument="deleteDocument" @updateDocument="updateDocument"/>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
// import DocumentModal  from './components/DocumentModal.vue'
// import CreateModal  from './components/CreateModal.vue'
import { getList }  from './repository.js'
export default {
  name: 'app',
  // components: { DocumentModal, CreateModal  },
  data(){
    return {
      list: []
    }
  },
  methods: {
    deleteDocument(id){
      let list = this.list.filter(document => document.ideightk_main != id);
      this.list = list;
    },
    updateDocument(document){
      this.deleteDocument(document.ideightk_main);
      this.createDocument(document);
    },
    createDocument(document){
        this.list = [document, ...this.list];
    },
  },
  mounted(){
    getList()
      .then(data => this.list = data.list)
      .catch((err =>alert(err)));
  }
}
</script>
