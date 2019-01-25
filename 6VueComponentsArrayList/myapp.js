
Vue.component('books',{
    template:'#books',
    props:['listbooks']
});


var app=new Vue({
    el:"#app",
    data:{listbooks:[{author:'David Flanagan',
            title:'Js Guide. Part1',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam eveniet numquam quas quos, ratione unde! Corporis error fugiat iste laborum laudantium molestias placeat quaerat repellat sit, sunt voluptates voluptatibus!'},
{author:'David Flanagan',
    title:'Js Guide. Part2',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam eveniet numquam quas quos, ratione unde! Corporis error fugiat iste laborum laudantium molestias placeat quaerat repellat sit, sunt voluptates voluptatibus!'},
{author:'David Flanagan',
    title:'Js Guide. Part3',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam eveniet numquam quas quos, ratione unde! Corporis error fugiat iste laborum laudantium molestias placeat quaerat repellat sit, sunt voluptates voluptatibus!'}]

    }
});

