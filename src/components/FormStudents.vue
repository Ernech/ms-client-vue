<template >
  <form @submit.prevent="processForm">
    <div class="mb-3">
      <label for="studentName" class="form-label">Name</label>
      <input
        type="text"
        id="studentName"
        name="studentName"
        class="form-control"
        v-model.trim="student.name"
      />
    </div>
    <div class="mb-3">
      <label for="studentLastName" class="form-label">Last Name</label>
      <input
        type="text"
        id="studentLastName"
        name="studentLastName"
        class="form-control"
        v-model.trim="student.lastName"
      />
    </div>
    <div class="mb-3">
      <label for="studentPhone" class="form-label">Phone</label>
      <input
        type="text"
        id="studentPhone"
        class="form-control"
        v-model.trim="student.phone"
      />
    </div>
    <input type="submit" class="btn btn-primary" value="Create Student" />
  </form>
</template>
<script>
import { mapActions } from "vuex";
export default {
 
  data() {
    return {
      student: {
        studentId:0,
        name: "",
        lastName: "",
        phone: "",
      },
    };
  },
  methods: {
    ...mapActions(["createStudent"]),
    processForm() {
      console.log(this.student)
      this.createStudent(this.student);
      this.student = {
        name: "",
        lastName: "",
        phone: "",
      };
    },
  },
};
</script>
