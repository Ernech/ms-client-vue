<template >
    <div class="container py-4">
        <div class="card">
            <div class="card-header">Teachers</div>
            <div class="card-body">
                <FormTeachers/>
            </div>
        </div>
    </div>
    <div class="container py-4">
        <TeachersList/>
    </div>
</template>
<script>
import FormTeachers from '../components/FormTeachers.vue';
import TeachersList from '../components/TeachersList.vue';
export default {
    components:{
        FormTeachers,
        TeachersList
    }
}
</script>
<style >
    
</style>