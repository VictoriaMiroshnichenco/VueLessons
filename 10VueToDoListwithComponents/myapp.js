const insertItemComponent={template:'<h1>insertItem</h1>'};
const listItemsComponent={template:'<h1>listItems</h1>'};
var app=new Vue({
    el:"#app",
    data:{
        message:"Hello!"
    },
    components:{
        'insertitem':insertItemComponent,
        'listitems':listItemsComponent
    }


})