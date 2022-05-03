<template>
  <div> 
    <nav id="nav_bar"> 
        <div> 
            <h1><span style="color: #FFBE12">Tk</span>ambio</h1>
        </div>
    </nav>
     <router-view/>
     
  </div>
 
</template>

<script>
export default {

}
</script>

<style>
#nav_bar {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #02ADF1 -2.37%, #4562E6 124.84%, #4563E6 124.84%);
    margin: 0px;
    color: white;
    font-size: 30px;
    font-family: "newfont";

}
 
</style>
