<template>
<Header :answer="true"></Header>
<reservation></reservation>
<FooterP></FooterP>
</template>
<script>
import Reservation from '@/components/Reservation.vue';
import Header from '@/components/Header.vue';
import FooterP from '@/components/FooterP.vue';
import HairStyle from '@/components/HairStyle.vue';


export default {
    components: {
    Reservation,
    Header,
    FooterP,
    HairStyle
        
}
  
}
</script>
<style>

</style>