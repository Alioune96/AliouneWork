<template>
    <Header :answer="true"></Header>
    <Home></Home>
    <HoursContact></HoursContact>
    <FooterP></FooterP>
    
  
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

<style >

</style>