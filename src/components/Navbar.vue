<template >
 <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
      <span class ="navbar-brand">Vue-Client</span>
      <ul class = "nav">
        <li class = "nav-item">
            <router-link to ="/"  class ="btn btn-dark">
                Students
            </router-link>
        </li>
        <li class ="nav-item">
            <router-link to ="/teachers"  class ="btn btn-dark">
                Teachers
            </router-link>
        </li>
      </ul>
  </div>
</nav>
</template>
<script>
export default {};
</script>
<style >
</style>