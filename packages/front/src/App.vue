<script lang="ts">
import axios from 'axios'

  export default {
    methods: {
      btn() {
        axios.post("http://localhost:3000/user", {
            name: 'Adam',
            surname: 'Smith'
          })
          .then((response: any) => {
            console.log(response);
          });
      },
      btnGET() {
        axios.get("http://localhost:3000/user")
          .then((response: any) => {
            console.log(response);
          });
      },
      btnGETId() {
        axios.get("http://localhost:3000/user/1")
          .then((response: any) => {
            console.log(response);
          });
      },
      btnPUT() {
        axios.put("http://localhost:3000/user", {
            id: 1,
            name: 'AdamS',
            surname: 'Smith 2'
          })
          .then((response: any) => {
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
            title: 'for Adam',
            content: 'fot S',
            user_id: 4
          })
          .then((response: any) => {
            console.log(response);
          });
      },
      btnGetIdPost(){
        axios.get("http://localhost:3000/post/4")
          .then((response: any) => {
            console.log(response);
          });
      },
      btnGetAllPost(){
        axios.get("http://localhost:3000/post")
          .then((response: any) => {
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
  </div>
</template>

<style scoped>

</style>
