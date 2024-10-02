<template>
    <div v-if="holdOn && manThatSuck" :class="{whole: firstOne, secondOne: not}"  >
        <div id="smallChild" style="width: 100%;height: 30%;border: 1px solid black;margin-top: 2%;">
            <span id="backIsFun" style="display: flex;width: 100%;justify-content: center;align-items: center;height: 100%;">
            <span v-if="this.$store.state.user.roles!=''" style="margin-top: 2%;display: block;">
                <h3  style="text-align: center;font-size: 38px;color: white;">Welcome Back, {{ this.$store.state.user.firstName }}!</h3>
                <h5 style="text-align: center;font-weight: bold;color: white;">Schedule an appointment below.<br>For your appointment history or a hairstyle recommendation, use the buttons.</h5>
                <span style="display: flex; width: 100%; justify-content: space-evenly;margin-top: 4%;">
                   <a href="#lookOne"><button @click="damnYou" id="jjWatt">History</button></a>
                  <button @click="closeYou" id="meanJJ" >Recommendation</button>
                </span>
            </span>
            <h3 v-else style="font-size: 40px;color: white;">Welcome!</h3>
        </span>
        </div>
        <span style="display: flex;justify-content: center;margin-top: 2%; width: 100%;">
        <hr style="width: 70%;">
        </span>
        <span style="display: flex;justify-content: center;">
        <div style="display: flex;justify-content: space-between;margin-top: 2%;width: 70%;">
            <span style="display: flex; width: 45%;padding: 3px;">
                <span style="display: block; height: 60%;">
                <h3>Contact Us</h3>
                <h5 v-if="this.$store.state.user.userId == 0">Log in to your account to send custom message to our team, or send a general email to Maty African Hair braiding.</h5>
                <span style="display: flex;align-items: center;">
                    <span style="margin-top:6% ; width: 45%; display: block;margin-top: 9%; width: 75%;">
                    
                        <h3 style="font-size: 20px;">Location</h3>
                    <span style="display: flex; justify-content: space-around;margin-top: 5%;width: 70%">
                        <img src="../img/icons8-address-80.png" alt="" style="width: 30px; height: 30px;">
                        <span style="width:60%;display: block;">
                            <h3>3530 Germantown Ave</h3>
                            <h3>Philadelphia, PA 19140</h3>
                            
                        </span>
                    </span>
                    <span style="display: flex; border-radius: 5px;margin-top: 5%;justify-content: space-around;width: 70%;">
                        <img  style="width: 30px;height: 30px;" src="../img/icons8-phone-number-50.png" alt="">
                        <span style="width: 60%; display: block;">
                            <h3 style="font-size: 18px;">(215) 221-0553</h3>
                        </span>
                    </span>

                    <span style="display: flex;  margin-top: 7%;justify-content: space-between; width: 80%;margin-left: 3%;">
                        <img style="width: 28px;height: 28px;margin-left: 3%;" src="../img/icons8-email-50.png" alt="">
                            <h3 style="font-size: 18px">info@matyhairbraiding.com</h3>
                    </span>
             </span>
            </span>
        </span>
            </span>
            <span style="display: block; width: 45%;padding: 3px;">
                <h3>Schedule  Appointment</h3>
             
               <h6 v-if="this.$store.state.user.userId==0">Schedule with an account to track your appointments!</h6>
                <span v-if="this.$store.state.user.roles==''" style="display: block;margin-top: 3%;">
                    <label style="display: block;">First name</label>
                <input required v-model="unknows.firstname" type="text" name="" id="" >
                </span>
                <span v-if="this.$store.state.user.roles==''" style="display: block; margin-top: 3%;">
                    <label style="display: block;" for="">Last name</label>
                    <input v-model="unknows.lastName" required type="text" name="" id="" >
                </span>
                <span style="display: block;margin-top: 3%;">
                    <label style="display: block;" for="">Choose the hairstyle you want*</label>
                   <select required v-model="reservation.hairId" >
                    <option v-for="haha in justStyle" :key="haha.hairId" :value="haha.hairId" >{{ haha.hairStyle }}</option>
                   </select>
                </span>
                <span style="display: block;margin-top: 3%;">
                    <label style="display: block;font-style: italic" for="">Consultation requested date and time:</label>
                    <input required v-model="this.reservation.scheduleDate" type="date" name="" id="">
                </span>

                <span style="display: block; margin-top: 3%;">
                    <label style="display: block;" for="">Notification mode</label>
                    <select  required v-model="toShowOp" style="display: block;" name="" id="" >
                        <option>Phone</option>
                        <option>Email</option>
                    </select>
                    <input   v-model="this.unknows.phoneNumber" style="margin-top: 3%" required v-if="haveFunWithIt" type="tel"  placeholder="Phone Number #">
                    <input  v-model="this.unknows.email" style="margin-top: 3%;" required v-if="secondOne" type="email"  placeholder="Email Address @">
                    <label style="margin-top: 3%;display: block;">Note:</label>
                    <textarea v-model="this.reservation.commentNotes" style="resize: none; border-radius: 3px;"  required  cols="50" rows="5" placeholder="Leave An Note!"></textarea>
                </span>
                <span style=" display: flex;margin-top: 5%;justify-content: center;width: 60%;">
                    
                    <button  @click="makeReser" id="buttonstuff" >Click to Submit Reservation</button>
                </span>
            </span>
            
        </div>
    </span>
   
    <div id="lookOne" v-show="addedTruth" >
    <span style="display: flex; justify-content: center;" v-motion-slide-visible-once-bottom>
        <span id="allCase"  >
            <h3 v-motion-slide-visible-once-up style="font-weight: bold;text-align: center;" v-show="loopThroughCheese.length==0">You have no completed appointments</h3>
            <span v-for="(two,index) in loopThroughCheese" :key="index"  style="display: block;height: 90%;margin-top: 4px;border-radius: 5px;" >
                <img id="chipFun" :src=two.hairPicture alt="" style="width: 200px;height: 200px;">
                <span style="display: flex;justify-content: center;">
                <hr style="width: 50%;">
                 </span>
                 <span style="display: block;padding: 2px;margin-top: 2%;" :class="{yellowLover: two.apptStatus=='Pending', notyellow: two.apptStatus == 'Complete'}">
                <h4 style="font-size: 20px;text-align: center;">{{ two.hairStyle }}</h4>
                <p style="text-align: center;">Braided by: <b style="font-weight: bold;">{{ two.braiderLastName }}</b></p>
                <p ></p>
                <p>Date Scheduled: {{ two.scheduleDate }}</p>
                <p style="text-align: center;">{{two.apptStatus }}</p>
                </span>
            </span>
            </span>
        </span>
        <span style="display: flex;justify-content: center;margin-top: 2%;">
        <button @click="closeYou" id="mannn" style="padding: 10px;border: 1px solid white;background: grey;border-radius: 6px;color: white;font-size: 15px;">Close</button>
        </span>
    </div>
       
         <div v-show="showtell" class="changeApproved" style="display: flex; align-items: center;justify-content: center;">
        <span style="display: block;">
        <h3 style="margin-top: 3%;">Your appointment has been {{ kidCond }} booked! Check your email for the confirmation and click the button to head back to the home page!</h3>
        <span style="display: flex;justify-content: center;margin-top: 2%;">
        <button @click="pushback" id="disman" style="margin-bottom: 3%;" >Home Page</button>
        </span>
        </span>
    </div>
    </div>

</template>

<script>
import serviceStuff from '@/Service/serviceStuff';
export default {


data(){
    return{
        addedTruth:false,
        getAround: '',
        manThatSuck: false,
        holdOn: false,
        not: true,
        firstOne: false,
        kidCond: '',
        showtell: false,
        fullname: '',
        demAll: [],
        dateforAppt: '',
        toShowOp: '',
        braidStyle: '',
        historyMaker: [],
        unknows: {
            firstName: this.$store.state.user.userId>0? this.$store.state.user.firstName : '',
            lastName: this.$store.state.user.userId>0? this.$store.state.user.lastName : '',
            phoneNumber: this.$store.state.user.userId>0? this.$store.state.user.phoneNumber : '',
            email: this.$store.state.user.userId>0 ? this.$store.state.user.email : '',
        },
        reservation: {
            hairId: this.$route.query.search != ''? parseInt(this.$route.query.search):this.braidStyle,
            userId: this.$store.state.user.userId > 0 ? this.$store.state.user.userId : null,
            userBraiderId: '1',
            dateCreate: new Date(Date.now()),
            scheduleDate: '',
            appStatus: 'Pending',
            commentNotes: '',
           
        }
    }
},

methods:{
    closeYou(){
        this.addedTruth= false
    },
   
    damnYou(){
        this.addedTruth = true
       
    },
    
    first(){
        serviceStuff.getstyle().then((e)=>{
            this.demAll = e.data
            this.holdOn = true
        })
    },

    secondCheck(){
        serviceStuff.damnHistory(this.$store.state.user.userId).then((e)=>{
            this.historyMaker = e.data
        })
        this.manThatSuck = true
    },

    changeWorld(){
        this.gotThem = true
    },

    firstHalf(){
        return this.fullname.split(" ")[0]
    },

    makeReser(){
        
        let firstObject = {
            ano: this.unknows,
            reservation: this.reservation
        }

        serviceStuff.crazyMethod(firstObject).then((e)=>{
            this.kidCond = e.data
            if(this.kidCond.includes("Success")){
            this.showtell = true
            this.firstOne = true
        }
        })
        this.unknows.firstName = '';
        this.unknows.lastName = '';
        this.unknows.phoneNumber = '';

        
    },

    pushback(){
        this.$router.push('/')
    }
},

computed: {
    recomMan(){
        let hyperFun = [];
        for(let i = 0; i < this.historyMaker.length;i++){
            
        }
    },

   
    loopThroughCheese(){
        let whatThatMean = []
        if(this.historyMaker.length>=4){
           let catMan = this.historyMaker.filter((e)=>{
            if(e.appStatus == 'COMPLETED'){
                return e
            }
           })
           if(catMan.length>=4){
            return [catMan[0], catMan[1],catMan[2], catMan[3]]
           }
        }
        
        return whatThatMean = this.historyMaker.filter((e)=>{
            if(e.apptStatus=="COMPLETED"){
                return e
            }
        })
    },
    justStyle(){
        let cheeseCake = this.demAll
        return cheeseCake
    },

    haveFunWithIt(){
        if(this.toShowOp == 'Phone'){
          return true
        }
        return false
    },
    secondOne(){
        if(this.toShowOp == 'Email'){
            return true
        }
        return false
    }


},

created(){
    this.first();
    this.secondCheck();
}
   
}
</script>

<style scoped>



#chipFun:hover{
    transform: scale(1.02);
    transition: .9s ease-in;
}

#mannn:hover{
cursor: pointer;
background: lightgray;
}

#allCase{
    display: flex;
    justify-content: space-evenly;
    margin-top: 2%;
    width: 70%;
    
}



.yellowLover{
    border-bottom: 2px solid yellow;
    border-right: 2px solid yellow;
    border-left: 2px solid yellow;
    box-shadow: 2px 1.5px 1px rgba(0, 0, 0, 0.452);
  

}

.yellowLover:hover{
   cursor: pointer;
   transform: scale(1.03);
   box-shadow: 1px 1px 1px rgba(255, 255, 0, 0.329);
   transition: 1s ease-out

}
#meanJJ{
    font-size: 15px;
    padding: 10px;
    border: none;
    background-color: grey;
    color: white;
    border-radius: 5px;
}

#meanJJ:hover{
    background-color: lightgray;
    cursor: pointer;
}

#backIsFun{
    background: rgba(0, 0, 0, 0.644);
}

#smallChild{
    background-image: url('https://images.fresha.com/locations/location-profile-images/177717/1847207/16ce963a-77c8-4a26-b72e-00fca8a8b223-NaturalRootSalon-US-Pennsylvania-Philadelphia-Roxborough-Fresha.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.secondOne{
    height: 1500px;
}

#jjWatt{
    font-size: 15px;
    padding: 10px;
    background-color: #3e8548b2;
    border: none;
    border-radius: 5px;
    color: white;
}

#jjWatt:hover{
    cursor: pointer;
    background: darkgreen;
}

.whole{
    background-color: black;
    
}

#disman{
    padding: 10px;
     border-radius: 5px; 
     border: 1px solid #3e8548b2; 
     background-color: #3e8548b2;
     color: white; 
     cursor: pointer;
}

#disman:hover{
    transition: .2s ease-in;
    background-color: lightgray;
    transform: scale(1.1);
}

.changeApproved{
    background-color: #3e8548b2;
}



#buttonstuff{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: #3e8548b2; 
    color: white;

}

#buttonstuff:hover{
    background: lightgray;
    transform: scale(1.1);
    transition: .2s ease-in;
    cursor: pointer;
    color: white;
   
    
}

</style>