<script lang="js">
import axios from 'axios'
import DragAndDrop from './components/DragAndDrop.vue'

  export default {
    components: {
      DragAndDrop
    },
    methods: {
      btn() {
        axios.post("http://localhost:3000/user", {
            name: '4 Adam',
            surname: 'Smith'
          })
          .then((response) => {
            console.log(response);
          });
      },
      btnGET() {
        axios.get("http://localhost:3000/user")
          .then((response) => {
            console.log(response);
          });
      },
      btnGETId() {
        axios.get("http://localhost:3000/user/1")
          .then((response) => {
            console.log(response);
          });
      },
      btnPUT() {
        axios.put("http://localhost:3000/user", {
            id: 1,
            name: 'PERSONAL Main',
            surname: 'Smith'
          })
          .then((response) => {
            console.log(response);
          });
      },
      btnDel() {
        const postIdToDelete = 10;
        axios.delete(`http://localhost:3000/user/${postIdToDelete}`)
          .then(response => {
            console.log(`Deleted post with ID ${postIdToDelete}`, response);
          })
          .catch(error => {
            console.error(error);
          });
      },
      btnPostCREAT(){
        axios.post("http://localhost:3000/post", {
            title: '1-a',
            content: 'fot S',
            id: 1,
            user_id: 1
          })
          .then((response) => {
            console.log(response);
          });
      },
      btnGetIdPost(){
        const postId = 1;
        axios.get(`http://localhost:3000/post/${postId}`)
          .then((response) => {
            console.log(response);
          });
      },
      btnGetAllPost(){
        axios.get("http://localhost:3000/post")
          .then((response) => {
            console.log(response);
          });
      },
      btnDellAllPost(){
        axios.delete("http://localhost:3000/post")
          .then((response) => {
            console.log(response);
          });
      }
    }
  }
</script>

<template>
  <div>
    <button @click="btn()">CLICK</button>
    <button @click="btnGET()">GET ALL</button>
    <button @click="btnGETId()">GET Id 1</button>
    <button @click="btnPUT()">PUT</button>
    <button @click="btnDel()">DEL</button>
    <div></div>
    <button @click="btnPostCREAT()">Create post</button>
    <button @click="btnGetIdPost()">Get id post</button>
    <button @click="btnGetAllPost()">Get ALL post</button>
    <button @click="btnDellAllPost()">DELL ALL post</button>
    <DragAndDrop/>
</div>
</template>

<style scoped>

</style>
