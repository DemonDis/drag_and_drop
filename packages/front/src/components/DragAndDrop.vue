<template>
  <div>
        <ul>
          <li v-for="item in users" :key="item.id">
            <div @click="() => btnGetIdPost(item.id)" >
              {{item.id}} - {{item.name}} <button @click="btnDel(item.id)">DEl</button>
            </div>
          </li>
        </ul>

        <draggable
          :list="posts"
          group="people" 
          @start="drag=false" 
          @end="drag=false" 
          item-key="id"
          :sort="true"
          @change="log"
          handle=".handle"
        >
          <template #item="{element}">
            <div class="handle"> {{element.id}} - {{element.title}} </div>
          </template>
        </draggable>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import axios from 'axios'

export default {
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      users: [],
      posts: []
    };
  },
  mounted(){
    axios.get("http://localhost:3000/user")
      .then((response) => {
        this.users = response.data
        console.log(response.data);
    });
  },
  methods: {
    log(evt) {
      console.log('!!!! evt', evt.moved);
      this.posts.map((item, index) => {
        console.log('###', item.position, index+1)
         return item.position != index+1 ? this.changePosition(item.id, index+1) : ''
      })
    },
    changePosition(id, position) {
      axios.put(`http://localhost:3000/post`, {
              position: position,
              id: id,
            })
            .then((response) => {
              console.log(response.data);
          })
    },
    btnDel(id) {
      axios.delete(`http://localhost:3000/user/${id}`)
        .then(response => {
          console.log(`Deleted post with ID ${id}`, response);
        })
        .catch(error => {
          console.error(error);
        });
    },
    btnGetIdPost(postId){
        axios.get(`http://localhost:3000/post/${postId}`)
          .then((response) => {
            this.posts = response.data
            console.log(response.data);
          });
      },
  }
};
</script>

<style scoped>
.posts { 
  margin: 10px;
  background-color: red;
}
</style>