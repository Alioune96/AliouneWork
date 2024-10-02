<template>
    <div id="backBack" style="height: 800px;">
        <div id="heyHey" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
        <span style="width: 50%; height: 80%;border: 2px solid grey;display: flex;background-color: white;justify-content: center;">
                <div style="width: 80%;">
                    <span style="display: flex;justify-content: center;margin-top: 2%;">
                <img style="display: block;width: 50px;height: 50px;" src="../img/long-hair-woman-with-pony-logo-silhouette-vector-48961154-removebg-preview.png" alt="">
                    </span>
                    <h3 style="margin-top: 5%;font-size: 14px;font-style: italic;font-weight: 800;">Sign up to track reservations, get exclusive discounts, and post reviews.</h3>
                    <input v-model="this.bornKid" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 5%;" type="tel" placeholder="Enter username" >
                    <input v-model="this.techOne" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 2%;" type="tel" placeholder="Enter your email" >
                    <input v-model="this.iSee" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 2%;" type="tel" placeholder="Enter your mobile number" >
                    <input v-model="this.alotMan" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 2%;" type="tel" placeholder="Enter your first name" >
                    <input v-model="this.letGot" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 2%;" type="tel" placeholder="Enter your last name" >
                    <input v-model="this.allCase" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 2%;" type="tel" placeholder="Create a password" >
                    <input v-model="this.final" style="width: 100%;height: 7%;border-radius: 3px;border: 1px solid gray;margin-top: 2%;" type="tel" placeholder="Re-enter your password" >
                    <button @click="giveMeEverything" id="butLick">Create Your Account</button>
                </div>
            </span>     
        </div>
    </div>
    
</template>

<script>
import serviceStuff from '@/Service/serviceStuff';

export default {
    data(){
        return{
            bornKid:'',
            techOne: '',
            iSee: '',
            alotMan: '',
            letGot: '',
            allCase: '',
            final: '',
            stopPlay: false

        }
    },
    methods: {
        giveMeEverything(){
            if(this.allCase != this.final){
                this.stopPlay = true
            }else{
            let objectFinder = {
                userName: this.bornKid,
                email: this.techOne,
                phoneNumber: this.iSee,
                firstName: this.alotMan,
                lastName: this.letGot,
                passWord: this.final,
                roles: 'USER'
            }
            serviceStuff.signUp(objectFinder).then((e)=>{
                if(e.data){
                    this.$router.push('/LogIn')
                }
            })
        }
    }
}
}
</script>

<style scoped>
#backBack{
    background-image: url('https://lh5.googleusercontent.com/p/AF1QipPoioV_m40aOKBBQ6kEzZe43_W6sHKUZGKwq9Ae=s1024');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#heyHey{
    background-color: rgba(0, 0, 0, 0.381);
}

#butLick{
    margin-top: 4%;
    width: 100%;
    padding: 10px;
    background-color: #3e8547ec;
    border: 1px solid white;
    color: white;border-radius: 5px;
}

#butLick:hover{
    cursor: pointer;
    background-color: darkgreen;
}

</style>