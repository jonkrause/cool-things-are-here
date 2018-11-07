<template>
<div class="chuckbase">
  <h1>{{title}}</h1>
  <p>{{msg}}</p>
  {{records.price}}
  {{records.date}}
</div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'chuckbase',
  data() {
    return {
      title: 'chuckbase',
      msg: 'omg this feels so good',
      records: null
    }
  },
  beforeMount: function() {
    this.records = db.collection('chuckbase').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.records = doc.data()
        console.log(doc.id, '=>', doc.data().price)
      })
      console.log(snapshot)
    }).catch((err) => {
      console.log(err)
    })
  },
  firestore() {
    this.records = db.collection('chuckbase')
  }
}
</script>

<style scoped>
</style>