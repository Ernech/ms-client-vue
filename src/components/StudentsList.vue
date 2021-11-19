<template >
    <table class="table table-striped table-bordered">
        <thead class="bg-dark text-white">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id">
                <td>{{student.studentId}}</td>
                <td>{{student.name}}</td>
                <td>{{student.lastName}}</td>
                <td>{{student.phone}}</td>
            </tr>
           
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
          ...mapState(['students'])
    }
}
</script>
<style >
    
</style>