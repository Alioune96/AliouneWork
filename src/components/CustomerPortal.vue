<template>
    <div   :class="{noConfirm: theyDidnt, confirmByThem: theyDid}">   
    <div v-if="waitfornice && holder && iWillNotStart && stopGameChanger && catDaddy" style="display: flex;justify-content: center;height: 1200px;;">
        <div v-show="theyDid" style="position: absolute; background: white;border-radius: 5px;border: 1px solid lightgray;margin-top: 3%;width: 20%;padding: 20px">
            <h4 style="text-align: center;font-size: 20px">Are you sure?</h4>
            <p style="margin-top:1%;text-align: center">Confirm by clicking "Understood"</p>
            <span style="display: flex;justify-content: space-evenly;margin-top: 8%">
                <button @click="confirmedGuy" style="width: 45%;text-align: center;" class="button green">Understood</button>
                <button @click="iChangedReally" style="width: 45%;border: 1px solid grey;" class="button grey">Cancel</button>
            </span>
           
        </div>
        
    <div style="display: flex;width: 80%;justify-content: center;">
        <span v-show="iControlThis" id="catHer" style="display: inline;justify-content: center; position: absolute;position: fixed;">
        <button class="green" disabled="disabled" style="position: absolute;border-radius: 10px;border: none;padding: 10px;color: white;">Saved</button>
        </span>
        <div  style="width: 25%;margin-top: 3%;border-right: 1px solid lightgray;">
            <div>
            <span style="display: flex;justify-content: center;align-items: center;padding: 10%;">
                <img v-if="this.$store.state.user.profilePic == null" style="width: 70;height: 70px;" src="../img/icons8-avatar-50.png" alt="">
                <img v-else style="width: 70px;height: 70px;border-radius: 50%;" :src="gameChangerThanksN(this.$store.state.user.profilePic)" alt="">
                <span style="display: block;justify-content: center;margin-left: 2%;">
                    <h4 style="font-size: 25px;" >{{ whyThis.firstName +" "+whyThis.lastName}}</h4>
                    <p style="text-align: center;">{{ whyThis.phoneNumber }}</p>
                </span>
            </span>
            <span style="display: flex;justify-content: center;width: 100%;">
            <span v-show="theyDidnt" style="display: block;width: 70%;margin-top: 10%;">
            <span @click="appTMan" class="damnThatGuy" @mouseover="switchEm" @mouseleave="sidePiece" style="display: flex;justify-content: flex-start;align-items: center;width: 100%;">
            <img  v-show="checkOne" class="hoveStuff" src="../img/icons8-appointment-50.png" alt="">   
            <img v-motion-slide-visible-once-left class="whoaBig" v-show="checkTwo"  src="../img/icons8-appointment-50 (1).png" alt="">
            <h3 style="font-size: 17px;margin-left: 2%;" :class="{textSwitch: iThink}">Appointments</h3> 
            </span>  
            <span @click="changePage" class="damnThatGuy" @mouseover="sameStuff" @mouseleave="notSameSuff" style="display: flex;align-items: center;width: 100%;justify-self: flex-start;">
                
            <img  v-show="damnYou" class="hoveStuff" src="../img/icons8-message-50.png" alt="">
            <img v-motion-slide-visible-once-left v-show="notDamnYou" class="whoaBig" src="../img/icons8-message-50 (1).png" alt="">
            <h3 style="margin-left: 2%;" :class="{textSwitch: wweWasFun}">Messages</h3>
            </span>
            <span @click="accountChanger" class="damnThatGuy" @mouseover="howMany" @mouseleave="notHowMany" style="display: flex;align-items: center;width: 100%;justify-content: flex-start;">
            <img v-show="chechCheck" class="hoveStuff" src="../img/icons8-inbox-50.png" alt="">
            <img v-motion-slide-visible-once-left v-show="notCheck" class="whoaBig" src="../img/icons8-inbox-50 (2).png" alt="">
            <h3 style="margin-left: 2%;" :class="{textSwitch: mattHardy}">Account</h3>
            </span>
            <span @click="youReallyThough" class="damnThatGuy" @mouseover="willIWin" @mouseleave="winner" style="display: flex;align-items: center;width: 100%;justify-content: flex-start;">
            <img v-show="whyMe" class="hoveStuff" src="../img/icons8-gallery-80.png" alt="">
            <img v-motion-slide-visible-once-left v-show="notWhyme" class="whoaBig" src="../img/icons8-gallery-80 (1).png" alt="">
            <h3 style="margin-left: 2%;" :class="{textSwitch: jeffHardy}">Gallery</h3>
            </span>
            <span @click="inYourFace" class="damnThatGuy" @mouseover="shouldNot" @mouseleave="silly" style="display: flex;align-items: center;width: 100%;justify-content: flex-start;">
            <img v-show="whaki" class="hoveStuff" src="../img/icons8-review-50.png" alt="">
            <img v-motion-slide-visible-once-left v-show="NotWhaki" class="whoaBig" src="../img/icons8-review-50 (1).png" alt="">
            <h3 style="margin-left: 2%" :class="{textSwitch: textGet}">Reviews</h3>
            </span>
        </span>
    </span>
            </div>
            <span style="display: flex;justify-content: center;">
           
            </span>
            <span style="display: flex;justify-content: center;margin-top: 10%;">
            <button v-show="theyDidnt" :disabled="theydid" style="width: 80%;padding: 10px;background-color: red; color: white;border-radius: 5px;border: 1px solid white;">Log Out</button>
        </span>
      
        </div>
        <div :class="{normal: theyDidnt, notNormal: theyDid}" style="width: 55%;margin-top: 3%;margin-left: 6%;">
            <div v-show="whyKid" style="margin-top: 2%;padding: 1%;">
            <h3 style="text-align: center;font-size: 35px;">Appointments</h3>
            <span style="display: flex;justify-content: space-evenly; margin-top: 2%;">
            <button @click="firstChanger" style="width: 20%;font-weight: bold;" class="button blue">Pending</button>
            <button @click="secondChanger" style="width: 20%; font-weight: bold;" class="button blue">Completed</button>
            <button @click="thirdChanger" style="width: 20%;font-weight: bold;" class="button blue">Cancelled</button>
            </span>
            <h5 v-show="firstOne" style="margin-top: 3%;font-size: 20px;font-weight: bold;">Pending Appointments</h5>
            <h5 v-show="secondOne" style="font-size: 20px;font-weight: bold;margin-top: 3%;">Completed Appointments</h5>
            <h5 v-show="thirdOne" style="font-size: 20px;font-weight: bold;margin-top: 3%;">Canceled Appointments</h5>
            <span v-for="(twoTimes,index) in willyoudisplayMonkey" :key="index"  style="display: flex;border: 1px solid lightgray;border-radius: 10px;margin-top: 2%;">
                <div style="width: 80%;padding: 2%;">
                    <p style="display: inline;border: 1px solid lightgrey;border-radius: 10px;padding: 3px;background-color: lightgray;">{{ twoTimes.apptStatus }}</p>
                    <h4 style="margin-top: 3%;font-size: 20px;">{{ twoTimes.hairStyle }}</h4>
                    <span style="display: flex;align-items: center;justify-content: flex-start;width: 80%;margin-top: 3%;">
                        <img v-if="twoTimes.braiderProfile != null" style="width: 40px;height: 40px;border-radius: 50%;" :src="gameChangerThanksN(twoTimes.braiderProfile)" alt="">
                        <img v-else style="width: 40px;height: 40px;border-radius: 50%;" src="../img/icons8-avatar-50.png" alt="">

                        <p style="margin-left: 3%;">{{twoTimes.apptStatus === 'Pending' ? "Braider: "+twoTimes.firstName +"  "+ twoTimes.braiderLastName:"Your appointment with "+ twoTimes.braiderLastName+" was canceled." }}</p>
                        
                        <img v-show="twoTimes.apptStatus === 'Pending'" @click="textshowman(index)" class="asds" style="width: 20px;height: 20px;margin-left: 1.5%;" src="../img/icons8-message-50.png" alt="">
                    </span>
                    <textarea v-model="messageToSend" v-show="index==textMan" style="margin-top: 2%;resize: none;" name="" id="" cols="50" rows="10"></textarea>
                    <span style="display: flex;margin-top: 3%;justify-content: space-evenly;">
                        <button @click="iclicked(index)" v-show="twoTimes.apptStatus=='Pending'"  class="button green">Edit Appointment</button>
                        <button v-show="twoTimes.apptStatus=='Pending'" @click="beGone(parseInt(twoTimes.apptId))" class="button red">Cancel Appointment</button>
                        <button @click="messageGo(twoTimes.braiderId, twoTimes.apptId)" v-show="index==textMan" class="button blue">Send/Close Message</button>

                    </span>
                    <span v-if="whoClicked && index == cat && twoTimes.apptStatus=='Pending'" style="display: block; margin-top: 2%">
                        <h5 style="font-size: 15px;">Please choose which aspect of your appointment you would like to change</h5>
                        <div style="display: flex; justify-content: center">
                        <select :disabled="iDontPlay" v-model="this.timeOptions" @mouseenter="quickChange"  style="width: 25%;border-radius:5px;padding:5px;margin-top: 2%" name="" id="">
                            
                            <option value="" >Choose One</option>
                            <option :value="'Prancer'">Date</option>
                            <option :value="'braider'">Braider</option>
                            <option :value="'cheese'">Time</option>
                           
                        </select>
                    </div>
                    <div v-show="timeOptions==='Prancer'">
                    <p style="text-align: center;margin-top: 2%">Your appointment is schedule for <b style="font-weight: bold"> {{withNumber(parseInt(twoTimes.scheduleDate.substring(5,7))) + " "+twoTimes.scheduleDate.substring(8)}}</b></p>
                   <p style="text-align: center;font-weight: bold;">What time would you like to change it to?</p>
                    <div style="display: flex;justify-content: center;margin-top: 2%">
                    <input v-model="this.changeDate" style="padding: 2px;border-radius: 5px;border: 1px solid black;" type="date" name="" id="">
                    </div>
                    <span v-motion-pop v-if="changeDate != ''" style="display: block;margin-top: 2%">
                    <p style="text-align: center" >Are you sure you want to change it to: {{ withNumber(parseInt(this.changeDate.substring(5,7))) + " "+ changeDate.substring(8)}}?</p>
                    <span style="display: flex;justify-content: space-evenly;margin-top: 2%;width: 100%;">
                        <button  style="width: 30%;" class="button green">Yes</button>
                        <button  style="width: 30%" class="button blue">Discard</button>
                    </span>
                    </span>
                </div>
                <div style="margin-top: 2%" v-show="timeOptions=='braider'">
                    <span v-show="loveYou">
                    <p v-show="otherCase" style="text-align: center">You will be braided by {{twoTimes.firstName+" " +twoTimes.braiderLastName }}. Do you still want to change?</p>
                <span v-show="otherCase" style="display: flex;justify-content: center;margin-top: 1%">
                    <button   @click="sosaBaby" style="width: 20%;" class="button green">Yes</button>
                    <button  @click="switchAround" style="width: 20%;margin-left: 1%" class="button red">Discard</button>
                </span>
                </span>
                <div v-show="chiefKeef">
                <span style="display: flex;justify-content: center;">
                <p style="margin-top: 1%;width: 70%;">Choose another braider and you will be notified whether they are available that day</p>
                 </span>
                 <span style="display: flex;justify-content: center;margin-top: 1%">
                    <select v-model="newBraider" name="" id="" style="width: 30%;text-align: center;padding: 2px;border-radius: 5px;">
                        <option value="" >Choose a braider</option>
                        <option v-for="dcLose in chooperOfHair" :key="dcLose.userId" :value="dcLose" style="text-align: left;" >{{ dcLose.firstName+ " "+ dcLose.lastName }}</option>
                    </select>
                 </span>
                 <p style="text-align: center;margin-top: 2%;" v-show="newBraider!= ''" v-motion-slide-visible-once-right>Your hair will now be braided by: <b style="font-weight: bold">{{ newBraider.firstName+" "+ newBraider.lastName }}</b>, you sure?</p>
                 <span style="display: flex;justify-content: center;margin-top: 1%">
                    <button style="width: 20%" class="button green">Yes</button>
                    <button @click="mindChanger" style="width: 20%;margin-left: 1%" class="button red">Discard</button>
                 </span>
              
                </div>
                </div>
                <div style="margin-top: 2%" v-show="timeOptions=='cheese'">
                    <span style="display: flex;justify-content: center;">
                        <span style="width: 70%;display: block">
                            <p style="font-size: 17px;">Modify your appointment time:</p>
                            <span style="display:flex;justify-content: center;margin-top: 2%">
                            <input v-model="timeValue" style="margin-right: 1%;display: block" type="time">
                            </span>
                           <span v-show="timeValue != ''" style="display: block">
                            <p v-motion-pop-visible  style="border: 3px solid red;padding: 2px;text-align: center;margin-top: 2%">Your appointment is now scheduled for: {{parseInt( timeValue.substring(0,2))>=12? bonnyJones(parseInt(timeValue.substring(0,2))) +":"+ timeValue.substring(3)+" PM": timeValue+" AM"}}, Warning, your new time is only pending and must be approved by the braider</p>
                            <span style="display: flex;justify-content: center;margin-top: 2%;justify-content: space-around;">
                            <button v-motion-pop-visible class="button green">Confirm</button>
                            <button @click="switchAround" class="button red">Cancel</button>
                            </span>
                            </span>
                        </span>
                    </span>

                </div>
                </span>
                </div>
                <div style="width: 20%;border-left: 1px solid lightgray;display: flex;align-items: center;justify-content: center;">
                 <span style="display: block;">
                    <p style="text-align: center;font-size: 15px;margin-top: 10%;" v-text="withNumber(parseInt(twoTimes.scheduleDate.substring(5,7)))" ></p>
                    <h4 style="text-align: center;margin-top: 5%;font-size: 25px;">{{ twoTimes.scheduleDate.substring(8) }}</h4>
                    <p style="text-align: center;">12:00 PM**</p>
                </span>
                   
                    
                </div>
                
            </span>
            <h4 style="margin-top: 3%;font-weight: 600;text-align: center;" v-show="willyoudisplayMonkey.length==0">You have no {{ seachWord.toLocaleLowerCase() }} appointments</h4>
            </div>
        <div v-motion-slide-visible-top v-show="killMan">
            <span style="display: flex;justify-content: space-between;margin-top: 5%;">
            <h3 style="font-size: 40px">Messages</h3>
            <span style="display: flex;width: 60%;justify-content: space-evenly;">
            <button @click="changeAll" style="border-radius: 5px;background-color: grey;width: 25%" class="button">{{ worldBeater==''? "Archive": 'Undone' }}</button>
           <a style="width: 25%;" href="#catchMan"><button style="width: 100%;border-radius: 5px" @click="neymarWorld" class="button blue">Create Message</button></a>
            </span>
            </span>
            <span style="display: block;border: 1px solid black;margin-top: 5%;padding: 5px">
                <div v-show="messageFade">
                <h5 style="font-size: 16px;font-weight: bold;">New</h5>
                <hr>
                <div>
                    <h4 v-show="displaymessage.length==0" style="font-weight: bold;text-align: center;font-size:16px ;">You have no new messages</h4>
                    <span   @click="openMessage(index, oneTime.messageId)" :class="{hoverFun: cheeseHead}" v-for="(oneTime, index) in displaymessage" :key="index" style="display: block;">
                        <span v-show="youMight"  style="display: flex;margin-top: 5%;align-items: center;border-bottom: 1px solid lightgray;padding: 5px;">
                        <input type="checkbox" name="" id="">
                        <img v-show="!oneTime.readStatus" src="../img/icons8-blue-48.png" alt="" style="width: 10px;height: 10px;margin-left: 3%;">
                        <span style="display: flex; justify-content: space-between;align-items: center;margin-left: 2%;width: 90%">
                        <h4>Username: <b style="font-weight: bold;">{{ oneTime.userName }}</b></h4>
                        <span style="display: flex;align-items: center;margin-left: 5%;justify-content: flex-start; width: 40%;">
                        <img src="../img/icons8-star-50 (2).png" style="width: 10px;height: 10px;" alt="">
                        <p :class="{iDontKnow: !oneTime.readStatus, cheapKing: oneTime.readStatus}" style="margin-left: 2%;">{{ oneTime.subject }}</p>
                        </span>
                        <p>{{ oneTime.messageDate.substring(5,10).replace("-", "/") }}</p>
                        </span>
                    </span>
                    <span v-show ="catMan && index == changeTime" style="border: 1px solid black; padding: 2px;margin-top: 2%;display: block;">
                        <span id="chchj" style="display: flex;align-items: center;justify-content: space-between;justify-content: flex-end;">
                            
                             <span >
                                <p style="font-size: 10px;color: lightgray;">{{ this.$store.state.user.firstName }}/ Inbox</p>
                             </span>
                         </span>
                         <div id="messageCuz" style="margin-top: 3%;">
                            <span style="display: flex;justify-content: space-between;">
                                <div>
                                    <p style="font-size: 11px;"><b style="color: lightgray;font-size: 11px;">To:</b> {{ this.$store.state.user.firstName + " "+ this.$store.state.user.lastName }}</p>
                                    <p style="font-size: 11px;"><b style="color: lightgray;font-size: 11px;">From:</b> {{ oneTime.firstName + " "+ oneTime.lastName}} </p>
                                </div>
                                <div style="display: flex;align-items: center;width: 10%;justify-content: space-evenly;">
                                  <p style="color: lightgray;font-size: 11px;">{{ withNumber(oneTime.messageDate.substring(5,7)).substring(0,4) }} {{ oneTime.messageDate.substring(8) }}</p> 
                                  <img  v-show="catMan" id="closePage" @dblclick="closeCheese" style="border-radius: 50%;width: 20px;height: 20px;border: 1px solid lightgrey;padding: 2px;" src="../img/icons8-close-30 (1).png" alt=""> 
                                </div>
                            </span>
                            <p style="font-size: 12px;margin-top: 5%;border: 1px solid gray;padding: 4px;border-radius: 4px;">{{ oneTime.messagesContent }}</p>
                            <span style="display:flex;justify-content: center;margin-top: 2%;margin-bottom: 10px">
                                <span style="display: flex;width: 25%;border: 2px solid lightgrey;border-radius: 20px;justify-content: space-around;padding: 5px">
                                    <img class="catCh" @click="forWard" style="width: 25px;height: 25px;" src="../img/icons8-reply-50.png" alt="">
                                    <img  style="width: 25px;height: 25px;" src="../img/icons8-forward-message-50.png" alt="">
                                    <img  style="width: 25px;height: 25px;" src="../img/icons8-dots-50.png" alt="">
                                </span>
                            </span>
                           <div v-show="coltHuh" style="border: 1px solid black;display: flex;justify-content: center;">
                            <span style="display: block; width: 90%;">
                            <p style="font-weight: bold;">Re:{{oneTime.subject }}</p>
                            <p style="margin-top: 3%;">To <em style="font-style: normal;border: 1px solid lightgray;border-radius: 30px;padding: 4px">{{ oneTime.userName }}</em></p>
                            <hr style="margin-top: 2%;border-width: .5px;">
                            <textarea v-model="textReply" style="resize: none; margin-top: 1%;" name="" id="" cols="74" rows="10"></textarea>
                            <button @click="replyMan(oneTime.userFrom, oneTime.subject, oneTime.apptId)" class="button blue"  style="width: 100%;">Send</button>
                            
                            
                        </span>
                           </div>
                         </div>
                    </span>

                </span>
                    
                </div>
            </div>
            <div v-show="messageFade">
                <h5 style="font-size: 16px; margin-top: 3%;">Read</h5>
                <hr>
                <h4 v-show="oldandDusty.length==0" style="font-weight: bold;text-align: center;font-size: 16px">You have no read messages</h4>
                <span  @click="openOld(index, oneTime.messageId)" :class="{hoverFun: cheeseHead}" v-for="(oneTime, index) in oldandDusty" :key="index" style="display: block;">
                        <span v-show="niceDeed"  style="display: flex;margin-top: 5%;align-items: center;border-bottom: 1px solid lightgray;padding: 5px;">
                        <input type="checkbox" name="" id="">
                        <img v-show="!oneTime.readStatus" src="../img/icons8-blue-48.png" alt="" style="width: 10px;height: 10px;margin-left: 3%;">
                        <span style="display: flex; justify-content: space-between;align-items: center;margin-left: 2%;width: 90%">
                        <h4>Username: <b style="font-weight: bold;">{{ oneTime.userName }}</b></h4>
                        <span style="display: flex;align-items: center;margin-left: 5%;justify-content: flex-start; width: 40%;">
                        <img src="../img/icons8-star-50 (2).png" style="width: 10px;height: 10px;" alt="">
                        <p :class="{iDontKnow: !oneTime.readStatus, cheapKing: oneTime.readStatus}" style="margin-left: 2%;">{{ oneTime.subject }}</p>
                        </span>
                        <p>{{ oneTime.messageDate.substring(5,10).replace("-", "/") }}</p>
                        </span>
                    </span>
                    <span v-show ="greedy && index == numberLover" style="border: 1px solid black; padding: 2px;margin-top: 2%;display: block;">
                        <span id="chchj" style="display: flex;align-items: center;justify-content: space-between;justify-content: flex-end;">
                            
                             <span >
                                <p style="font-size: 10px;color: lightgray;">{{ this.$store.state.user.firstName }}/ Inbox</p>
                             </span>
                         </span>
                         <div id="messageCuz" style="margin-top: 3%;">
                            <span style="display: flex;justify-content: space-between;">
                                <div>
                                    <p style="font-size: 11px;"><b style="color: lightgray;font-size: 11px;">To:</b> {{ this.$store.state.user.firstName + " "+ this.$store.state.user.lastName }}</p>
                                    <p style="font-size: 11px;"><b style="color: lightgray;font-size: 11px;">From:</b> {{ oneTime.firstName + " "+ oneTime.lastName}} </p>
                                </div>
                                <div style="display: flex;align-items: center;width: 10%;justify-content: space-evenly;">
                                  <p style="color: lightgray;font-size: 11px;">{{ withNumber(oneTime.messageDate.substring(5,7)).substring(0,4) }} {{ oneTime.messageDate.substring(8) }}</p> 
                                  <img v-motion-slide-visible-once-left v-show="greedy" id="closePage" @dblclick="closeChapter" style="border-radius: 50%;width: 20px;height: 20px;border: 1px solid lightgrey;padding: 2px;" src="../img/icons8-close-30 (1).png" alt=""> 
                                </div>
                            </span>
                            <p style="font-size: 12px;margin-top: 5%;border: 1px solid gray;padding: 4px;border-radius: 4px;">{{ oneTime.messagesContent }}</p>
                            <span style="display:flex;justify-content: center;margin-top: 2%;margin-bottom: 10px">
                                <span style="display: flex;width: 25%;border: 2px solid lightgrey;border-radius: 20px;justify-content: space-around;padding: 5px">
                                    <img class="catCh" @click="greatForward" style="width: 25px;height: 25px;" src="../img/icons8-reply-50.png" alt="">
                                    <img  style="width: 25px;height: 25px;" src="../img/icons8-forward-message-50.png" alt="">
                                    <img  style="width: 25px;height: 25px;" src="../img/icons8-dots-50.png" alt="">
                                </span>
                            </span>
                           <div v-show="greatColt" style="border: 1px solid black;display: flex;justify-content: center;">
                            <span style="display: block; width: 90%;">
                            <p style="font-weight: bold;">Re:{{oneTime.subject }}</p>
                            <p style="margin-top: 3%;">To <em style="font-style: normal;border: 1px solid lightgray;border-radius: 30px;padding: 4px">{{ oneTime.userName }}</em></p>
                            <hr style="margin-top: 2%;border-width: .5px;">
                            <textarea v-model="textReply" style="resize: none; margin-top: 1%;" name="" id="" cols="74" rows="10"></textarea>
                            <button @click="secondLooker(oneTime.userFrom, oneTime.subject, oneTime.apptId)" class="button blue"  style="width: 100%;">Send</button>
                            
                            
                        </span>
                           </div>
                         </div>
                    </span>

                </span>
            </div>

                <div v-show="worldBeater=='cat'">
                <h5 style="font-size: 18px; margin-top: 3%;">Archive</h5>
                <hr>
                <h4 v-show="doneMessingAround.length==0" style="text-align: center;margin-top: 3%;font-weight:bold ">You have no archive mail!</h4>
                <span  @click="openOld(index, oneTime.messageId)" :class="{hoverFun: cheeseHead}" v-for="(oneTime, index) in doneMessingAround" :key="index" style="display: block;">
                        <span v-show="niceDeed"  style="display: flex;margin-top: 5%;align-items: center;border-bottom: 1px solid lightgray;padding: 5px;">
                        <input type="checkbox" name="" id="">
                        <img v-show="!oneTime.readStatus" src="../img/icons8-blue-48.png" alt="" style="width: 10px;height: 10px;margin-left: 3%;">
                        <span style="display: flex; justify-content: space-between;align-items: center;margin-left: 2%;width: 90%">
                        <h4>Username: <b style="font-weight: bold;">{{ oneTime.userName }}</b></h4>
                        <span style="display: flex;align-items: center;margin-left: 5%;justify-content: flex-start; width: 40%;">
                        <img src="../img/icons8-star-50 (2).png" style="width: 10px;height: 10px;" alt="">
                        <p :class="{iDontKnow: !oneTime.readStatus, cheapKing: oneTime.readStatus}" style="margin-left: 2%;">{{ oneTime.subject }}</p>
                        </span>
                        <p>{{ oneTime.messageDate.substring(5,10).replace("-", "/") }}</p>
                        </span>
                    </span>
                    <span v-show ="greedy && index == numberLover" style="border: 1px solid black; padding: 2px;margin-top: 2%;display: block;">
                        <span id="chchj" style="display: flex;align-items: center;justify-content: space-between;justify-content: flex-end;">
                            
                             <span >
                                <p style="font-size: 10px;color: lightgray;">{{ this.$store.state.user.firstName }}/ Inbox</p>
                             </span>
                         </span>
                         <div id="messageCuz" style="margin-top: 3%;">
                            <span style="display: flex;justify-content: space-between;">
                                <div>
                                    <p style="font-size: 11px;"><b style="color: lightgray;font-size: 11px;">To:</b> {{ this.$store.state.user.firstName + " "+ this.$store.state.user.lastName }}</p>
                                    <p style="font-size: 11px;"><b style="color: lightgray;font-size: 11px;">From:</b> {{ oneTime.firstName + " "+ oneTime.lastName}} </p>
                                </div>
                                <div style="display: flex;align-items: center;width: 10%;justify-content: space-evenly;">
                                  <p style="color: lightgray;font-size: 11px;">{{ withNumber(oneTime.messageDate.substring(5,7)).substring(0,4) }} {{ oneTime.messageDate.substring(8) }}</p> 
                                  <img v-motion-slide-visible-once-left v-show="greedy" id="closePage" @dblclick="closeChapter" style="border-radius: 50%;width: 20px;height: 20px;border: 1px solid lightgrey;padding: 2px;" src="../img/icons8-close-30 (1).png" alt=""> 
                                </div>
                            </span>
                            <p style="font-size: 12px;margin-top: 5%;border: 1px solid gray;padding: 4px;border-radius: 4px;">{{ oneTime.messagesContent }}</p>
                            <span style="display:flex;justify-content: center;margin-top: 2%;margin-bottom: 10px">
                                <span style="display: flex;width: 25%;border: 2px solid lightgrey;border-radius: 20px;justify-content: space-around;padding: 5px">
                                    <img class="catCh" @click="greatForward" style="width: 25px;height: 25px;" src="../img/icons8-reply-50.png" alt="">
                                    <img  style="width: 25px;height: 25px;" src="../img/icons8-forward-message-50.png" alt="">
                                    <img  style="width: 25px;height: 25px;" src="../img/icons8-dots-50.png" alt="">
                                </span>
                            </span>
                           <div v-show="greatColt" style="border: 1px solid black;display: flex;justify-content: center;">
                            <span style="display: block; width: 90%;">
                            <p style="font-weight: bold;">Re:{{oneTime.subject }}</p>
                            <p style="margin-top: 3%;">To <em style="font-style: normal;border: 1px solid lightgray;border-radius: 30px;padding: 4px">{{ oneTime.userName }}</em></p>
                            <hr style="margin-top: 2%;border-width: .5px;">
                            <textarea v-model="textReply" style="resize: none; margin-top: 1%;" name="" id="" cols="74" rows="10"></textarea>
                            <button @click="secondLooker(oneTime.userFrom, oneTime.subject, oneTime.apptId)" class="button blue"  style="width: 100%;">Send</button>
                            
                            
                        </span>
                           </div>
                         </div>
                    </span>

                </span>                
            </div>
            
            
            </span>

        </div>
        <span v-show="accountShower" v-motion-slide-visible-top style="display: block">
        <h3 style="font-weight: 500; font-size: 34px">Account and Settings</h3>
        <h3 style="margin-top: 4%;">Account Details</h3>
        <span v-show="options" style="display: block;margin-top: 3%">
            <fieldset @click="numberChanger" style="border-radius: 8px">
                <legend>First and Last Name</legend>
                <span style="display: flex;">
            <input  @keypress="anyWord" v-model="combineRock" style="width: 95%;border: none;outline: none;" type="text">
            <img style="width: 20px;height: 20px;" src="../img/icons8-close-24.png" alt="">
            </span>
            </fieldset>
            <h4 v-show="comeOnNow" style="border: 2px solid red;text-transform: uppercase;font-size: 14px; font-weight: bold; text-align: center; border-radius: 3px; margin-top: 2%;">Input only first and last name</h4>
            <fieldset style="border-radius: 8px;margin-top: 3%;">
                <legend>Email</legend>
                <span style="display: flex;align-items: center;justify-content: space-between;">
                    <input @keypress="anyWord" v-model="this.$store.state.user.email"  style="width: 90%;outline: none;border: none;"  type="text">
                    <p style="font-size: 10px;">{{ "change".toLocaleUpperCase() }}</p>
                </span>
            </fieldset>

            <fieldset style="border-radius: 8px;margin-top: 3%;">
                <legend>Phone Number</legend>
                <span style="display: flex;align-items: center;justify-content: space-between;">
                    <input @keypress="anyWord"  id="kiki" v-model="numberMan" style="width: 90%;border: none;outline: none;" type="text" :placeholder="whyThis.phoneNumber"  >
                    <p style="font-size: 10px">{{"change".toLocaleUpperCase()}}</p>
                </span>
            </fieldset>

            <fieldset style="margin-top: 3%;border-radius: 8px;">
              
                <legend>Password</legend>
                <span style="display: flex;justify-content: space-between;">
                    <input @keypress="anyWord" id="canyoulisten" v-model="this.$store.state.user.passWord" style="width: 86%;background-color: white;border: none;" type="password" :disabled="iAmWaiting" name=""  :placeholder="notWastingTime">
                    <img class="passArrow" @click="youSure" style="width: 25px;height: 25px;" src="../img/icons8-right-arrow-30.png">
                </span>
            </fieldset>
        <button @click="submitThis"  style="padding: 10px;color: white;font-weight: 700;width: 100%;margin-top: 3%;border:none;border-radius: 8px;" :disabled="checkMate" :class="{holdMan: aotYet, eren: noeTitants }" >Submit</button>
        
    </span>
         <h3 style="margin-top: 10%">Settings</h3>
         <h4 style="font-weight: bold;margin-top: 2%;">By default, appointment notifications are sent via text. To receive notifications via email instead, toggle the switch below.</h4>
         <span style="display: flex;margin-top: 2%">
            <h3 style="width: 90%;">E-mail</h3>
           <input :class="{noBlue: youwillChange==0, blueLife: youwillChange==1}" class="catchThis"  style="border-radius: 20px;width: 9%;cursor: pointer;" @click="changeToEmail"  type="range" :value="youwillChange" min="0" max="1" >
         </span>
        </span>
       <div  v-motion-slide-visible-top v-show="iNeedMyPicBud">
        <span style="display: flex; justify-content: space-between">
        <h3 style="font-size: 34px; font-weight: 500;">Gallery</h3>
        <span style="display: flex;margin-right: 1%;justify-content: space-evenly;width: 50%;">
        <button @click="addPhoto" class="button blue">Add Photos</button>
        <button class="button grey" >Archive</button>
        </span>
        </span>
        <h3 v-show="downByWhat" style="text-align: center;margin-top: 2%;">Add more photos!</h3>
        <div v-show="downByWhat"  style="border: 1px solid lightgrey;display: flex;justify-content: center; padding: 10px;border-radius: 10px;">
            <div  class="forFun" style="width: 80%;border-radius: 10px;">

                <span style="display: flex;justify-content: flex-end;width: 95%;margin-top: 2%">
                <img class="closer" @click="gameWinner"  style="background: white; padding: 5px;border-radius:50%;width: 30px;height: 30px" src="../img/icons8-close-24.png" alt="">
                </span>
                <span  style="display: flex;justify-content: center;">
                    <img class="closer" @click="otherOptions" style="width: 30px;height:30px;border-radius: 50%; padding:5px;background-color: gray" src="../img/icons8-add-photo-30.png" alt="">
                </span>
                <h3 style="text-align: center;margin-bottom: 7%">Add Photos/Videos</h3>
            </div>
        </div>
        <h3 v-show="thatGoneNow" v-motion-silde-visible-once-top style="border: 2px solid green;margin-top: 3%;text-align: center;padding: 2px">Image has been deleted</h3>
        <span v-for="(allThat, index) in dontDoThis" :key="index" style="border: 1px solid black;display: flex;margin-top: 2%;align-items: flex-start;border-radius: 10px;height: 221.5px">
            
            <div >
                <img style="border-top-left-radius: 10px;border-bottom-left-radius: 10px;" :src="gameChangerThanksN(allThat.hairImage)" alt="">
            </div>
            <div style="width: 85%;margin-top: 1%">
            <span style="display: flex;width: 100%;margin-left: 4%;justify-content: space-evenly;">
                <span style="display: flex;width: 70%;align-items: center">
                    <img style="width:30px;height: 30px;" src="../img/icons8-avatar-50.png" alt="">
                        <div style="margin-left: 3%">
                            <h5 style="font-weight: bold; font-size: 20px;">{{ allThat.subject }}</h5>
                        <span style="display: flex;align-items: center;">
                        <p style="font-size:12px">{{ forDay(allThat.datePosted) }} * {{allThat.datePosted}}</p>
                        <img v-show="allThat.shareable" style="width: 15px;height: 15px;margin-left: 2%" src="../img/icons8-open-source-50.png" alt="">
                        </span>
                  
                        </div>
                 </span>
                 <span style="display:flex;width: 20%;justify-content: space-evenly;align-items: center">
                    <img class="hoverEnd" style="width: 25px;height:25px" src="../img/icons8-dots-50.png" alt="">
                    <img class="hoverEnd" style="width: 25px; height: 25px;" src="../img/icons8-close-50 (1).png" alt="">
                </span>
            </span>
            <div style="display: flex;justify-content: center;margin-top: 3%;">
                <span style="display: block;width: 81%;">
                <p style="width: 80%;height: 60%">{{ allThat.comments }}</p>
                <div style="display: flex;justify-content: flex-end;">
                <span style="display: flex; width:30%; ;margin-top: 8%;justify-content: flex-end;justify-content: space-evenly;">
                <img @click="throwAway(allThat.imageId)" class="hoverWontEnd" style="width: 30px;height: 30px" src="../img/icons8-trash-50 (2).png" alt="">
                <img @click="iLikePrivacy(allThat.imageId)" class="hoverWontEnd" style="width: 30px;height: 30px" src="../img/icons8-private-50 (1).png" alt="">
                </span>
                </div>
                </span>
            </div>
        </div>
        

        </span>
       </div>
       <div v-motion-slide-visisble-once-top v-show="getYourFreakOn">

        <h3 style="font-size: 34px; font-weight: 500;margin-top: 1%">Reviews</h3>
        <span style="display: block">
            <span v-for="(lalaLand, index) in showMeKing" :key="lalaLand.reviewId" style="display: block;margin-top: 2%;border: 1px solid lightgray;padding: 2%;border-radius: 8px;">
                <span style="display: flex;justify-content: space-between;">
                    <span>
                    <img v-for="(yourDoom,index) in lalaLand.numberOfStars" :key="index" style="width: 25px;height: 25px;" src="../img/icons8-star-50.png" alt="">
                    </span>
                    <p>{{ forDay(lalaLand.datePosted)}}</p>
                </span>
                <h2 style="margin-top: 2%;" >{{lalaLand.hairStyle}}</h2>
                <h3>Braided By: {{ lalaLand.hairBraiderFirst}}</h3>
                <p style="margin-top: 3%;">{{ lalaLand.commentReview }}</p>

                <span style="display: flex;margin-top: 3%;justify-content: space-between;">
                    <span style="display: flex; width: 30%;justify-content: space-evenly;">
                    <button class="waste" disabled style="border-radius: 8px;border: none;padding: 10px;color: black;width: 40%"> {{ lalaLand.likes }} : <img style="width: 15px;height:15px"  src="../img/icons8-thumb-up-64.png" alt=""></button>
                    <button class="waste" style="border-radius: 8px;border: none;padding: 10px;color: black;width: 40%" disabled> {{ lalaLand.disLikes }} : <img style="width: 15px;height:15px"  src="../img/icons8-thumb-down-64.png" alt=""> </button>
                    </span>
                    <span style="width: 40%;display: flex;justify-content: space-evenly">
                        <button style="font-size: 12px;display: flex;align-items: center;" class="button red">Delete Review<img style="width: 25px;height: 25px" src="../img/icons8-trash-50 (5).png" alt=""></button>
                        <button style="font-size: 12px;display: flex;align-items: center" class="button blue" >Edit Review<img style="width: 25px;height: 25px" src="../img/icons8-edit-50.png"> </button>
                    </span>
                </span>
            </span>

        </span>

       </div>
       
        </div>
        
        
    </div>
     
</div>
<div id="catchMan" v-show="neymarMissed" style="width: 450px;height: 400px; border:1px solid black;position: absolute;top: 118.6%;left: 69%;background-color:white">
    <span style="display: flex;background-color: lightgray;justify-content: space-around;height: 10%;">
        <span style="width:70%;display: flex;align-items: center;">
            <h4 style="padding: 2px;width: 60%">{{ subNice == '' ? "New Message": subNice.substring(0,20)}}</h4>
        </span>
        <span style="display:flex;width:20%;align-items: center;justify-content: space-evenly;"> 
            <img style="width: 20px;height: 20px;" src="../img/icons8-horizontal-line-50.png" alt="">
            <img style="width: 20px;height: 20px" src="../img/icons8-expand-30.png" alt="">
            <img @click="eaglesSuck" style="width: 20px;height: 20px" src="../img/icons8-close-24.png" alt="">
        </span>
    </span>
    <span style="display: flex;justify-content: center">
    <div style="width: 80%;">
        <span style="display: flex;padding: 3px;margin-top: 3%;border-bottom: 1px solid lightgrey;justify-content: space-between">
            <h3 style="font-size: 15px;color: gray">To</h3>
            <input style="width:90%; border: none;outline: none" type="text" name="" id="">
        </span>
        <span style="display: flex;padding: 3px;margin-top: 2%;border-bottom: 1px solid lightgrey;justify-content: space-between">
            <h3 style="font-size: 15px;color: grey;">Subject</h3>
            <input v-model="this.subNice" style="width: 85%;border: none;outline:none;" type="text" name="" id="">
        </span>

        <textarea v-model="this.textMessage" style="margin-top:2%;width:100%;height: 230px;resize: none;border: none;outline: none;border-bottom:1px solid lightgrey" name="" id="">
        
        </textarea>
        <span style="margin-top: 2%;display: flex;justify-content: space-between;align-items: center;">
            <span style="display: flex; width:45%;align-items: center;">
            <button style="border-radius: 2px; width:80%" class="button blue">Send</button>
            </span>
            <span style="display: flex">
            <img @click="cancelWord" v-show="myFoot" @mouseleave="changeFish" style="width:20px;height: 20px;display: block;" src="../img/icons8-trash-50 (2).png" alt="">
            <img v-show="dogFish" @mouseenter="changeDog" style="width: 20px;height: 20px;display: block" src="../img/icons8-trash-50.png" alt="">
            </span>
        </span>

    </div>
</span>
</div>
</div>


</template>
<script>
import serviceStuff from '@/Service/serviceStuff';
import axios, { all } from 'axios';
export default {
    data(){
        return{
            neymarMissed: false,
            subNice : '',
            textMessage: '',
            timeValue: '',
            otherCase: true,
            iDontPlay: false,
            loveYou: true,
            chiefKeef: false,
            newBraider: '',
            cat: -1,
            whoClicked : false,
            timeOptions: '',
            changeDate: '',
            getYourFreakOn: false,
            downByWhat: false,
            iNeedMyPicBud: false,
            iControlThis: false,
            iAmWaiting: true,
            options: true,
            theyDidnt: true,
            theyDid: false,
            accountShower: false,
            youwillChange: 0,
            aotYet: false,
            noeTitants: true,
            numberMan:'',
            combineRock: this.$store.state.user.firstName +" "+this.$store.state.user.lastName,
            ihateKid: this.$store.state.user.firstName +" "+this.$store.state.user.lastName,
            files: [],
            niceDeed: true,
            numberLover: -1,
            greedy: false,
            greatColt: false,
            coltHuh: false,
            textReply: '',
            youMight: true,
            holder: false,
            catMan: '',
            changeTime: -2,
            cheeseHead: true,
            killMan: false,
            whyKid: true,
            messageToSend: '',
            textMan: -1,
            seachWord : 'Pending',
            firstOne: true,
            secondOne:false,
            thirdOne: false,
            waitfornice: false,
            niceArray: [],
            jeffHardy: false,
            mattHardy: false,
            wweWasFun: false,
            iThink: false,
            nice: true,
            textGet:false,
            soMuch:true,
            look: false,
            gameTime: true,
            users: {},
            idToUse: this.$store.state.user.userId,
            checkOne: true,
            checkTwo:false,
            damnYou:true,
            notDamnYou:false,
            chechCheck:true,
            notCheck:false,
            whyMe:true,
            notWhyme:false,
            whaki:true,
            NotWhaki:false,
            lookAtMessages: [],
            imageToNice: [],
            iWillNotStart: false,
            stopGameChanger: false,
            getReviewCuz: [],
            userCase: [],
            catDaddy: false,
            myFoot: false,
            dogFish: true,
            worldBeater: '',
            messageFade:true,
            thatGoneNow: false
        
        }
    },
    methods:{
        throwAway(number){
           serviceStuff.imageGone(number).then((e)=>{
            if(e.data){
                this.thatGoneNow = e.data
                this.imageForAll()
            }
           })
        },
        changeAll(){
            if(this.worldBeater==''){
            this.worldBeater = 'cat'
            this.messageFade = false
            }else{
                this.worldBeater = '',
                this.messageFade = true
            }
        },
        eaglesSuck(){
            this.neymarMissed = false
        },
        neymarWorld(){
            this.neymarMissed = true
         
        },
        cancelWord(){
            this.textMessage = ''
        },
        changeDog(){
            this.myFoot = true,
            this.dogFish = false
        },
        changeFish(){
            this.myFoot = false,
            this.dogFish = true
        },
        bonnyJones(number){
            let mapStuff = new Map()
            let numberTo = 12
            let numberCase = 0
            while(numberTo<24){
                mapStuff.set(numberTo,numberCase)
                numberTo+=1
                numberCase+=1
            }
            return mapStuff.get(number)           
        },
        switchAround(){
            this.timeOptions = ''
            if(this.timeValue!=''){
                this.timeValue = ''
            }
        },
        
        mindChanger(){
            this.chiefKeef = false,
            this.loveYou - true,
            this.iDontPlay = false
            this.otherCase = true
        },
        sosaBaby(){
            this.chiefKeef = true
            this.iOk = true
            this.iDontPlay = true
            this.otherCase = false
        },
        userHair(){
            serviceStuff.getBraider().then((e)=>{
                this.allCase = e.data
                this.catDaddy = true
            })
        },
        iclicked(numberFam){
            this.whoClicked= true
            this.cat = numberFam
        },
        iGonnaStay(){
            this.timeOptions = true
        },
        beGone(number){
        
            serviceStuff.iLied(number).then((e)=>{
                if(e.data == 'Cancelled'){
                    this.serviceCreator()
                }
            })
        },
        inYourFace(){
            this.getYourFreakOn = true
            this.killMan = false,
            this.whyKid =false
            this.iNeedMyPicBud = false,
            this.accountShower = false
        },
        reviewGetter(){
        serviceStuff.thisLasthaha(this.$store.state.user.userId).then((e)=>{
            this.getReviewCuz = e.data
            this.stopGameChanger = true
        })
        },
        addPhoto(){
            this.downByWhat = true
        },
       uploadFiles(){
        const {google, networksecurity_v1beta1} = require('googleapis')

        const path = require('path')
        const fs = require('fs')



        const CLIENT_ID = '548503046539-8di1rviilth04negjacj35nuge1u1bds.apps.googleusercontent.com'
        const CLIENT_SECRET = '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';
        const REDIRECT_UIR = 'https://developers.google.com/oauthplayground';

        const REFRESH_TOKEN = '1//040Jzj67-NYZACgYIARAAGAQSNwF-L9Irrs01GWp9FeUyAVtYoXgWYVaJDvFk2Vx8bBJlx5GU0PrPNNRRhbidrRIWBl-pKHjmlAI';

        const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET, 
        REDIRECT_UIR
        )

        oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

        const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
        })

        const filePath = path.join(__dirname, 'src/img/111221-braided-hairstyles-black-women-social-666f0d56d8784b8faab9171c6b8db6d8.jpg')
       
        async ()=> ({
        
             response:  drive.files.create({
                requestBody: {
                    name: 'niceGirl.jpg',
                    MimeType: 'image/jpg'
                },
                media: {
                    MimeType: 'image/jpg',
                    body: fs.createReadStream(filePath)
                }
            })
        
        }.catch((error)=>{
            console.log("I Here Though")
        })
    
    )
       },
       otherOptions(){
        window.showOpenFilePicker()
       },
       gameWinner(){
        this.downByWhat = false
        
       },

       gameChangerThanksN(takeWord){
        let wordNow = "https://drive.google.com/thumbnail?id="
        let iOwnYou = takeWord.split("/")[5]
        return wordNow+iOwnYou
       },

       forDay(damnKid){
        let currentDayBud =new Date (Date.now())
        let whaKid = currentDayBud.getDay()
        let pastDay = new Date (damnKid)
        let iDontLike = pastDay.getDay()
        let valChamp = whaKid-iDontLike

    
        if(valChamp<7 && valChamp> 0){
            return valChamp+" day(s) ago"
        }
        if(valChamp<0){
            return "Present**"
        }
            
        return parseInt(valChamp/7) + " weeks ago"
       
        
       },

       imageForAll(){
            serviceStuff.myImages(this.$store.state.user.userId).then((e)=>{
                this.imageToNice = e.data
                this.iWillNotStart = true
            })
       },


       confirmedGuy(){
        this.iAmWaiting = false,
        this.theyDid = false,
        this.theyDidnt = true,
        this.options = true
       },

       youSure(){
        this.theyDid = true
        this.theyDidnt = false
        this.options = false
       },

       accountChanger(){
        this.accountShower = true
        this.killMan =false,
        this.whyKid = false
        this.iNeedMyPicBud = false
        this.getYourFreakOn = false
    },

       iChangedReally(){
        this.theyDid= false,
        this.theyDidnt = true,
        this.options = true
       },

       youReallyThough(){
        this.iNeedMyPicBud = true
        this.killMan = false,
        this.whyKid = false,
        this.accountShower = false
        this.getYourFreakOn = false
       },


       submitThis(){
        if(this.combineRock.split(" ").length==2){
           
            let obToGO = {
                firstName: this.combineRock.split(" ")[0],
                lastName: this.combineRock.split(" ")[1],
                email: this.$store.state.user.email,
                passWord: this.$store.state.user.passWord,
                phoneNumber: this.numberMan,
            }
         axios.put(`http://localhost:8080/userUpdate/${this.$store.state.user.userId}`, obToGO).then((e)=>{
            this.iControlThis = e.data
         })
         this.iAmWaiting = true
         this.$store.state.user.passWord = ''
         this.$router.go(0);
       }
    }
       ,
       
       handle(event){
        this.files = Array.from(event.target.files)
       },

       anyWord(){
        
        this.aotYet = true,
        this.noeTitants = false
       
    },

    changeToEmail(){
        if(this.youwillChange==0){
            this.youwillChange = 1
        }else{
            this.youwillChange = 0

        }
    },

       numberChanger(){
            if(this.combineRock != this.ihateKid ){
                this.aotYet = true,
                this.noeTitants = false
            }

       },

      

        secondLooker(number,word,thirdNumber){  let holdAll = {
    
                userFrom: this.$store.state.user.userId,
                userTo: number,
                subject: "Re: "+ word,
                messagesContent: this.textReply,
                apptId: thirdNumber,
                readStatus: false
            }
            serviceStuff.messageToGo(holdAll).then((e)=>{
                if(e.data){
                    this.coltHuh = false
                    this.catMan = false,
                    this.$router.go(0)
                }
            })

        },


        replyMan(number, word, thirdNumber){
            
            let holdAll = {
                userFrom: this.$store.state.user.userId,
                userTo: number,
                subject: "Re: "+ word,
                messagesContent: this.textReply,
                apptId: thirdNumber,
                readStatus: false
            }
            serviceStuff.messageToGo(holdAll).then((e)=>{
                if(e.data){
                    this.coltHuh = false
                    this.catMan = false,
                    this.getFun();
                }
            })
        },

        appTMan(){
            this.whyKid = true,
            this.killMan = false
            this.accountShower = false
            this.iNeedMyPicBud = false
            this.getYourFreakOn = false
        },

        greatForward(){
            this.greatColt = true
        },

        forWard(){
            this.coltHuh = true
        },
      closeCheese(){
        this.catMan = false
        this.cheeseHead = true
        this.youMight = true
        this.getFun()
      },

      closeChapter(){
        this.greedy = false
        this.numberLover = -1,
        this.cheeseHead = true,
        this.niceDeed = true,
        this.$router.go(0)
      },

      openOld(number, numbertow){
        this.greedy = true
        this.numberLover = number
        this.niceDeed = false,
        this.cheeseHead = false,

        serviceStuff.updateMessage(numbertow).then((e)=>{
            console.log("I dont want feel")
        })
      },

      openMessage(number, numberTow){
       
        this.cheeseHead = false
        this.changeTime = number
        this.catMan = true
        this.youMight = false
        serviceStuff.updateMessage(numberTow).then((e)=>{
            console.log("Y")
        })
      },
        getFun(){
            serviceStuff.messageToGet(this.$store.state.user.userId).then((e)=>{
                this.lookAtMessages = e.data
                this.holder = true
            })
        },
        changePage(){
            this.whyKid = false
            this.killMan = true
            this.accountShower = false
            this.iNeedMyPicBud = false
            this.getYourFreakOn = false
        },
        messageGo(number,appId){
            if(this.messageToSend.length>1){
                let heroCat = {
                    userFrom: this.$store.state.user.userId,
                    userTo: number,
                    subject: "Appointment Update",
                    messagesContent: this.messageToSend,
                    apptId: appId,
                    readStatus: false
                }
                serviceStuff.messageToGo(heroCat).then((e)=>{
                    if(e.data){
                        this.$router.go(0)
                    }
                })

            }else{
                this.textMan = -1
            }
        },
        textshowman(number){
            this.textMan = number
            
        },
        firstChanger(){
            this.firstOne = true,
            this.secondOne =false,
            this.thirdOne = false
            this.seachWord = 'Pending'
        },
        secondChanger(){
            this.firstOne = false,
            this.thirdOne = false,
            this.secondOne = true
            this.seachWord = 'Completed'
        },
        thirdChanger(){
            this.firstOne = false,
            this.secondOne = false,
            this.thirdOne = true,
            this.seachWord = 'Cancelled'
        },

        serviceCreator(){
            serviceStuff.apptAll(this.$store.state.user.userId).then((e)=>{
                this.niceArray = e.data
                this.waitfornice = true
            })
        },
        withNumber(number){
            let cashMoney = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return cashMoney[number-1]
        },


        switchEm(){
            this.checkOne =false
            this.checkTwo= true
            this.iThink=true
            
        },
        sidePiece(){
            this.checkOne =true
            this.checkTwo =false
            this.iThink = false
        },
        sameStuff(){
            this.wweWasFun=true
            this.damnYou =false
            this.notDamnYou= true
        },
        notSameSuff(){
            this.wweWasFun=false
            this.damnYou =true
            this.notDamnYou =false
        },
        howMany(){
            this.mattHardy = true
            this.chechCheck =false
            this.notCheck= true
        },
        notHowMany(){
            this.mattHardy = false
            this.chechCheck =true
            this.notCheck =false
        },
        willIWin(){
            this.jeffHardy = true
            this.whyMe =false
            this.notWhyme= true
        },
        winner(){
            this.jeffHardy = false
            this.whyMe =true
            this.notWhyme =false
        },
        shouldNot(){
            this.whaki =false
            this.NotWhaki= true
            this.textGet = true
        },
        silly(){
            this.whaki =true
            this.NotWhaki =false
            this.textGet = false
        },
       
    },
    computed:{
        chooperOfHair(){
            let jonesBone = []
            return jonesBone = this.allCase
        },

        showMeKing(){
            let holyMoly = []
            return holyMoly = this.getReviewCuz
        },
        dontDoThis(){
            let holdOn = {}
            return holdOn = this.imageToNice
        },
        comeOnNow(){
            if(this.combineRock.split(" ").length>2){
                return true
            }
            return false
        },
        notWastingTime(){
            if(this.iAmWaiting){
                return "Click the arrow to change your password"
            }
            return "Change Password"
        },

        displaymessage(){
            let jamesHarden = [];
            return jamesHarden = this.lookAtMessages.filter((e)=>{
                if(!e.readStatus){
                    return e
                }
            })
        },

        oldandDusty(){
            let niceTime = [];
            return niceTime = this.lookAtMessages.filter((e)=>{
                if(e.readStatus){
                    return e
                }
            })
        },
        doneMessingAround(){
           let catCat = []
                return catCat =  this.lookAtMessages.filter((e)=>{
                    if(e.archive){
                        return e
                    }
                })
            },
       
        whyThis(){
            let getIt = {}
            return getIt = this.$store.state.user
        },
        willyoudisplayMonkey(){
            let meanGuy  = []
            return meanGuy=this.niceArray.filter((e)=>{
                if(e.apptStatus.includes(this.seachWord)){
                    return e
                }
            })
        },
        
        
    },
    created(){
        this.serviceCreator();
        this.getFun();
        this.imageForAll();
        this.reviewGetter();
        this.userHair();
    }

}
</script>
<style scoped>

.iDontKnow{
    background-color: rgb(217, 196, 236);
}
.darkRed{
    background-color: rgb(255, 25, 25);
}


.waste{
    background-color: rgba(128, 128, 128, 0.514);
}


.closer:hover{
    transform: scale(1.03);
    transition: .2s ease-out;
    cursor: pointer;

}
.forFun:hover{
    background-color: rgba(128, 128, 128, 0.418);
   
}

.forFun{
    background-color: lightgray;
}

.hoverWontEnd:hover{
    cursor: pointer;
    transform: scale(1.5);
    border: 1px solid lightgray;
    padding: 2px;
    border-radius: 50%;
}

.hoverEnd:hover{
    background: lightgray;
    border-radius: 40%;
;
    cursor: pointer;
}
.hoverEnd{
    padding: 2px
}


#catHer{
    animation: realSlower 2s linear;
    margin-top: -100%;
}

@keyframes realSlower {
    0%{
        margin-top: -100%;
    }

    25%{
        margin-top: 0%;
    }

    50%{
        margin-top: 0%;
    }

    100%{
        margin-top: -100%
    }
}

.normal{
    overflow-y: scroll;
    overflow-x:hidden ;
}

.notNormal{
    overflow: hidden;
}

.blackNight{
    background: rgb(12, 12, 12);
}

.passArrow:hover{
    cursor: pointer;
}

.noConfirm{
    background: white;
}

.confirmByThem{
    background: rgba(0, 0, 0, 0.87);
}


.blueLife{
    transition: .2s ease-out;
    background: #3e8547ec;
    -webkit-appearance: none;
    padding: 3px;
   
   
}

.blueLife::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
}
.noBlue:hover{
    background-color: darkgray;
}

.blueLife:hover{
    background-color: darkgreen;
}
.noBlue{
    transition: .2s ease-out;
    -webkit-appearance: none;
    background:#d3d3d3 ;
    outline: none;
    padding: 3px;
}

.noBlue::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white ;
}

.eren{
    background-color: rgba(100, 100, 236, 0.863);
}

.holdMan{
    cursor: pointer;
    background-color: rgb(0, 183, 255);
}

#canyoulisten::placeholder{
    color: black;
}


#kiki::placeholder{
    font-size: 14px;
}


.catCh:hover{
    cursor: pointer;
}

.cheapKing{
    font-weight: normal;
}
.iDontKnow{
    font-weight: bold;
}

#closePage:hover{
    transform: scale(1.2);
    transition: .5s ease-in-out;
    cursor: pointer;
    background-color: rgb(231, 229, 229);

}
#messageCuz{
    box-shadow: 10px 0px 5px rgba(0, 0, 0, 0.57);
}

#chchj{
    background-color: rgba(128, 128, 128, 0.045);
}

.hoverFun:hover{
    background-color: rgba(135, 206, 250, 0.248);
    cursor: pointer;
}

.asds:hover{
    cursor: pointer;
}

.nostuffman{
    overflow: none;
}

.red{
    background-color:  rgba(255, 0, 0, 0.678);
}

.red:hover{
    cursor: pointer;
    background-color: darkred;
}

.blue{
    background-color: rgb(57, 120, 214);
}

.blue:hover{
    cursor: pointer;
    background-color: darkblue;
}


.green{
    background-color: #3e8547ec;
}

.green:hover{
    cursor: pointer;
    background-color: darkgreen;
}

.button{
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    width: 33%;

}

.grey{
    background: lightgray;
}

.grey:hover{
    cursor: pointer;
    background: darkgray;
}


.heckMan{
    color: black;
}
.textSwitch{
    text-shadow: 1px 1px .3px white;
    transform: scale(1.01);
    transition: .5s ease-in;
}
.damnThatGuy{
    
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
   
    padding: 4%;
}

.damnThatGuy:hover{
    cursor: pointer;
    background-color: rgba(97, 96, 96, 0.048);
}


.hoveStuff{
    width: 40px;
    height: 40px;
}

.whoaBig{
    width: 40px;
    height: 40px;
}

.george{
    background-color: rgba(27, 27, 182, 0.651);
    color: white;
    
}

.notGeorge{
    color: white;
    background-color: rgba(255, 0, 0, 0.678);
}

</style>