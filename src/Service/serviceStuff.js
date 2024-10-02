import axios from "axios";

const buddy = axios.create({
    baseURL: import.meta.env.VITE_REMOTE_API
})

export default{
    getstyle(){
        return buddy.get('/hair')
    },
    crazyMethod(object){
        return buddy.post('/madeAppt', object)
    },
    justOne(numberKid){
        return buddy.get(`/hair/${numberKid}`)
    },
    reviewHair(number){
        return buddy.get(`/getreview/${number}`)
    },
    testForMap(){
        return buddy.get('/getHighest')
    },
    getHairDetail(number){
        return buddy.get(`/hairDetail/${number}`)
    },
    logOne(logger){
        return buddy.post('/userLog', logger)
    },
    signUp(jamesKid){
        return buddy.post('/userCreated', jamesKid)
    },
    damnHistory(id){
        return buddy.get(`/userHistory/${id}`)
    },
    apptAll(id){
        return buddy.get(`/userAccount/${id}`)
    },
    messageToGo(object){
        return buddy.post('/messageSend', object)
    },
    messageToGet(id){
        return buddy.get(`/messages/${id}`)
    },
    updateMessage(id){
        return buddy.put(`/messagesUpdate/${id}`)
    },
    updateUser(object, id){
        return buddy.put(`/userUpdate/${id}`, object)        
    },
    myImages(id){
        return buddy.get(`/imageById/${id}`)
    },
    needReview(){
        return buddy.get('/getreview')
    },
    iLikePost(id,two){
        return buddy.put(`/addLike/${id}/${two}`)
    },
    iHatePost(id, secondTwo){
        return buddy.put(`/hatePost/${id}/${secondTwo}`)
    },
    imagGallery(){
        return buddy.get("/imageGallery")
    },
    thisLasthaha(id){
        return buddy.get(`/review/${id}`)
    },
    iLied(id){
        return buddy.put(`/cancelled/${id}`)
    },
    getBraider(){
        return buddy.get('/getList')
    },
    imageGone(id){
        return buddy.delete(`/imageGone/${id}`)
    }

}
