<template>
   
    <div id="two">
      
      <nav>
        <ul>
          <img style="display: flex;margin-right: 70%; position:relative"  id="Smallcase" src="C:\Users\Student\Desktop\matyWithVue\vue-for-mom\img\icons8-dropdown-100.png" alt="">

          <!--This is for router-->
          <router-link :to="{name: 'home'}" style="border-top: 1px solid white; border-bottom: 1px solid white; padding: 0px;text-decoration: none;">Home</router-link>
     
          <router-link style="text-decoration: none;color: white;"  @mouseover="notreal=true" @mouseleave="notreal = false" :to = "{name: 'Hairstyles'}">Style
          
          <!-- <span v-show="notreal" style="background-color: green;" id="justForcheese" >
            <ul style="display: block;">
              <li style="display: block;">sad</li>
              <li style="display: block;">adas</li>
              <li style="display: block;">sdas</li>
            </ul>
          </span> -->
          </router-link>
        
          
          <router-link style="text-decoration: none;" to = '#'>Contact</router-link>
          <router-link style="text-decoration: none; color: white;" :to="{name: 'Reservation'}">Reservation</router-link>
          


        </ul>
      
        
      </nav>
      
    </div>

    <div id="First"  v-show:="this.isOn == true">
        <span style="display: flex; width: 1200px;margin-left: 35%; justify-content: space-between;">
        <h1>Maty African Hair Braiding</h1>
         <h2>
        Braiding for over 20 years! <em style="color:#3e55a1;font-weight: bold;">Stylist in all hairstyle</em><br />
        <b style="font-weight: bold;">215-221-0553</b>
      </h2>
    </span>
    </div>
    
    <div id="listenUp"></div>

</template>

<script>



export default {

  data(){
    return{
      notreal: false,
    }
  },



  props:{
    answer: Boolean
  },

  computed:{

  },
 

  data() {
    return {
    /**Boolean for menu */
      oneorOther: false,  
      img: "https://png.pngtree.com/png-clipart/20230322/original/pngtree-cartoon-hair-braids-png-image_8999454.png",
      isOn: this.answer
    };
  },

  methods:{
    showDrop(){
        if(this.oneorOther==false){
            this.oneorOther = true
        }else{
            this.oneorOther = false
        }
    }
  }

};
</script>
<style scoped>
#justforchess{
  border: 1px solid black;
}



#chill{
    width: 70px;
}


#First {
  /* width: 1200px; */
  display: flex;
  width: 100%;
  padding: 25px;
  background-color: #3da3d3;
  justify-content: space-evenly;
}

#two {
    height: 50px;
  width: 100%;
  background-color: #0a6996de;
  border: 1px solid black;
  /* position:  */
  /* width: 1200px; */
}

h1 {
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
    font-weight: 400;
    color: white;
  font-size: 40px;
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

li:hover{
    color: black;
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
    color: white;
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


</style>
