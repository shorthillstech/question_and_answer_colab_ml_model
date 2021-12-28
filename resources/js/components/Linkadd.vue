<template>
    <div class="container-fluid">
        <div class="color">
            <div class='center'>
                <h1 class='main_head'>Add your link</h1>
            </div>
        </div>
        <div class="container">
            <div class="row m-5">
               <div class="col-4 name">
                   Akbar link
                </div>
                <input class="col-4" v-model="akbar" type="text">
                <button class="btn btn-primary col-4" @click="saveItem(0)">Save</button> 
            </div>
        </div>
        
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            akbar: '',
        }
    },
    created(){
        this.check();
    },
    methods:{
        saveItem(id){
        var a;
        if (id==0) {
            a = {name:'akbar',url:this.akbar}
        }
            
        axios.post('/hello',a).then(response => this.check())
    },
    check(){
        axios.get('/hello/akbar').then(response => this.akbar=response.data[0]['url']);
    }
    }
};
</script>

<style scoped>
.color{
    background-color: rgb(255, 255, 93);
    height: 40vh;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}
.center{
    text-align: center;
}
.main_head{
    font-size: 55px;
}
.br{
 outline: none;
}
label{
    font-size: 20px;
}

</style>
