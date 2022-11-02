<template>
    <div class="container mt-4">
        <h4>상세페이지{{$route.params.id}}</h4>
        <h5>{{bloglist[$route.params.id].title}}</h5>
        <p>{{bloglist[$route.params.id].content}}</p>
        {{click}}
        <button @click="$router.push('`/detail/${$route.params.id}/comment`')">작가소개</button>
        <router-link :to="`../detail/${$route.params.id}/comment`">댓글</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name: 'detail-view',
        data(){
            return {
                click: this.$router.currentRoute,
            }
        },
        props:{
            bloglist: Array,
        }
       
    }
</script>
<style>

</style>