<template>
  <div>
        <ul>
          <li v-for="item in users" :key="item.id">
            <div @click="() => btnGetIdPost(item.id)">
              {{item.id}} - {{item.name}} <button @click="btnDel(item.id)">DEl</button>
            </div>
          </li>
        </ul>

        <draggable
          :list="posts"
          group="people" 
          @start="drag=true" 
          @end="drag=false" 
          item-key="id"
          :move="checkMove"
        >
          <template #item="{element}">
            <div> {{element.id}} - {{element.title}} </div>
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
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
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