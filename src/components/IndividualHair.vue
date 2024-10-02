<template>

  <div v-if="cuzyouwait && secondwait" style="display: flex;justify-content: center;">
         <div style="height: 2000px; display: flex; width: 90%;margin-top:2%; justify-content: space-evenly;">
        <div style="width: 60%;padding: 5px; margin-top: 2%;">
            <h2 >{{ forDisplay.hairStyle }}</h2>
            <hr style="margin-bottom: 2%;">
            <span style="display: flex; justify-content: space-evenly;margin-top: 1%;">
                <span style=" display: flex;justify-content: space-evenly;margin-top: .1%;width: 27%;" >
                <img v-for="one in parseInt(avgReview)" :key="one" src="../img/icons8-star-50.png" style="width: 15px;height: 15px;" >
                <p>{{avgReview }} Avg. rating</p>
                </span>
              <a style="text-decoration: none;color: black;" href="#catch"><p>({{ reviewDisplay.length }} Total Reviews)</p></a>  
                <p>This Hairstyle is the <span style="font-weight: bold;">#{{ highestDisplay }}</span> popular style</p>
            </span>
            <div style="display: flex;justify-content: space-evenly;margin-top: 3%;">
                <span style="display: flex;width: 30%; justify-content: center;align-items: center;height: 500px;">
                    <span  style="display: block; ">   
                        
                        <span id="damnyou" style="display: block; margin-bottom: 5%;">
                    <img id="sheldonCooper"  @mouseenter="mainPhoto(index)"  @mouseout="thisMethod" v-for="(one,index) in justDetailKid.pictures" :key="index" :src="one"  >
                        </span>    
                        <span style="display: flex;justify-content: center;">
                    <img src="../img/icons8-down-arrow-50 (2).png" style="width: 35px;height: 35px;display: block; ">
                        </span>
                </span>
                </span>
                <span style="width: 60%; display: flex;justify-content: center;padding:2px;">
                    <img  :class="{niceChange: yo, here:notyo }" style="display: block; width: 100%; height: 500px;border-radius: 10px;" :src="justDetailKid.pictures[pos]" alt="">
                </span>
            </div>
            <span style="display: block; margin-top: 5%;">
                <h3 style="font-size: 20px;padding: 2px;">Other Recommendations</h3>
          
            <span id="overStuff" >
                <span v-motion-slide-visible-once-bottom class="kid" v-for="oneStyle in forAllDisplay" :key="oneStyle.hairId" >
                    <img :src=oneStyle.hairPicture style="width: 100px;height: 100px;">
                    <p style="text-align: center;">{{ oneStyle.hairStyle.length>=14? oneStyle.hairStyle.substring(0,10)+"...":oneStyle.hairStyle }}</p>
                    <p style="text-align: center;">${{ oneStyle.hairPrice }}.00</p>
                    <router-link :to="{name: 'Style', params: {id: oneStyle.hairId}}"><button id="button">Click For Details</button> </router-link>
                </span>
            </span>  
        </span>
             <div style="margin-top: 10%;">
            <h2>Ratings & Reviews</h2>
            <span style="display: flex; width: 45%;justify-content: space-between;margin-top: 1.2%;">
                <h4 class="kidChamp" @click="changeReview" style="font-size: 18px;border-bottom: 1px solid black;">Hair-Style Review</h4>
                <h4 class="kidChamp" @click="changeStylist" style="font-size: 18px;border-bottom: 1px solid black;">Stylist Review</h4>
            </span>
            <span style="display: flex;width: 40%;justify-content: flex-start;margin-top: 1%;">
            <span style="display: flex; margin-top: 1.2%;width: 35%;justify-content: space-between;">
                <h4 style="font-size: 19px;font-weight: bold;">{{avgReview}}</h4>
                
                <span style="display: flex;">
                <img v-for="(one,index) in parseInt(avgReview)" :key="index" src="../img/icons8-star-50.png" style="width: 20px;height: 20px;">
                </span>
            </span>
        </span>
            <span style="display: flex; width: 37%;justify-content: space-between; padding: 3px;margin-top: 1.2%; ">
                <h4 style="border: 1px solid black;padding: 5px;border-radius: 10px;" id="tagyouwith">All</h4>
               <select id="soldierBoy" style="border-radius: 5px;padding: 5px;" name="">
                <option value="">Ratings</option>
                <option value="">5 Ratings</option>
                <option value="">4 Ratings</option>
                <option value="">3 Ratings</option>
                <option value="">2 Ratings</option>
                <option value="">1 Ratings</option>
               </select>
               <h4 id="tagyouwith" style="border: 1px solid black;padding: 5px;border-radius: 5px;">With Pictures</h4>
            </span>
            </div>
            <div style="margin-top: 2%;padding: 3px;">
            <span v-for="(james,index) in kidThat" :key="index" style="display: block;margin-top: 4%;">
                <span style="display: flex; width: 20%; justify-content: space-between;">
                    <img v-if="james.userProlifePic!=null" :src="cheeseHead(james.userProlifePic)" style="width: 50px;height: 50px;border-radius: 50%;" alt="">
                    <span style="display: block;margin-right: 3%;border-bottom: 1px solid grey;height: 100%;">
                    <p style="font-size: 12px;text-align: center;">{{ james.firstName.substring(0,2)+"***"+james.firstName.substring(james.firstName.length-1) }}</p>
                    <p style="font-size:10px;font-style: italic;margin-top: 2%">From {{ james.datePosted }}</p>
                    </span>
                </span>
                <div style="border-left: 1px solid lightgrey;padding: 5px;margin-top: 3%;width: 90%;margin-left: 3%;">
                    <span>
                    <img style="width: 20px;height: 20px;" v-for="(king,index) in james.numberOfStars" :key="index" src="../img/icons8-star-50.png" alt="">
                    </span>
                    <p>{{ james.commentReview }}</p>
                </div>
            </span>
        </div>
       
        </div>
        
        <div  id="catch" style="width: 30%;margin-top: 2%;padding: 5px;height: 2000px;">
            <div style=" border: 3px solid lightgrey;width: 100%;padding: 3px;border-radius: 10px;top: 10% ;position: sticky;">
            <span style="display: flex;justify-content: center;margin-top: 5%;">
            <span style="display: block;width: 80%;">
                <h3 style="text-align: center; font-size: 35px;">Price: ${{ forDisplay.hairPrice }}.00</h3>
                <hr style="width: 50%;margin-left: 25%">
                <h4 style="text-align: center;">Duration: {{ funDetailhahah.duration }} Minutes</h4>
            </span>
            </span>
            <hr style="margin-top: 2%;width: 70%;margin-left: 15%;">
            <p v-show="this.$store.state.user.userId == 0" style="margin-top: 5%;font-size: 13px;font-weight: bold;">Create an account to track reservations, get exclusive discounts, and post reviews.</p>
            <div style="display: flex;justify-content: center;justify-content: space-evenly;margin-top: 5%;">
                <router-link :to="{name: 'Reservation', query: {search: this.id}}"><button class="button">Click For Appointment</button></router-link>
                <router-link v-if="this.$store.state.user.userId == 0" :to="{name: 'Sign Up'}"><button class="button grey">Create an Account</button></router-link> 
            </div>
            <hr style="margin-top: 5%;">
            <span style="display: flex;align-items: center;justify-content: space-between;">
                <h4 style="font-size: 20px;font-weight: 600;">Protections for this product</h4>
                <img id="whaKi" src="../img/icons8-up-arrow-32.png" alt="">
            </span>
            <div>
                <span style="display: flex;">
                    <img src="../img/icons8-secured-48.png" alt="" style="width: 25px;height: 25px;">
                    <h4 style="margin-left: 3%;">Secure Payment</h4>
                </span>
                <p style="width: 80%;margin-left: 10%;">Every payment you make on MatyHairBraiding.com is secured with strict SSL encryption and PCI DSS data protection protocols</p>
                <span style="display: flex;margin-top: 5%">
                    <img src="../img/icons8-refund-52.png" alt="" style="width: 25px;height: 25px;">
                    <p style="margin-left: 3%;">Standard Refund Policy</p>
                </span>
                <p style="width: 80%;margin-left: 10%;margin-top: 1%;">100% money-back guarantee on pending appointments! No refund after the scheduled appointment time.</p>
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
            id: this.$route.params.id,
            holyHair: {},
            cuzyouwait: false,
            secondwait: false,
            reviewsList: [],
            highAmount: [],
            justDetailKid: {},
            pos: 0,
            yo: false,
            allStyle: [],
            numberOne: 0,
        
            numberFour:4
            
        }
    },

    methods:{
        cheeseHead(word){
            let wordNow = "https://drive.google.com/thumbnail?id="
        let iOwnYou = word.split("/")[5]
        return wordNow+iOwnYou
        },

        GetAll(){
            serviceStuff.getstyle().then((e)=>{
                this.secondwait = true
                this.allStyle = e.data
            })
        },

        justGoGetThem(){
            serviceStuff.justOne(this.id).then((e)=>{
                this.cuzyouwait = true
                this.holyHair = e.data
            })
        },

        weNeedReview(){
            serviceStuff.reviewHair(this.id).then((e)=>{
                this.reviewsList = e.data
            })
        },
        
        checkThis(){
            serviceStuff.testForMap().then((e)=>{
                this.highAmount = e.data
            })
        },
        gettingFun(){
            serviceStuff.getHairDetail(this.id).then((e)=>{
                this.justDetailKid = e.data
            })
        },

        mainPhoto(number){
            this.pos = number
            this.yo = true
        },

        thisMethod(){
            this.yo=false
        }


        
    },
    computed:{
        forDisplay(){
            let oneHair = {};
            return oneHair = this.holyHair
        },

        reviewDisplay(){
            let niceReview = [];
            return niceReview = this.reviewsList
        },

        avgReview(){
            let numberToAdd = 0;
            for(let i = 0; i < this.reviewDisplay.length;i++){
                numberToAdd+=this.reviewDisplay[i].numberOfStars
            }
            
            let numbertoChange = numberToAdd/this.reviewDisplay.length;
           
            return numbertoChange
        },
        highestDisplay(){
            let youStupidKid =  0
            for(let i = 0; i < this.highAmount.length; i++){
            
                if(this.highAmount[i]['1']==this.id){
                    return i+1
                }
                if(this.highAmount[i]['2']==this.id){
                    return i+1
                }if(this.highAmount[i]['3']==this.id){
                    return i+1
                }if(this.highAmount[i]['4']==this.id){
                    return i+1
                }if(this.highAmount[i]['5']==this.id){
                    return i+1
                }if(this.highAmount[i]['6']==this.id){
                    return i+1
                }if(this.highAmount[i]['7']==this.id){
                    return i+1
                }if(this.highAmount[i]['8']==this.id){
                    return i+1
                }if(this.highAmount[i]['9']==this.id){
                    return i+1
                }
            }
            return youStupidKid
        },
        funDetailhahah(){
            let detailsshh = {};
            return detailsshh = this.justDetailKid
        },
        forAllDisplay(){
            let oneArray = []
            return oneArray = this.allStyle
        },
        kidThat(){
         
            let numberCase = []
            for(let i = this.numberOne ; i < this.numberFour; i++){
                if(this.reviewDisplay[i]!=undefined){
                numberCase.push(this.reviewDisplay[i])
                }   
             }
         return numberCase
        }
    },

    created(){
        this.GetAll();

        this.gettingFun()
        this.checkThis();
        this.justGoGetThem();
        this.weNeedReview();
    }

}
</script>

<style scoped>

#whaKi{
    transform: rotate(90deg);
}

#tagyouwith:hover{
    cursor: pointer;
    transition: .5s ease;
    transform: scale(1.1);
    
}


#soldierBoy:hover{
    transform: scale(1.04);
    color: white;
    transition: .2s ease-in;
    color: black;
    cursor: pointer;
}


.button{
    padding: 10px;
    background-color: #3e8547ec;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
}

.grey{
    background-color: lightgray;
}


.button:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: .5s ease-in;
}



.kidChamp:hover{
    cursor: pointer;

}

#button{
    background-color: #3e8547ec;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
}

#button:hover{
    cursor: pointer;
}


.kid{
    
    margin-left: 3%;
    border-radius: 2px;

}

#overStuff{
    display: flex;
    justify-content: space-evenly;
    margin-top: 2%;
overflow-y:hidden ;  
}

.niceChange{
animation: funGuy .3s ease-out;
}

@keyframes funGuy {
    from{
        margin-left: -5%;
    }

    to{
        margin-left: 0%;
    }
}


#sheldonCooper{
    display: block;
    
    border-radius: 5px; 
    width: 80px; height: 80px;
    margin-top: 5%;
    cursor: pointer;
    border: 1px solid black;
}

#sheldonCooper:active{
    border: 3px solid #3e8547ec;
}




#damnyou{ 
height: 400px;
overflow: scroll;
overflow-x: hidden;
}

#upscroll:hover{
    cursor: pointer;
}

#damnyou::-webkit-scrollbar{
    display: none;
}




</style>