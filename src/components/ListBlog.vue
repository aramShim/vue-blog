<template>
    <div v-for="(item,i) in bloglist" :key="i">
        <div>
            <h5><router-link to="/detail/{{i}}">{{bloglist[i].title}}</router-link></h5>
            <p>{{bloglist[i].content}}</p>
        </div> 
        <div>
            <h5 @click="$router.push('/detail/0')">{{bloglist[1].title}}</h5>
            <p>{{bloglist[1].content}}</p>
        </div> 
        <div>
            <h5><router-link to="/detail/2">{{bloglist[2].title}}</router-link></h5>
            <p>{{bloglist[2].content}}</p>
        </div>      
    </div>
</template>
<script>
    export default{
        name: 'list-blog',
        props: {
            bloglist : Array,
        }
    }
</script>
<style>

</style>