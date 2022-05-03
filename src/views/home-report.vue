<template setup>
    <div class="container">
            <h1>Generador de reportes TK</h1>
            <div class= "report_container">
                  <div class="report_head">
                    <div> Titulo</div>
                    <div> Fecha de creacion</div>
                    <div> Accion</div>
                        
                  </div>
                  
                    <div class="separator_container">
                        <div class="separetor"></div>
                    </div>     
                    <div class="report_head" v-for="report in reports" :key="report.id">
                            <div class="element box"> {{report.title}}</div>
                            <div class="element"> {{report.created_at}}</div>
                            <div class="element box"> 
                                <button class="btn" @click="downloadReport(report.id)">Descargar</button>
                            </div>
                     </div>
                    
            </div>
            <button class="btn"> 
                <router-link class="btn-container" to="/create">Crear reporte</router-link>
            </button>

    </div>
    
</template>

<script>

import listReport from '../services/ReportUser/ListReport.js';
import downloadReports from '../services/ReportUser/DownloadReport.js';

export default {
    components: {
       
    },
    data() {
        return {
            reports:[]
        }
    },
    methods: {
        downloadReport(id) {
            downloadReports(id).then(response => {
            const fileUrl= window.URL.createObjectURL( new Blob([response.data]));
            const fileLink = document.createElement('a');
            fileLink.href = fileUrl;
            fileLink.setAttribute('download', 'reporte.xlsx');
            document.body.appendChild(fileLink);
            fileLink.click();
            }).catch(error => {
                console.log(error);
            })
        }
       
    },
    mounted() {
        console.log("mounted")
        listReport().then(response => {
           
            this.reports = response;
            console.log(this.reports);
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
    padding: 12px 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    text-decoration-style: none;
    color: white;
    font-size:20px;

}
button:visited{
    color: black;
    text-decoration-style: none;
    text-decoration: none;
}
input{
    border:0;
    outline: none;
}
.btn-container{
    color: black;
    text-decoration-style: none;
    text-decoration: none;
}
.report_container {
    display: flex;
    flex-direction: column;
    background: #4563E6;
    justify-content: center;
    color: white;
    width: 80vw;
    border-radius: 15px;
    
}
.report_head{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    width: 80vw;
    text-align: center
}
.separetor{
    width: 60vw;
    height: 5px;
    background:grey;
}
.separator_container{
    display: flex;
    justify-content: center;
}

.element{
    width: 300px;
}
.box{
    display: flex;
    justify-content: center;
    
}
.btn{
    cursor: pointer;
}
@media(max-width: 768px){
    .report_container{
        width: 100vw;
    }
    .report_head{
        width: 100vw;
    }
    .element{
        width: 100vw;
    }
    .separetor{
        width: 100vw;
    }
    .separator_container{
        width: 100vw;
    }
    
}
</style>