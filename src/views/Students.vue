<template >
    <div class ="container py-4">
        <div class="card">
            <div class="card-header">Students</div>
            <div class="card-body">
        <FormStudents/>
            </div>
        </div>
    </div>
    <div class="container py-4">
 <StudentsList/>
    </div>
   
</template>
<script>
import FormStudents from '../components/FormStudents.vue';
import StudentsList from '../components/StudentsList.vue';
export default {
  components:{

      FormStudents,
      StudentsList
  }  
}
</script>
<style >
    
</style>