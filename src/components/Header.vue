<template>
  <div style="height: 80px;display: flex;align-items: center;">

    <div id="two" style="display: flex; align-items: center; justify-content: space-between;">
      <span style="margin-left: 3%;" >
      <router-link :to="{name: 'Home'}"><img style="border: 2px solid black;border-radius: 40px;padding: 5px;width: 65px;height: 65px;margin-top: 2%" src="../img/long-hair-woman-with-pony-logo-silhouette-vector-48961154-removebg-preview.png" alt=""></router-link> 
      </span>

      
      <span style="display: flex; width: 40%;justify-content: space-evenly;align-items: center;height: 70%; margin-left: 17%;">
          <router-link style="text-decoration: none;color: black;" :to = "{name: 'Hairstyles'}">Service        
          </router-link>
          <router-link style="text-decoration: none;color: black;" :to="{name: 'Review'}">Reviews</router-link>
          <router-link :to="{name: 'Gallery'}" style="color: black;text-decoration: none">Gallery</router-link>
          <router-link id="wie" style="font-weight: 300;text-decoration: none;padding: 8px;border-radius: 6px;color: white;background-color:#599160d3;" :to="{name: 'Reservation'}">Schedule Appointment</router-link>
          
      </span>
      <span style="display: flex; width: 25%;justify-content: space-evenly;align-items: center;">
    <router-link v-if="this.$store.state.user.userId>0" v-motion-slide-once-top :to="{name:'User', params: {id: this.$store.state.user.userId}}" style="padding: 10px; border-radius: 6px;height: 50%;font-weight: 530;width: 20%;text-align: center;font-size: 14px;color: white;background-color: grey;text-decoration: none;">Portal</router-link>
      <h6 @click="logGuy" v-show="this.$store.state.user.userId>0" style="padding: 10px; border-radius: 6px;height: 50%;font-weight: 530;width: 20%;text-align: center;font-size: 14px" class="chaseKid" >Log Out</h6>
     <router-link class="hoverone" v-if="this.$store.state.user.userId == 0" :to="{name: 'Sign Up'}" style=" padding: 10px; border-radius: 6px;height: 50%;font-size: 14px;font-weight: 300;text-decoration: none;">Sign Up</router-link> 
    <router-link v-show="this.$store.state.user.userId == 0" style="text-decoration: none; color: black" :to="{name: 'Login'}"><h6  class="hoverone" style="border: none;padding: 10px;height: 50%;border-radius: 6px;font-size: 14px;;font-weight: 600;background-color: #599160d3;color: white;">Log In</h6></router-link>

    </span>
      
    </div>

 
  </div>

</template>

<script>



export default {
 
  data() {
    return {
      img: "https://png.pngtree.com/png-clipart/20230322/original/pngtree-cartoon-hair-braids-png-image_8999454.png",
      numberToShow : false
    };

    
  },
  methods: {
    logGuy(){
      this.$store.commit("LOG_OUT", this.$store.state.user);
      this.$router.go(0)
    }
  }
  



};
</script>



<style scoped>

.catchKid:hover{
  background-color:white ;

}


#justforchess{
  border: 1px solid black;
}



#chill{
    width: 70px;
}


#First {
  /* width: 1200px; */
  height: 60%;
  display: flex;
  width: 100%;
  padding: 25px;
  background-color: #146e97a9;
  justify-content: space-evenly;
}

#two {
  width: 100%;
  background-color: white;
  /* position:  */
  /* width: 1200px; */
}



h2 {
  font-size: 15px;
  display: block;
  color: white;
}

li {
  list-style: none;
    color: black;

    display: inline;
    
}



ul {
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  
}

#small{
    background-color: gray;
}

hr{
    width: 25px;
    height: 20px;

}
/* .router-link-active:hover{
    background-color: darkblue;
    color: white;

} */

.router-link-active{
    /* background-color: brown; */
    /* color: white; */
}

.router-link-active .catchKid:hover{
  background-color: aliceblue;
}
#menuI{
  border: 1px solid black;
    width: 40px;

}

#yo:hover{
    background-color: rgba(0, 0, 0, .01)
}
span{
  padding: 0px;
  margin: 0px;
  display: flex;
  /* margin-right: 30%; */
  /* justify-self: 1000px; */

  /* border: 1px solid black; */
 
}
#menuI{
  margin-bottom: 10px;
  padding: 10px;
  

  
  
}

#Smallcase{
  width: 30px;
  display: flex;
justify-self: stretch;
}

.hover{
  color: black;
}

.hoverone:hover{
  background-color: #599160d3;
  color: white;
  cursor: pointer;
}

.chaseKid{
  background: #599160d3;
  color: white;
}

.chaseKid:hover{
  color: white;
  cursor: pointer;
transform: scale(1.03);
transition: .5s ease-out;
}

</style>
