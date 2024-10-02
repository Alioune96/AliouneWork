<template>
    <div  style="height: 1000px;">
      <div id="backKid" >
         <div id="catchCover">
            <div id="boxLog" >
               <h2 style="font-size: 35px; font-weight: 500;text-align: center;">Welcome!</h2>
               <h3 style="text-align: center;font-size: 25px;margin-top: .5%;">Sign In</h3>
               <div style="display: flex;width: 100%;height: 75%;justify-content: center;margin-top: 3%;">
               <span style="width: 35%;border: 1px solid lightgray; display: block;border-radius: 5px;">
                  <span style="display: flex;justify-content: center;margin-top: 1%;">
                  <img style="display: block;width: 85px;height: 85px;" src="../img/long-hair-woman-with-pony-logo-silhouette-vector-48961154-removebg-preview.png" >
                  </span>
                  <span style="display: flex;justify-content: center;margin-top: 20%;">
                     <span style="display: block;width: 70%;"> 
                        <input v-model="this.userLog" class="forPlace" style="border-radius: 3px;border: 2px solid lightgray;" type="text" id="" placeholder="Phone number, username, or email">
                        <input v-model="this.tickMan" class="forPlace" style="margin-top: 4%;border-radius: 3px;border: 2px solid lightgray;" type="password" id="" placeholder="Password">
                        <button @click="here" class="buttonLog">Log in</button>
                        <span style="margin-top: 3%;display: flex;width: 100%;align-items: center;justify-content: space-evenly;">
                           <hr style="width: 40%;height: 0%;">
                           <p>OR</p>
                           <hr style="width: 40%;height: 0%;">
                        </span>
                        <p class="forgot" @click="iForgetDumbass" style="text-align: center; color: darkblue; ">Forgot password?</p>
                        
                        <p style="padding: 10px;border: 1px solid black;margin-top: 15%;">Don't have an account? <em class="bum" @click="idontHaveOne">Sign Up</em></p> 
                      
                     </span>
                  </span>
               </span>
               </div>
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
         userLog: '',
         tickMan: '',
         postHere: {},
         

      }
   },
   methods: {
      here(){
         let something = {
            userName: this.userLog,
            passWord: this.tickMan
         }
      serviceStuff.logOne(something).then((e)=>{
         this.postHere = e.data
         this.$store.commit("SET_KING", this.postHere)
         this.$router.push('/')
       
      })
      },
      iForgetDumbass(){
         this.$store.commit("LOG_OUT")
         this.$router.push('/')
      },
      idontHaveOne(){
         this.$router.push('/SignUp')
      }
   },


}
</script>
<style scoped>

#backKid{
   background-image: url('https://lh5.googleusercontent.com/p/AF1QipPoioV_m40aOKBBQ6kEzZe43_W6sHKUZGKwq9Ae=s1024');
   background-position: center;
   background-repeat: no-repeat;
   border: 1px solid black;
   background-size: cover;
   height: 100%;
   width: 100%;
   margin-top: 2%;
}

#catchCover{
   background-color: rgba(0, 0, 0, 0.274);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}

.imG{
   width: 35px;
   height: 35px;
}

#boxLog{
width: 65%;
height: 80%;
border: 2px solid lightgray;
border-radius: 10px;
background: white;
}

.forPlace::placeholder{
   font-size: 12px;
   
}

.forPlace{
   width: 100%;
}

.buttonLog{
   padding: 5px;width: 100%;color: white;background-color: #3e8548b2;border: 1px solid white;border-radius: 5px;margin-top: 5%;
}

.buttonLog:hover{
   cursor: pointer;
   background: darkgreen;
   transform: scale(1.04);
   transition: .5s ease-out;
}

.forgot{
   font-size: 12px;
   margin-top: 3%;
}

.forgot:hover{
   cursor: pointer;
}

.bum{
   font-style: normal;
   color: rgba(12, 12, 214, 0.705);
   font-weight: bold;
}

.bum:hover{
   cursor: pointer;
}
</style>