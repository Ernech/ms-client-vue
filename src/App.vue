<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import  Navbar  from './components/Navbar.vue';
import { mapActions } from 'vuex';
export default {
  components:{
    Navbar
  },
  methods:{
    ...mapActions(['loadStudents','loadTeachers'])
  },
  created(){
    this.loadStudents()
    this.loadTeachers()
  }
  
}
</script>
