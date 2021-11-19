<template >
    <form @submit.prevent="processForm">
        <div class="mb-3">
            <label for="teacherName" class="form-label">Name</label>
            <input type="text" class="form-control" id="teacherName" name="teacherName" v-model.trim="teacher.name"/>
        </div>
        <div class="mb-3">
            <label for="teacherSubject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="teacherSubject" name="teacherSubject" v-model.trim="teacher.subject"/>
        </div>
        <input type="submit" class="btn btn-primary" value ="Create Teacher">
    </form>
    <p>{{teacher}}</p>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            teacher:{
                name:"",
                subject:"",
            }
        }
    },
    methods:{
        ...mapActions(["createTeacher"]),
        processForm(){
            console.log(this.teacher)
            this.createTeacher(this.teacher);
            this.teacher = {
                name:'',
                subject:''
            }
        }
    }
}
</script>
<style >
    
</style>