<template>
       

        <div>
        <h1 style="text-align: center; margin-bottom: 1%;margin-top: 1%;">Check Out Our Wonderful Collection of Available Hairstyles </h1>
        <p>Here at Maty Hair Braiding, we have an collection of amazing braider who are masters in their craft. Whether it from Senegalese Twist or Micro, 
        We have some of the best braiders who are tasked with providing you with your desired outcome. Below are available some of the available Styles! 
        <em style="font-weight: bold;">Appointments are available. For FREE consultations, call us at 215-221-0553</em> </p>
        <div id="makethem">
            
        <div id="oneofthem" v-for="(one, index) in niceHair" :key="index">
            <div id="image">
            <img :src="one.img" alt="">
            </div>
            <h2 style="text-align: center;">{{ one.hairStyle }}</h2>
            <h3 style="text-align: center;">${{ one.price }}</h3>
           <button @click="getback" style="margin-left: 23%; margin-top: 4%;" >Click for more details {{ one.hairId }}</button>
            </div>
         </div>
         
     
        
    </div>
   
    
</template>

<script>
import serviceStuff from '@/router/serviceStuff';
export default {
    

    data(){
        return{
            listen: [],
            numberId: Number
        }
    },
   
    computed:{
        niceHair(){
            
            serviceStuff.getstyle().then((e)=>{
             this.listen = e.data
            });
          

            return this.listen
        }
    },
    methods:{
        getback(){

            this.$router.push('/')
        }
    }

}
</script>

<style scoped>






#image{
    display: flex; 
    align-items:center;
    justify-content: center; 
}


#myboxfriend{
    display: block;
    width: 200px;


}

#makethem{
    margin-left: 3%;
    padding: 25px;
    width: 92%;
    height: 1000px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
}

#oneofthem{
    width: 320px;
    height: 320px;
    /* border: 1px solid black; */
    border-radius: 10px;
    /* display:inline-block; */


}

div{
    /* border: 1px solid black; */
    padding: 3px;
}

p{
    margin-bottom: 2%;
    border: 1px solid black;
    padding: 10px;
    width: 97%;
    margin-left: 1%;
}


img{
    
    width: 250px;
    height: 250px;
    border: 2px solid black;
    border-radius:20px ;

}

button{
    padding: 10px;
    border-radius: 10px;
    background-color:#0a6996de ;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: 17px;
    border-color: beige;
}

a{
    text-decoration: none;
    color: white;
}



</style>