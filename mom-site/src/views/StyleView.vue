<template>
  <Header :answer="true"></Header>
  <HairStyle></HairStyle>
  <FooterP></FooterP>

  
</template>

<script>
import HairStyle from '@/components/HairStyle.vue';
import FooterP from '@/components/FooterP.vue';
import Header from '@/components/Header.vue';


export default {
  components: {
    HairStyle,
    FooterP,
    Header
  }
 
}
</script>

<style scoped>

</style>