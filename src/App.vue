<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link">홈</router-link>
            <router-link to="/list" class="nav-link">리스트페이지</router-link>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="mt-4">
      <router-view :bloglist="bloglist"></router-view>
    </div>

    <!-- <ListBlog :bloglist="bloglist[i]" v-for="(item,i) in bloglist" :key="i"/> -->

  </div> 
  
</template>

<script>
// import ListBlog from './components/ListBlog.vue';
import blog from './assets/blog.js';

export default {

  name: 'App',
  data(){
    return{
        bloglist : blog,
    }
  },
  components: {
    // ListBlog : ListBlog,
    
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
