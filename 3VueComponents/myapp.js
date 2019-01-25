
Vue.component('task',{
    template:'<li>1 task</li>'
});
Vue.component('taskSlot',{
    template:'<li><slot></slot></li>'
});

var app=new Vue({
    el:"#app",
    data:{
        message:"Hello!"
    }
});

