<script list="js">
import { ref } from 'vue'

  export default {
    // props : {
    //   item: Array,
    // },
    setup() {
      const items = ref([
          {
            id: 0,
            title: 'Item A',
            list: 1,
          },
          {
            id: 1,
            title: 'Item B',
            list: 1,
          },
          {
            id: 2,
            title: 'Item C',
            list: 2,
          },
      ])
      const getList = (list) => {
        return items.value.filter((item) => item.list == list)
      }
      const startDrag = (evt, item) => {
        evt.dataTransfer.dropEffect = 'move'
        evt.dataTransfer.effectAllowed = 'move'
        evt.dataTransfer.setData('itemID', item.id)
      }
      const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID')
        const item = this.items.find((item) => item.id == itemID)
        item.list = list
      }
      return {
        getList,
        startDrag,
        onDrop
      }
    },

    data() {
      return {
        // items: [
        //   {
        //     id: 0,
        //     title: 'Item A',
        //     list: 1,
        //   },
        //   {
        //     id: 1,
        //     title: 'Item B',
        //     list: 1,
        //   },
        //   {
        //     id: 2,
        //     title: 'Item C',
        //     list: 2,
        //   },
        // ],
      }
    },
    computed: {
      // listOne() {
      //   return this.items.filter((item) => item.list === 1)
      // },
      // listTwo() {
      //   return this.items.filter((item) => item.list === 2)
      // },
    },
    methods: {
      // startDrag(evt, item) {
      //   evt.dataTransfer.dropEffect = 'move'
      //   evt.dataTransfer.effectAllowed = 'move'
      //   evt.dataTransfer.setData('itemID', item.id)
      // },
      // onDrop(evt, list) {
      //   const itemID = evt.dataTransfer.getData('itemID')
      //   const item = this.items.find((item) => item.id == itemID)
      //   item.list = list
      // },
    },
  }
</script>

<template>
  <div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div 
        class="drag-el"
        v-for="item in getList(1)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 2)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        class="drag-el"
        v-for="item in getList(2)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  /* width: 50px; */
  /* margin: 50x auto; */
  /* min-height: 10px; */

}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
.drag-el:nth-last-of-type(1){
  margin-bottom:0;
}
</style>
