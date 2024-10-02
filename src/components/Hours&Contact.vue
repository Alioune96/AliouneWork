<template>
<span style="display: block; margin-bottom: 2%;">
  <div style="display: flex;height: 150px;">
    <span style="display: flex;width: 50%;justify-content: center;align-items: center;">
      <span style="display: block;">
      <h3 style="font-size: 25px;color:darkgreen ;">What We Do</h3>
      <h5 style="font-size: 35px;">Outstanding Braiding Salon</h5>
      </span>
    </span>
    <span style="display: flex;width: 50%;align-items:center;">
      <span style="display: block;">
      <p style="color: black;">We offer braiding services to all people - kids and adults. In addition to the options available on our service page, we also many other braiding options per your request. For more information, contact us by calling or stopping by.</p>
    </span>
    </span>
  </div>
 
  <div v-if="gotYou" style="display: block;justify-content: center;height: 500px;">
  <div style=" width: 90%; display: flex;margin-left: 5%;margin-top: 3%;">
        <div v-motion-slide-visible-once-bottom id="photofun" v-for="details, in justFOURdisplay" :key="details.hairId">

          <span class="check"> 
            <img  class="allMan" :src="details.hairPicture" alt="" style=""/>
             <hr style="margin-left: 25%;">
            <h2  style="text-align: center;">{{ details.hairStyle }}</h2>
            <p id="wait" v-motion-slide-visible-once-buttom style="color: black;font-size: 12px;">{{ details.hairDetails != null ?  details.hairDetails.substring(0,details.hairDetails.length/2)+'.....': '.....' }}</p>
            <router-link :to="{name: 'Style', params: {id: details.hairId}}" style="text-decoration: none;" ><button id="here" >Click for more details</button></router-link>
          </span>
        </div>
      </div>
</div>

<h4 style="margin-top: -1.5%;">
    Enjoy excellent braiding services with a friendly and professional touch
    from our skilled stylists.
  </h4>

  <hr style="margin-left: 25%; margin-top: 2%;" />
  <!--This will be for the style component-->
    <router-link style="text-decoration: none;" :to="{name: 'Hairstyles'}">
        <span  id="RealKing" >
             <h4>Browse Our Full Collection</h4>
        </span>
    </router-link>
    
    <div  v-motion-slide-visible-once-bottom  v-if="comeeOn" id="catchEmAll" style="height: 400px;margin-top: 2%;">
      <div id="frontcover" style="height: 100%; width: 100%;display: flex; ">
         <div style="width: 10%; display: flex;align-items: center;justify-content: center;">
          <img @click="changeLeftLeft" id="leftleft" src="../img/icons8-left-arrow-50 (1).png" alt="">
         </div>
         <div style="width: 80%; display: flex; align-items: center;">
            <span   id="waitKid"  style="display: block;height: 60%;width: 100%;">
              <div :class="{swipefun: isannoying,  lookKid: notAnnoying}" style="display: flex;justify-content: center">
              <img  src="../img/icons8-quote-48.png" alt="">
              </div>
              <span :class="{swipefun: isannoying,  lookKid: notAnnoying}" style="display: block; margin-top: 3%;">
              <p   style="width: 100%;;height: 30px;font-weight: 700;font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 14px;">{{ justForReviwTho.commentReview }}</p>
              </span>
              <div :class="{swipefun: isannoying,  lookKid: notAnnoying}" style="display: flex; justify-content: center;  ">
                <img  style="width: 10px;height: 10px;" v-for="index in justForReviwTho.numberOfStars" :key="index" src="../img/icons8-star-50.png" alt="">
              </div>
              <h5 :class="{swipefun: isannoying,  lookKid: notAnnoying}" style="text-align: center;color: white; font-size: 16px;margin-top: .5%;">{{ justForReviwTho.firstName}} {{ justForReviwTho.lastName }}</h5>
           
            </span>
         </div>
         <div style="width: 10%;display: flex;align-items: center;justify-content: center;">
        <img @click="changeRightRight" id="rightright" src="../img/icons8-right-arrow-50 (1).png" alt="">
         </div>

    </div>
    </div>
    <div v-if="wontStart" v-motion-slide-visisble-once-bottom style="display: flex;justify-content: center;">
    <div style="margin-top: 2%;width: 100%;">
      <h3 style="font-weight: bold;font-size: 24px;text-align: center;color: #3e8547ec;">Gallery</h3>
      <h2 style="text-transform: uppercase;font-size: 32px;text-align: center;">View our Work</h2>
      <div style="display: flex;justify-content: center;">
      <span style="margin-top: 2%;display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
        <span v-show="jamesFailed"  @mouseenter="iLooked(index)" @mouseleave="iPeekedYou" class="allOfTheLight"  style="margin-left: 1%;margin-top: 1%;display: block; " v-for="(oneTime, index) in lookAtBlow" :key="oneTime.imageId"> 
    <img  @click="showBigTime(index)" :class="{idontKnow: numberInstead==index, otherSide: notNice}"  style="width: 300px;height: 300px;display: block;" :src="imageNick(oneTime.hairImage)" alt="">
        </span>
      </span>
    </div>
  
    </div>
    </div>
    <div  v-if="redStuff" style="margin-top: 4%;display: flex;justify-content: center;">
    
      <div class="niceRedStuff" style="width: 100%;height:900px;display: flex;justify-content: center;align-items: center;padding: 0px;position: relative">
        <span style="display: flex;height:100%;position: relative;width:100%;justify-content: space-between;width: 97%; ">
        <div class="cheesJer" style="height: 100%;" > <img v-if="this.numberToShow>0" class="backRock" style="height:100%;width: 100%;" :src="imageNick(lookAtBlow[this.numberToShow-1].hairImage)" alt="">
        <img @click="lastPic" class="checkMate" style="position: absolute; left: 1%;top: 50%;" src="../img/icons8-left-arrow-50 (1).png" alt=""> </div>
        <div class="cheesJer" style="height: 100%;margin-left: -8%;"> <img v-if="numberToShow!=lookAtBlow.length-1" class="backRock" style="height:100%;width: 100%;" :src="imageNick(lookAtBlow[this.numberToShow+1].hairImage)" alt="">
        <img class="checkMate" @click="nextPic" style="position: absolute; top: 50%;right: 0;left: 95%" src="../img/icons8-right-arrow-50 (1).png" alt="">
      <img @click="closeBig" class="checkMate" style="position: absolute;top: 3%;right: 0;left: 96%;" src="../img/icons8-close-30.png" alt=""> </div>
        <img :class="{holdUp: iwillWill}" style="display: block;height: 100%;border-radius: 2px;position: absolute;left: 27%;" :src="imageNick(lookAtBlow[this.numberToShow].hairImage)" alt="">

      </span>
    
      </div>
    </div>

    <hr style="width: 100%;margin-top: 3%;">


    <div id="eatAlot" style="margin-top: 2%; ">
      <span style="display: flex;border-right: 1px solid grey;width: 33%;align-items: center;justify-content: center;">
        <span style="display: block;">
        <img src="../img/icons8-address-80.png" alt="" style="display: inline-block;width: 50px;height: 50px;margin-left: 35%;margin-bottom: 4%;">
        <h6 style="text-transform: uppercase;font-size: 18px;font-style: oblique;margin-bottom:3%;text-align: center;">address</h6>
        <h5 style="font-size: 16px;">3530 Germantown Ave</h5>
        <h5 style="font-size: 16px;">Philadelphia, PA 19144</h5>
      </span>
      </span>
       <span style="display: flex;border-right:1px solid grey ;width: 33%;align-items: center;justify-content: center;">
        <span style="display: block;">
        <img src="../img/icons8-time-100.png"  alt="" style="display: inline-block;width: 50px;height: 50px;margin-left: 35%;margin-bottom: 4%;">
        <h6 style="text-transform: uppercase;font-size: 18px;font-style: oblique;margin-bottom:3%;text-align: center;">Hours Opened</h6>
        <h5 style="font-size: 16px;">Mon-Thurs: 8am-8pm</h5>
        <h5 style="font-size: 16px;">Fri-Sat: 8am-9pm </h5>
        <h5 style="font-size: 16px;">Sun: Closed</h5>
      </span>
       </span> 
      <span style="display: block;border-right:">
        <div>
          <span style="display: flex;margin-left: 1%;margin-top: 1%;">
            <img style="width: 25px;height: 25px;" src="../img/long-hair-woman-with-pony-logo-silhouette-vector-48961154-removebg-preview.png" alt="">
            <span style="display: block;margin-left: 2%;">
              <h5>Maty African Hair Braiding</h5>
              <p style="width: 50%; color: black; font-size: 8px;margin-left: 45%;">Your One-Stop Shop</p>
            </span>
          </span>
        </div>
          <span style="display: flex;height: 90%;align-items: center;justify-content: center;">
          <div style="width: 70%;height: 60%;">
          <h5 style="width: 80%; margin-top: 2%;">Maty African Hair Braiding in Philadelphia is a hair salon for braids, weaves, and so much more.</h5>
          <span style="display: flex;margin-top: 4%; width: 50%;justify-content: space-evenly;align-items: center;">
          <a href="https://www.instagram.com/matys_african_hair_braiding/" target="_blank"><img class="iconF"  src="../img/icons8-instagram-50.png" alt=""></a>
          <a href="tel:+2152210553"><img class="iconF"  src="../img/icons8-phone-number-50.png" alt=""></a> 
          <a href="mailto:bintadiallo6@yahoo.com"><img class="iconF"  src="../img/icons8-email-50.png" alt=""></a>
          </span>
          <p style="color: black;font-size: 8px;margin-top: 5%;text-align: left;">Maty African Hair Braiding © {{ new Date( Date.now()).getFullYear() }}. All Rights Reserved. Designed by Alioune Diasse</p>
        </div>
      </span>
        
        
      </span>

    </div>
  </span>
</template>

<script>
import serviceStuff from '@/Service/serviceStuff';
import axios from 'axios';
export default {
  
  data() {
    return {
      redStuff: false,
      numberToShow: 0,
      jamesFailed: true,
      thatAClick: false,
      numberTime: 0,
    youOut: true,
      iControlYou: -1,
      notNice: true,
      niceGuy: false,
      numberInstead: -1,
      notAnnoying: true,
      isannoying: false,
      hair:{},
      gotYou: false,
      notYet: true,
      second: true,
      third: true,
      listReview: [],
      numberForNext: 0,
      comeeOn: false,
      wontStart: false,
      allHope: [],
      allThat : "100px",
  
    


      pictures: [
        "https://i.pinimg.com/564x/a7/a2/64/a7a2642af93148946a82709b0d81f3c5.jpg",
        "https://i.pinimg.com/736x/93/21/4a/93214a36077a77df0b0f0b6166091c61.jpg",
        "https://i.pinimg.com/originals/9d/ac/71/9dac715c906c12d13dc837c6e5b7880b.jpg",
        "https://i.pinimg.com/564x/bf/eb/e1/bfebe1f2777f3effd6c19b861278a4ad.jpg",
      ],
    };
  },

  methods: {
    nextPic(){
      if(this.numberToShow!=this.lookAtBlow.length-1){
        this.numberToShow+=1
      }
    },
    lastPic(){
      if(this.numberToShow!=0){
        this.numberToShow-=1
      }
    },

    closeBig(){
      this.redStuff = false
      this.jamesFailed = true
    },

    showBigTime(numberCake){
      this.jamesFailed = false,
      this.numberToShow = numberCake
      this.redStuff = true
    },
    sendToStuff(){
        this.$router.push('/hairstyle/'+this.lookAtBlow[this.numberTime].hairId)
    },
    rightTurn(){
      if(this.numberTime!=this.lookAtBlow.length-1){
        this.numberTime+=1
      }

    },
    leftTurn(){
      if(this.numberTime!=0){
        this.numberTime-=1
      }
    },
   
    iLooked(number){
      this.numberInstead = number
      this.notNice = false
    },

    iPeekedYou(){
      this.numberInstead = -1
      this.notNice = true
    },
    imageNick(word){
      return "https://drive.google.com/thumbnail?id="+word.split("/")[5]+"&sz=w800"
    },
    img(){
      serviceStuff.imagGallery().then((e)=>{
        this.wontStart = true
        this.allHope = e.data
      })
    },
    getHair(){
      serviceStuff.getstyle().then((e)=>{
        this.hair = e.data
        this.gotYou = true
      })
    },
    changedThem(){ 
        this.notYet = false        
    },
    getReview(){
      axios.get('http://localhost:8080/getreview').then((e)=>{
          this.listReview = e.data
          this.comeeOn = true
      })
    },

   
    changeLeftLeft(){
      if(this.numberForNext!=0){
        
        this.isannoying =! this.isannoying
        
        this.numberForNext-=1;

      } 
    },
    changeRightRight(){

     if(this.listReview.length>this.numberForNext){
      
      this.isannoying =! this.isannoying
      this.numberForNext+=1;
    
     }
    },
    changeeverything(){
      if(this.isannoying = true){
        this.isannoying = false
      }
    }

    
  },
  computed:{

    justFOURdisplay(){
      let giveme = [];
      return giveme = [this.hair[0],this.hair[1], this.hair[2], this.hair[7]]
    },

    justForReviwTho(){
      let listKid = {};
      return listKid = this.listReview.filter((e)=>{
        if(e.numberOfStars==5){
          return e
        }
      })[this.numberForNext];
    },
    lookAtBlow(){
      let tonyWhoTan = []
      return tonyWhoTan =this.allHope.slice(0,8)
    },

 
  

},
  created(){
    this.img()
    this.getHair();
    this.getReview();
    
  }
};
</script>

<style scoped>
.cheesJer{
  background-color:rgba(0, 0, 0, 0.904) ;
  border-radius: 3%;

}
.backRock{
  border-radius: 3%;
  opacity: .07;
}

.checkMate:hover{
  border: 1px solid white;
  background: lightgray;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
}


.soBig:hover{
  transform: scale(1.2);
  transition: ease-out 1s;
  cursor: pointer;
}
.niceRedStuff{
  border-radius: 3px;
  opacity: 1;
}

.left:hover{
  cursor: pointer;
}


.iLike{
  background-color: lightgray;
  
}

.idontKnow{
  opacity: .6;
  
}

.allOfTheLight:hover{
transform: scale(1.1);
cursor: pointer;
background-color: black;
height: 300px;
width: 300px;
transition:1s ease-in-out ;

}

.lookKid{
  animation: kidMan .5s ;
  
}

@keyframes kidMan {
  from{
    margin-right: -10%;
  }

  to{
    margin-right: 0px;
  }
  
}

.swipefun{
  animation: funtest .5s ease-in-out;
}

@keyframes funtest {
  from{
    margin-left: -10%;
  }

  to{
    margin-left: 0px;
  }
  
}

#waitKid{
  animation: oneSecond 2s ease-in ;
}

@keyframes oneSecond {

  from{
    margin-left: -1800px;
  }

  to{
    margin-left: 0px;
  }
  
}


#rightright:hover{
  cursor: pointer;
}


#leftleft:hover{
  cursor: pointer;
}


#frontcover{
  background-color: #000000bd;
}


#catchEmAll{
  background: url('../img/a8f1195df039827af94a9efbc4b84f73.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  zoom: 1.1;
  image-rendering: -webkit-optimize-contrast;
}



#here{
  border: 1px solid white;
  display: block;
  margin-top: 2%;
  margin-left: 28%; 
  padding: 10px;
  border-radius: 8px;
  cursor:pointer;
  background-color: #3e8547ec;
  color: white;
}


#here:hover{
  background-color:#3e8547ec;
  transform: scale(1.1);
  transition:.5s ease-in;

}

.iconF{
  width: 25px;height: 25px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
}



/* #justForLook{
    width: 50%;
    height: 50px;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    

} */

.check{
  display: block;
   border: 2px solid #3e8547ec;
   width: 95%;
   border-radius: 5px;
   padding: 3px;
}



p{
    color: white;
    display: grid;
    column-count: 1;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
}






#eatAlot{
    display: flex;
    height: 250px;
}



#RealKing {
  margin-top: 0.7%;
  border: 3px solid black;
  border-radius: 5px;
  display: block;
  width: 30%;
  margin-left: 35%;
  color: black;
  margin-bottom: 10px;
}


#RealKing:hover{
    background-color: #3e8547ec;
    color: white;
}

h4 {
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  font-style: italic;
}

.allMan {
  height: 300px;
  width: 100%;
 
}


/*  */
section {
  /* background-color: black; */
  /* display: grid; */
  /* padding: 15px;
  column-gap: 25px;
  display: flex; */
}

hr {
  display: inline-flex;
  justify-items: center;
  width: 50%;
  background-color: black;
  /* border: 5px solid grey; */
}

#photofun {
  width: 100%;
  height: 310px;
  border-radius: 5px;
}

h3{
    font-size: 30px;
    font-style: italic; 
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
    font-weight: bolder;

}

</style>
