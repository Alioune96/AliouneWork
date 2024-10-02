<template>
    <div v-if="iWontDoIt" >
    <div class="catch">
    </div>
    <span class="wavesCuz"></span>
    <h3 style="text-transform: uppercase;text-align: center;color: #3e8548b2;font-size: 16px;margin-top: 5%;font-weight: bold;">Hairstyles by</h3>
    <h2 style="text-align: center;font-size: 62px; font-weight: 550;">Maty African Hair Braiding</h2>
    <div style="display: flex;margin-top: 3%;justify-content: center;">
        <p style="width: 70%;font-size: 16px;">Here are pictures of hairstyles created by Maty African Hair Braiding&trade; stylists. From unique braid styles to extensions and weaves, we have curated some of our best work. Book your appointment today if you want to get braided by our professional stylists!</p>
    </div>
    <span style="display: flex;margin-top: 5%;justify-content: center;">
        <button class="button">Filter - All</button>
        <button class="button">Braids</button>
        <button class="button">Recent</button>
        <button class="button">Braider</button>
        <button class="button">Comments</button>
    </span>
    <span style="display: flex; justify-content: center;">
    <div v-motion-slide-visible-once-top :class="{takeCare: murderMan}" style="margin-top: 5%; display: flex; width: 70%; flex-wrap: wrap; justify-content: space-evenly;">
        <span  v-for="(oneLove,index) in forAllToSee[numberforNow]" :key="index" style="display: block;margin-top: 2%">
            
            <img  style="width: 300px; height: 300px;" :src="methodForImg(oneLove.hairImage)" alt="">
            
        </span>
    </div>
    </span>
    <div style="display: flex;justify-content: center;">
        
    <span style="display: flex;margin-top: 3%;margin-bottom: 2%;justify-content: flex-end; width: 69%;">
        <button class="buttonSmash" @click="moveImageB(index)" @pointerout="changeFalse" style="border-radius: 50%;margin-right: 1%;padding: 10px;border: 1px solid lightgrey;color: white;background: #3e8548b2;width: 50px;height: 50px;" v-for="(king, index) in forAllToSee" :key="index">{{ index }}</button>
    </span>
</div>
</div>
</template>

<script>
import serviceStuff from '@/Service/serviceStuff';
export default {
    data(){
        return {
            allPhotos: [],
            iWontDoIt: false,
            numberforNow: 0,
            murderMan: false
        }
    },
    methods: {
        changeFalse(){
            this.murderMan = false
        },
        moveImageB(index){
            this.numberforNow = index
            this.murderMan = true
        },
      
        getAllForPage(){
            serviceStuff.imagGallery().then((e)=>{
                this.allPhotos = e.data
                this.iWontDoIt = true
            })
        },

        methodForImg(killStuff){
            let holly = killStuff.split("/")[5]
            return "https://drive.google.com/thumbnail?id="+holly+"&sz=w800"
        }
    },
    computed: {
       
     
        forAllToSee(){
            let holderForAll = []
            let twoDStuff = []
            let numberToWhole = 0
            while(numberToWhole<=this.allPhotos.length){
              if(numberToWhole==this.allPhotos.length){
                holderForAll.push(twoDStuff)
                break;
              }
                if(twoDStuff.length != 9){
                    twoDStuff.push(this.allPhotos[numberToWhole])
                    numberToWhole+=1
                }else{
                    holderForAll.push(twoDStuff) 
                    twoDStuff = []
                }
            }
            return holderForAll

        },
      
        },
    created(){
        this.getAllForPage();
    }
}
</script>

<style scoped>
.buttonSmash:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: .4s ease-out;
    font-size: 16px
}

.takeCare{
    animation: jeSs .3s linear;
}

@keyframes jeSs {
    from{
        margin-left: -100%;
        opacity: 0;
    }

    to{
        margin-left: 0%;
        opacity: 1;
    }
}

.catch{
     background-image: url('../img/a8f1195df039827af94a9efbc4b84f73.jpg');
     height: 600px;
     background-size: cover;
     background-repeat: no-repeat;
     background-position: 50% 36%;

}


.wavesCuz{
    display: block;
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
    height: 275px;
    background: url('../img/wave3.png');
    background-size: cover;
    margin-bottom: .02%;
    background-repeat: no-repeat

}

.button{
    padding: 20px;
    border: 1px solid black;
    cursor: pointer;
}

</style>