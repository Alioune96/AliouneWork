<template>
    <Header></Header>
    <Home></Home>
    <div style="margin-top: 3%;">
    <HoursContact ></HoursContact>
    </div>
  
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import FooterP from '@/components/FooterP.vue';
import HoursContact from '@/components/Hours&Contact.vue';
import HairStyle from '@/components/HairStyle.vue';
export default {
    
    components: {
        Header,
        Home,
        FooterP,
        HoursContact,
        HairStyle

    }
}
</script>

<style scoped>
*{
    margin-bottom:2px ;
}



</style>