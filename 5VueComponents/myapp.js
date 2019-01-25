
Vue.component('books',{
    template:'#books',
    props:['title',"author",'content']
});


var app=new Vue({
    el:"#app",
    data:{author:'David Flanagan',
            title:'Js Guide',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam eveniet numquam quas quos, ratione unde! Corporis error fugiat iste laborum laudantium molestias placeat quaerat repellat sit, sunt voluptates voluptatibus!'

    }
});

