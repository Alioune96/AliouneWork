<template>
    <div id="mainGuy">
        <div style="width: 98%;margin-left: 1%;">
            
            <span style="display: flex;width: 20%;justify-content: space-between;">
                <h4 class="all">About Us</h4>
                <h4 class="all">FAQ</h4>
                <h4 class="all">Careers</h4>
                <h4 class="all">Contact</h4>
            </span>
            
            <hr id="jja" style="width: 100%;margin-top: 1.35%;">
            <span style="display: flex;margin-top: 2%;justify-content: space-between;">
                <span style="width: 23%;display: flex;justify-content: flex-start;align-items: center;">
                    <img style="width: 40px;height: 40;" src="../img/long-hair-woman-with-pony-logo-silhouette-vector-48961154-removebg-preview.png" alt="">
                    <p style="font-size: 10px;margin-left: 4%;">&copy; Maty African Hair Braiding, Inc.&trade;</p>
                </span>
                <span style="display: flex;width: 15%;justify-content: space-evenly;">
                   <a href="https://www.instagram.com/matys_african_hair_braiding/"><img class="tamn" src="../img/icons8-instagram-50.png" alt=""></a>
                   <a href="tel:+2152008992"><img class="tamn" src="../img/icons8-phone-number-50.png" alt=""></a> 
                  <a href="mailto:bintadiallo6@yahoo.com"><img class="tamn" src="../img/icons8-email-50.png" alt=""></a> 
                </span>
            </span>

        </div>
        
       
    </div>

</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
#jja{
    border: 1px solid rgba(211, 211, 211, 0.479);
  border-top-width: px;
}
#mainGuy{
    height: 150px;
    background-color: rgb(46, 45, 45);
    align-items: center;
    display: flex;
    align-items:flex-end;
    
}

p{
    color: white;
}

.all{
    color: white;
    margin-top: 8%;
    font-size: 12px;
}

.tamn{
    width: 40px;
    height: 40px;
    background-color: lightgray;
    border-radius: 30%;
    padding: 10px;
}

</style>