<template setup>
    <div class="container">
            <h1>Generador de reportes TK</h1>
            <ListReport></ListReport>
            <button class="btn"> 
                <router-link to="/create">Crear reporte</router-link>
            </button>

    </div>
    
</template>

<script>
import ListReport from '../components/list-report.vue';
import listReport from '../services/ReportUser/ListReport.js';

export default {
    components: {
        ListReport
    },
    data() {
        return {
            data:[]
        }
    },
    methods: {
       
    },
    mounted() {
        listReport().then(response => {
           
            this.data = response;
            console.log(this.data)
        }).catch(error => {
            console.log(error);
        })
    },

}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #FFBE12;
    border-radius: 50px;
    padding: 12px 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    text-decoration-style: none;
    color: black;
    font-size:20px;
}
button:visited{
    color: black;
    text-decoration-style: none;
    text-decoration: none;
}

</style>