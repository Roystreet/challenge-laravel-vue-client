<template>
    
        <div class="form_container">
            <h2> Reporte por fecha de nacimiento</h2>
            <h3> ingresa los siguientes datos apra generar tu reporte</h3>
            <form class="form_container_input">
                <fieldset>
                    <legend>Descripcion del reporte</legend>
                    <input  type="text" name="title" v-model="title">
                </fieldset>
                <h4> fecha de nacimiento </h4>
                <div class="date_container">
                    <fieldset>
                    <legend>inicio</legend>
                    <input  type="date" name="start" v-model="start">
                    </fieldset>
                      <fieldset>
                    <legend>fin</legend>
                    <input  type="date" name="end" v-model="end">
                    </fieldset>
              </div>
              
              <input type="submit" value="Generar reporte" @click="createReport"/>

            </form>

        </div>
</template>

<script>
import generateReport from "../services/ReportUser/GenerateReport.js";

export default {
    data() {
        return {
            title: '',
            start: '',
            end: '',
        }
    },
    methods: {
         createReport() {
            generateReport({title:this.title,start: this.start,end: this.end}).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
         }
    }
}
</script>

<style>

.form_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding:15px;
    border: solid 1px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
}
.date_container{
    display: flex;
    justify-content: space-evenly;
}



</style>