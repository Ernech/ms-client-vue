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
      teacherId: 0,
      name: '',
      subject: ''
    },
    teachers: []

  },
  mutations: {
    setNewStudent(state, payload) {
      state.student = payload
    }
  },
  actions: {

    async createStudent({ commit }, student) {
      try {
        const res = await fetch('http://192.168.1.14:8181/ms-student/v1/api/student', {
          method: 'POST',
        
          headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
          body: JSON.stringify(student)
          
        });
        console.log(res.status)
        const dataDB = await res.json();
        console.log(dataDB);
      
        commit('setNewStudent', student)
      } catch (error) {
        console.log("Error: "+error)
      }

    }
  },
  modules: {
  }
})
