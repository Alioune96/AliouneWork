<template>
       
    <div >
        <div style=" height: 540px;display: flex;position: relative" class="catch" >
           <img style="width: 400px;height: 100%;position: absolute;top: 0;left: 0;border-radius: 25px" src="../img/sideGirl.jpg" alt="">
           <img style="width: 400px;height: 100%;position: absolute;top: 0;left:26%;" src="../img/fromBack.jpg" alt="">
           <img src="../img/secondTest.jpg" style="position: absolute;width: 400px;top: 0;height: 100%;left: 48%;" alt="">
           <img src="../img/firstOp.jpg" style="position: absolute;width: 400px;height: 100%;left: 72.6%;top: 0;border-radius: 3px;" alt="">
        </div>
        <div class="wavesCuz"></div>

        <div>
        <h1 style="text-align: center; margin-bottom: 1%;margin-top: 3%;font-size: 45px;">Our Available Hairstyles</h1>
        <div style="display: flex;justify-content: center; width: 100%;">
        <p>At Maty African Hair Braiding&trade;, we have a collection of professional braiders who are masters in their craft. From Senegalese twists to sew-in braids, our stylists have you covered!
        <em style="font-weight: bold;">Appointments are available via phone or online. Walk-ins are welcome. For a FREE consultation, call us at 215-221-0553.</em> </p>
        </div>
    </div> 
        <div id="makethem">
            
        <div  v-for="one in niceHair" :key="one.hairId" style="padding: 3%;">
            <div  v-motion-slide-visible-once-bottom   :class="{thisgotyou: one.hairId%2==0, notYou: one.hairId%2!=0 }" style="margin-top: 2%;width: 100%;  display: flex; justify-content: space-between;border-radius: 10px;background-color: gainsboro;padding: 0%; height: 500px; ">
                <span class="imageSpan" >
                    <img :class="{imagee: one.hairId%2==0, oneImage: one.hairId%2!==0}" :src="one.hairPicture" alt="">
                </span>
                <span style="display: flex; width: 72%; align-items: center;margin-left: 1%;">
                    <span style="display: flex;justify-content: center;align-items: center;">
                        <div style="width: 100%; ">
                        <h2 style="direction: ltr;" >{{ one.hairStyle }}</h2>
                        <h3 style="direction: ltr; ">{{one.hairDetails }}</h3>
                        <div style="display: flex;justify-content: center;margin-top: 3%;">
                        <span style="display: flex; width: 50%;justify-content: space-evenly;">
                            <button @click="pushToReserveKid(one.hairId)" class="different">Reserve this Style</button>
                          <router-link :to="{name: 'Style', params: { id: one.hairId}}"><button  class="two">Click to View More Details </button></router-link>
                        </span>
                    </div>
                    </div>
                    </span>
                </span>
            </div>





           
            
            </div>
         </div>
          
     
        
    </div>
   
    
</template>

<script>
import serviceStuff from '@/Service/serviceStuff';



export default {
    data(){
        return{
            listen: [],
            checkKid: false,
        }
    },

    methods:{
        getHair(){
            serviceStuff.getstyle().then((e)=>{
                this.listen = e.data
                
            })
        },
        getback(){
        this.$router.push('/')
        },
        letCheck(){
            this.checkKid =true
        },
        pushToReserveKid(number){
            this.$router.push({name: 'Reservation', query:{search: number }})
        }

    },

   
    computed:{
        niceHair(){
            let oneThatDontBlow = this.listen;
            return oneThatDontBlow
         
        }
    },
    created(){
        this.getHair();

    },


}
</script>

<style scoped>

body{
    padding: 0%;
}
.wavesCuz{
    position: relative;
    background-image: linear-gradient(315deg, hsla(161,51%,47%,0.1)0, rgba(11, 173, 100, 0) 0%);
    margin-bottom: 2%;
}

.wavesCuz::before{
    content: "";
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    height: 235px;
    background: url('../img/wave3.png');
    background-size: cover;
    margin-bottom: .4%;
    background-repeat: no-repeat

}


/* #justwave{
    position: relative;  
background-image: linear-gradient(315deg,
                        hsla(161, 51%, 47%, 0.1) 0, rgba(11, 173, 100, 0.849) 0%);
};

#justwave::before{
content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 245px;
    background-image:url('../img/wave3.png');
  background-size: cover;

} */



.catch{
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position:  center;
    image-rendering: optimizeQuality;
    display: flex;
    align-items: flex-end;
   
}

    .notYou{
    
    display: flex;
    direction: rtl;
    
    }


.different{
    padding: 10px;
    border-radius: 3px;
    background-color:#3e8548b2 ;
}

.two{
    padding: 10px;
    border-radius: 3px;
    background-color:#3e8548b2 ;
    background-color: lightgrey;
}

.two:hover{
    cursor: pointer;
    transition: transform 1.1s ease;
    background-color: lightgrey;
    transform: scale(1.1);
}

.different:hover{
    background-color: #3e8548b2;
    transition: transform 1.1s ease;
    transform: scale(1.1);
    color: white;
    cursor: pointer;
}


.imageSpan{
    display: flex; 
    width: 25%;
    height: 100%;
     justify-content: center;
     align-items: center;
     


}



#myboxfriend{
    display: block;
    width: 200px;


}

#makethem{
    margin-left: 3%;
    padding: 20px;
    width: 92%;
    /* height: 1000px; */
  
}



div{
    /* border: 1px solid black; */
    padding: 3px;
}

p{
    padding: 10px;
    width: 77%;
    margin-left: 1%;
}

.imagee{
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}

.oneImage{
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
}

button{
    padding: 8px;
    border-radius: 10px;
    background-color:#0a6996de ;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: 15px;
    border-color: beige;
}

button:hover{
    background-color: lightskyblue;
    color: white;
}

a{
    text-decoration: none;
    color: white;
}



</style>