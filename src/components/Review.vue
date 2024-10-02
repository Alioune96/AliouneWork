<template>
    <div v-if="iWontStart" >
        <div id="catchMan" style="height: 400px;"></div>
        <div class="wavesCuz"></div>
        <span style="display: flex;justify-content: center;margin-top: 2%;">
        <span style="display: block;width: 50%;">
        <h3 class="makeNice" style="text-align: center; font-size: 52px;font-weight: 500;">Philadelphia's Braiding Salon
        </h3>
        <p class="makeNice" style="font-weight: 500;text-align: center;">For the last <b style="font-weight: bold;">{{ yearsToDisplay }} years</b>, the Maty African Hair Braiding salon has been home to many happy customers. We strive to provide our customers with hairstyles they love through our dedication to excellence.</p>
        </span>
        </span>
        <span style="display: flex;justify-content: center;">
     <span style="display: block;margin-top: 7%; width: 69.5%;padding: 4px;">
       
      
        <span style="display: flex;margin-top: 3%;justify-content: space-between;">
            <div style="width: 50%">
                <h3 style="font-size: 20px;display: inline;">Reviews</h3>
                <p>Maty African Hair Braiding&trade; guarantees that reviewers are verified to have had an appointment with the salon.
                 A user has the opportunity to add a review only after the service has been provided to them.</p>
            </div>
            <div style="width: 30%;display: flex;height: 70%;border: 1px solid lightgray;border-radius: 5px;justify-content: space-evenly; padding: 2px">
                    <span style="width: 50%;display: block;border-right: 1px solid lightgray;margin-top: 2%;">
                        <p style="text-align: center;font-size: 22px;">{{ numberThatWork }}/5</p>
                        <span style="display: flex;justify-content: center">
                            <img v-for="key in parseInt(numberThatWork)" style="width: 20px;height: 20px;"  :key="key" src="../img/icons8-star-50.png" alt="">
                        </span>
                        <p style="color: lightgray;font-size: 14px;text-align: center;">Based on {{ chosenOne.length }} reviews</p>
                    </span>
                    <span style="width: 50%; display: flex; justify-content: center; align-items: center">
                        <span style="display: block; margin-top: 3%">
                            <span v-for="(jaja, index) in 5 " :key="index" style="display: flex; align-items: center">
                                <p style="font-size: 10px;">{{index+1}}</p>
                                <img style="width: 10px;height: 10px;" src="../img/icons8-star-50.png" alt="">
                                <input class="thumb"  disabled type="range" value="5" min="0" max="5" name="" id="">
                                <p>{{ basedOnIndex(index+1) }}</p>
                            </span>
                        </span>
                    </span>
            </div>
        </span>
        <div>
            <div class="backBack" style="display: flex;justify-content: space-evenly;align-items: center;margin-top: 4%;width: 100%;border-radius:5px ;">
                <h3>Filter By:</h3>
                <span class="catch22" style="display: flex;">
                    <h3>Style</h3>
                </span>
                <span class="catch22" style="display: flex">
                    <h3>Braider</h3>
                </span>
                <span class="catch22" style="display: flex;">
                    <h3>Highest Ratings</h3>
                </span>
                <span class="catch22" style="display: flex;">
                    <h3>Lowest Ratings</h3>
                </span>

            </div >
            <div style="margin-top: 4%">
            <span v-for="(jSlol, index) in chosenOne" :key="index" style="display: block;margin-top: 3%;border-bottom: 1px solid lightgray;padding: 1%;">
                
                <span style="display: flex;justify-content: space-between;">
                    <span>
                    <img style="width: 30px;height: 30px;" v-for="(keepHer,index) in jSlol.numberOfStars" :key="index" src="../img/icons8-star-50.png" alt="">
                     </span>
                     <span style="display: flex;align-items: center; width: 20%;justify-content: space-evenly;">

                        <img v-if="jSlol.userProlifePic!=null" style="width:50px;height: 50px;border-radius: 50%;" :src="makeNiceProf(jSlol.userProlifePic)" alt="">
                        <img v-else src="../img/icons8-avatar-50.png" style="width: 50px;height: 50px;" alt="">
                    <p style="font-size: 12px;color: black;">{{ jSlol.userName + " - "+  iLikeFun( jSlol.datePosted) }}</p>
                    </span>
                </span>
                <span style="display: block;">
                <p>{{ jSlol.hairStyle }}</p>
                <p>By: {{ jSlol.hairBraiderFirst }} {{ jSlol.hairBraiderLast.substring(0,1) }}</p>
                <p style="margin-top: 4%;">{{ jSlol.commentReview }}</p>
                <span style="display: flex;justify-content: space-between;margin-bottom: 2%;margin-top: 2%;">
                    <span style="display: flex;width: 20%;justify-content: space-evenly;">
                        <span @click="addLike(jSlol.reviewId, index)" class="evenLess"  :class="{kickIt: tacataBro == index}" style="padding:8px ;" >
                            <p>{{jSlol.likes }}</p>
                            <p>:</p>
                            <img  style="width: 15px;height: 15px;" src="../img/icons8-thumb-up-64.png" alt="">
                        </span>
                        <span class="evenLess" @click="hatePost(jSlol.reviewId, index)" :class="{kickIt: catDaddy==index}" style="display: flex; justify-content: space-evenly;width: 30%;align-items: center;padding: 8px;">
                            <p>{{ jSlol.disLikes }}</p>
                            <p>:</p>
                            <img style="width: 15px;height: 15px;" src="../img/icons8-thumb-down-64.png" alt="">
                        </span> 
                        </span>

                    <span style="width: 20%;display: flex;justify-content: flex-end;">
                        <span class="evenLess" style="display: flex; justify-content: space-evenly;width: 50%;align-items: center;padding: 3px;">
                            <p>report:</p>
                            <img style="width: 15px;height: 15px;" src="../img/icons8-flag-50.png" alt="">
                        </span>
                    </span>
                </span>
            </span>
            </span>
        </div>
        </div>
     </span>   
    </span>
    </div>
</template>

<script>
import serviceStuff from '@/Service/serviceStuff';
export default {
   data(){
    return{
        catDaddy: -1,
        tacataBro : -1,
        reviewFun: [],
        iWontStart: false,
        forNow: true,
        keepLock: false,
        youToo: true,
        willComeOut: 0,
        iSeeNow: 0
    }

   },
   methods: {
   

    iLikeFun(word){
        let dateNow = new Date (Date.now())
        let seconTimer =parseInt(word.split("-")[1])
        let checkHer = dateNow.getDate()
        let worldLeader = parseInt(dateNow.getDate())-seconTimer
        if(worldLeader<7){
            return worldLeader+ " Days Ago"
        } 
        let cashMoney = worldLeader/7
        return parseInt(cashMoney)+ " weeks ago"
    },

    makeNiceProf(word){
        let wordNow = "https://drive.google.com/thumbnail?id="
        let iOwnYou = word.split("/")[5]
        return wordNow+iOwnYou
    },


    ineedAll(){
        serviceStuff.needReview().then((e)=>{
            this.reviewFun = e.data
            this.iWontStart = true
        })
    },
    addLike(number , stuffLike){
        serviceStuff.iLikePost(number, this.$store.state.user.userId).then((e)=>{
            if(e.data == 1996){
                this.keepLock = true
                this.tacataBro = stuffLike
                this.catDaddy = -1
            }else{
            this.willComeOut= e.data
            this.forNow = false
            this.catDaddy = -1
            this.ineedAll()
            }
        })
    },
    hatePost(number, numberTwo){
        serviceStuff.iHatePost(number, this.$store.state.user.userId).then((e)=>{
            if(e.data==1996){
                this.keepLock = true
                this.catDaddy = numberTwo
                this.tacataBro = -1
            }else{
            this.iSeeNow = e.data
            this.youToo = false
            this.catDaddy = -1
            this.ineedAll()
            }
        })
    },
  

    basedOnIndex(number){
        let numberToReturn = 0;
        this.chosenOne.forEach((e)=>{
            if(e.numberOfStars == number){
                numberToReturn++
            }
        })
        return numberToReturn
    }
   },
   computed: {
    displayMe(){
        return this.willComeOut
    },
    yearsToDisplay(){
        let yearFounded = 1996;
        let date = new Date(Date.now())
        let stringTime = date.getUTCFullYear()-yearFounded
        return stringTime
    },
    chosenOne(){
        let reviewDisplay = []
        return reviewDisplay = this.reviewFun
    },

    numberThatWork(){
        let numberThatShow = 0;
        this.chosenOne.forEach((e)=>{numberThatShow+=e.numberOfStars
        })
        return (numberThatShow/this.chosenOne.length).toPrecision(2)
    },

    displayWho(){
        return this.iSeeNow
    },
    
    

   },
   created(){
    this.ineedAll();
   }
}
</script>

<style scoped>
.backBack{
    background-color: rgba(172, 168, 168, 0.363);
    padding: 10px;
}


#WhaKi{
    background: url("https://drive.google.com//thumbnail?1Hc7MClu1cWR4DNWKLkYNU1X503OUhX3D_r");
    height: 100px;
    width: 100px;
}


.kickIt{
    border: 1px solid rgb(25, 25, 241);

}



.makeSmaller{
    width: 20px;
    height: 20px;
}

.catch22:hover{
    cursor: pointer;
}

.evenLess{
    display: flex; 
    justify-content: space-evenly;
    border-radius: 7px;
    width: 30%;
    align-items: center;padding: 3px;
    background-color: rgba(211, 211, 211, 0.332);
}

#catchMan{
    background: url('https://ij.org/wp-content/uploads/2015/03/sylla-braiding-01_lg-1200x1200.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y:calc(100% - -110px)
}

.wavesCuz{
    position: relative;
    background-image: linear-gradient(315deg, hsla(161,51%,47%,0.1)0, rgb(11,173,100,.849) 0%);
}

.wavesCuz::before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 245px;
    background: url('../img/wave3.png');
    background-size: cover;
}

.makeNice{
    font-style: oblique;
}

.thumb{
    width: 20px;
    height: 3px;
}



.evenLess:hover{
    background: lightgray;
    cursor: pointer;
    transition: .2s ease-in-out;
}


</style>