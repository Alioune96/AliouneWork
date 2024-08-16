<template>
  <h4>
    Enjoy top-end hair braiding services with a friendly and professional touch
    from our skilled stylists.
  </h4>

  <section>
        <div v-for="(pic, index) in pictures" :key="index" class="listEnUp">
             <img class="allMan" :src="pic" alt="" />
        </div>
  </section>

  <hr style="margin-left: 25%" />
  <!--This will be for the style component-->
    <router-link  :to="{name: 'Hairstyles'}">
        <span  id="RealKing">
             <h4>Browse Our Full Collection</h4>
        </span>
    </router-link>
    <div id="eatAlot">
        
        <span id="one"><h3>Contact Us</h3>
      <p>Maty Hair Braiding</p><p>3530 Germantown Ave</p> <p>Philadelphia,</p> <p>PA</p> <p>19144</p> <p>215-930-4422</p>
   </span>
     
        <span id="two"><h3>Map</h3></span>
        <span id="three"><h3 style="text-align: center;">Hours</h3> <p>Monday: 9AM-10PM</p> <p>Tuesday: 9AM-10PM</p>
        <p>Wednesday: 8AM-7PM</p> <p>Thursday: 8PM-9PM</p> <p>Friday: 9AM-10PM</p> <p>Saturday:10AM-10PM </p> <p>Sunday: Closed</p></span>
      

    </div>
</template>

<script>
export default {
  data() {
    return {
      pictures: [
        "https://i.pinimg.com/564x/a7/a2/64/a7a2642af93148946a82709b0d81f3c5.jpg",
        "https://i.pinimg.com/736x/93/21/4a/93214a36077a77df0b0f0b6166091c61.jpg",
        "https://i.pinimg.com/originals/9d/ac/71/9dac715c906c12d13dc837c6e5b7880b.jpg",
        "https://i.pinimg.com/564x/bf/eb/e1/bfebe1f2777f3effd6c19b861278a4ad.jpg",
      ],
    };
  },
};
</script>

<style scoped>



/* #justForLook{
    width: 50%;
    height: 50px;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    

} */

ul{
    display: inline-flex;
    list-style: none; 
    border: 1px solid black; 
    width: 400px; 
    justify-content: space-evenly;
}


p{
    color: white;
    display: grid;
    column-count: 1;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
}


#three{
    background-color: #0a6996de;
    border: 1px solid black;
    width: 33%;
    height: 246px;
}



#one{
    text-align: center;
    /* align-items: center; */
    column-count: 1;
    height: 246px;
    width: 34%;
    border: 1px solid black;
    background-color: #0a6996de;
}

#two{
    width: 33%;
    height: 246px;
    display: grid;
    border: 1px solid black;
}




#eatAlot{
    display: flex;
    margin: 0px;
    border: 2px solid black;
    height: 250px;
}



#RealKing {
  border: 10px solid black;
  display: block;
  width: 30%;
  margin-left: 35%;
  color: black;
  margin-bottom: 10px;
}


#RealKing:hover{
    background-color: #0a6996de;
    color: white;
}

h4 {
    margin: 0px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
}

.allMan {
  height: 300px;
  width: 100%;
  border: 5px solid black;
}

.listEnUp {
  width: 55%;
}
/*  */
section {
  /* background-color: black; */
  /* display: grid; */
  padding: 15px;
  column-count: 2;
  column-gap: 25px;
  display: flex;
}

hr {
  display: inline-flex;
  justify-items: center;
  width: 50%;
  background-color: black;
  /* border: 5px solid grey; */
}

div {
  height: 300px;
  width: 100%;
  border: 5px solid black;
}

h3{
    font-size: 30px;
    font-style: italic; 
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
    font-weight: bolder;

}

</style>
