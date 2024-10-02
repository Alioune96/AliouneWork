<script >
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import FooterP from './components/FooterP.vue';

export default{
    components:{
        FooterP,
        Header,
    }
}

</script>

<template>
<RouterView></RouterView>
    <FooterP></FooterP>



</template>

<style>
html{
    scroll-behavior: smooth;
}




</style>
