<template>

   <div>
        <h1>Make Your Reservation Today!</h1>
        <div id="you">
<div id="little">
<h2 style="text-align: center; color: white;">Schedule Your Appointment This Us!</h2>
<p>Making your reservation with us is an easy an filling out our form. Our world renowned stylist are here to help. You can choose from our selection of hairstyles,and also provide us with any special accommodation.
     By making your reservation online, you not only book you're reservation, but you rack up on BradyPoints! Racking up 1000 points provide you with an free braiding session! </p>
        <ul>
            <li>Open 6 days a week</li>
            <li>Walk-in welcomed</li>
            <li>Top notch service</li>
        </ul>
        <div id="form">
            <form action="Get" method="post">
                <h4 style="color: white;">Schedule your Appointment</h4>
                <div style="border: 1px solid black; height: 70px; width: 270px;">
                <label  for="">Date: </label>
                <input  type="date" name="" id=""><br>
                </div>
                <div style="border: 1px solid black; width: 270px; height: 70px;">
                <label for="">Time: </label>
                <input type="time" name="" id=""><br>
                 </div>
                 <div style="border: 1px solid black;height: 70px; width: 270px; ">
                <label  for="">Style: </label>
                <select  name="" id="hairStyle">
                    <option value="macro">Micro</option>
                    <option value="">lorem</option>
                    <option value="macro">lolo</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                    <option value="">lorem</option>
                </select> <br>
                </div>
                <div style="border: 1px solid black; width: 270px; height: 280px; ">
                    <h6 style="display: inline; font-size: 16px; color: white;margin-left: 22%;">Choose your Braider </h6><br>
                    <label   for="">Stylist:</label>
                    <input  type="radio" name="" id=""><br>
                    <label  for="">Stylist:</label>
                    <input type="radio" name="" id=""><br>
                    <label for="" >Stylist:</label>
                    <input type="radio" name="" id="" value=""><br>
                    <label >Stylist:</label>
                    <input type="radio" name="" id=""><br>
                </div>
                <span style="margin-left: 26%;">
                <button>Click To Submit!</button>
            </span>
            </form>
        </div>
        
    </div>
        <!-- <h4 style="color: white;">Schedule your Appointment</h4> -->
        
        </div>
    </div>
</template>

<script>
import FooterP from './FooterP.vue';
import HeaderVue from './Header.vue'
export default {

    components: {
        HeaderVue,
        FooterP
    },


   
}
</script>

<style scoped>


#secondForm{
    border: 1px solid black;
    width: 200px;
}

#smalldiv{
    border: 1px solid white;
    text-align: center;
    width: 400px;
    height: 50px;

}





#form{
    border: 1px solid black;
    height: 800px;
    width: 600px;
  
}



select{
    width: 118px;
}

textarea{
    height: 100%;  
  resize: none;
}



#little{
    border: 1px solid black;
    width: 700px;
    height: 90%;
    padding: 0px;
    
    
}


h4{
    font-size: 28px;
    display: flex;
    justify-content: center;
    width: 70%;
    margin-left: 18%;
}

ul{
    /* margin-left: 33%; */
    /* border: 1px solid black; */
    width: 200px;
}

li{
    margin-bottom: 10px;
    color: white;
}

div{
    background-color:  #3da3d3;
    height: 1600px;
 
}


*{
    margin: 25px;
}
#you{

 
    height: 1500px;



}




h1{
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
    text-align: center;
    color: white;
}

p{
    color: white;
    margin-bottom:0px ;
}

label{
    color: white;
}

button{
    padding: 10px;
    background: #0a6996de;
    border: none;
    border-radius: 15px ;
    color: white;
    border-color: none;
    text-decoration: none;
    font-size: 25px;
}



</style>