
Vue.component('task',{
    template:'<h2>{{message}}</h2>',
    props:['message']
});


var app=new Vue({
    el:"#app",
});

