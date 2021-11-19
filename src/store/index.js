import { createStore } from 'vuex'

export default createStore({
  state: {
    student: {
     
      name: '',
      lastName: '',
      phone: ''

    },
    students: [],
    teacher: {
      name: '',
      subject: ''
    },
    teachers: []

  },
  mutations: {
    setNewStudent(state, payload) {
      state.students.push( payload)
    },
    setNewTeacher(state,payload){
        state.teacher = payload
    },
    setStudents(state,payload){
      state.students=payload
    }
  },
  actions: {
async createTeacher({commit},teacher){
    try {
      const res = await fetch('http://localhost:8080/ms-teacher/v1/api/teacher',{
        method:'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(teacher)
      })
      console.log(res.status)
      console.log(res)
      // const dataDB = await res.json();
      // console.log(dataDB);
      commit("setNewTeacher",teacher)
    } catch (error) {
      console.log("Error: "+error)
    }
},
    async createStudent({ commit }, student) {
      try {
        const res = await fetch('http://localhost:8080/ms-student/v1/api/student', {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(student)
          
        });
        console.log(res.status)
        const dataDB = await res.json();
        console.log(dataDB);
      
        commit('setNewStudent', dataDB)
      } catch (error) {
        console.log("Error: "+error)
      }

    },
    async loadStudents({commit}){
      const res = await fetch('http://localhost:8080/ms-student/v1/api/student/all')
     const dataDB = await res.json();
     const arrayStudents = [];
      for(let i = 0 ;i<dataDB.length;i++){
        arrayStudents.push(dataDB[i])
      }
      commit('setStudents',arrayStudents)
    }
  },
  modules: {
  }
})
