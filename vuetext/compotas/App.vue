<template>
    <div id="app">
        <h1 v-text="title"></h1>
    </div>
</template>

<script>
    export default{
        data:function () {
            return{
                title:'<span>?</span> this is a todo list'
            }
        }
    }

</script>


<style>
    html{
        height: 100%;
    }
    body{
        display:none;
        height: 100%;
    }
</style>