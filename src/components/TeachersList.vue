<template>
     <table class="table table-striped table-bordered">
        <thead class="bg-dark text-white">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="teacher in teachers" :key="teacher.teacherId">
                <td>{{teacher.teacherId}}</td>
                <td>{{teacher.name}}</td>
                <td>{{teacher.subject}}</td>
            </tr>
           
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['teachers'])
    }
}
</script>
