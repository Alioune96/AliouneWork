

<template>
<div id="First" >
        <span style="display: flex; width: 100%; justify-content: space-around;align-items: center;">
        <h2 id="cuzWhy">Maty African Hair Braiding</h2>
         <h2 id="secondWhy">Braiding for over<b style="font-weight: bold;">{{parseInt( new Date (Date.now()).getFullYear())-1996}}</b>years!<br/>Contact us at<b style="font-weight: bold;">(215) 221-0553</b>
      </h2>
    </span>
    </div>

  <div id="listenUp">
    <div id="smallkid"  >
      <span v-motion-slide-visible-once-right style="display: block;height: 50%; width: 100%;">
      <h4 style="font-size: 62px; color: white;text-align: center;font-family:Georgia, 'Times New Roman', Times, serif;text-transform: uppercase;">Philly's best hair braiding salon</h4>
          <span style="display: flex;justify-content: center;">
      <p style="margin-left: 1%;font-size: 18px; line-height: 1.5;margin-top: 2%; color: white;width: 70%;">Welcome to Maty African Hair Braiding&trade;, a hair salon in Philadelphia for beautiful braids. Our stylists are masters in their craft, including cornrows,
         box braids, senegalese twists, and so on. We strive to help you feel and look your best, and make braids that showcase your unique style. Visit us at Maty African Hair Braiding for a fantastic hair braiding experience!</p>
          </span>
        <h2 style="text-transform: uppercase;color: white; text-align: center;margin-top: 2%" >Click to see why we are refered to as the best!</h2>
        <span style="display: flex;justify-content: center;margin-top: .5%;">
          <button style="border-radius: 6px;padding: 13px;border: none;width: 10%;">Overview Video</button>

        </span>
    </span>
    
    </div>
    <span style="display: block;" id="trythis"> </span>
  </div>

</template>


<script>
import serviceStuff from '@/Service/serviceStuff';
import Header from './Header.vue';

export default {
  components: {
    Header
  },
  data() {
    return {
      img: "",
      video: false,
      hair: {}
    };
  },

  methods: {
    showVideoOne(){
      this.video = true
    },

    haha(){
      serviceStuff.getstyle().then((e)=>{
        this.hair = e.data
      })
    }
  },

  created(){
    this.haha();
  }
};
</script>

<style scoped>
#trythis{
position: relative;  
background-image: linear-gradient(315deg,
                        hsla(161, 51%, 47%, 0.1) 0, rgba(11, 173, 100, 0) 0%);

}

#trythis::before{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: url("../img/wave3.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: .8%;
  
}



#secondWhy{
  font-size: 15px;
  display: block;
  color: white;
}

#cuzWhy{
  font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
    font-weight: 400;
    color: white;
  font-size: 40px;
}

#First{
  height: 100px;
  display: flex;
  width: 100%;
  padding: 25px;
  background-color: #3e8547ec;
  justify-content: space-evenly;
}




*{
  padding: 6px;
}

h3{
  color: white;
  margin-block: 2%;
  font-size: 35px;
  /* text-align: center; */
  border-bottom: 2px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 200px;
  margin-left: 43%;
  /* border: 1px solid orange; */
  display: block;
  padding-bottom:5px
  /* justify-content: center; */
}

p{
  color: white;
}
section{
  background-color: #3e8547ec;
  border: 1px solid black;
}

#wewillsee{
  column-count: 2;

 
}

#smallkid{
    height: 100%;
    background-color: rgba(16, 16, 17, 0.575);
    display: flex;
    align-items: center;

}

#listenUp {
  height: 1000px;
  background-image: url('../img/IMG_4587.jpg');
  
  background-size: cover;
  background-position:100% 33%;
  padding: 0%;
  margin-top: .2%;
  image-rendering: optimizeQuality;
  
}




h1 {
  font-family: cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  /* display: flex; */
  /* justify-content: center; */
  border: 5px solid white;
  text-align: center;
  font-size: 50px;
  color: white;
  background-color: rgba(137, 144, 150, 0.404);
}
</style>
