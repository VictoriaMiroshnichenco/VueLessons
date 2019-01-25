var app=new Vue({
    el:"#app",
    data:{
        progectName:"Todo list",
        todoList:[],
        addNewItem:"",
        edit:"",
        errors:""
    },
    methods:{
        add:function(){
            if(this.addNewItem!==""){
                this.errors="";
                let guid = countId++;
                let todoItem = new TodoItem(guid,this.addNewItem);
                this.todoList.push(todoItem);
                this.addNewItem='';
            }else{
                this.errors="Empty field";
            }
        },
        deleteItem:function(id){
            this.errors="";

            var newTodoList=this.todoList.filter(currectItem => currectItem.id!==id);
            this.todoList=newTodoList;


        },
        editItem:function(id){

            this.errors="";
            var itemToEdit =this.todoList.find(curr=>{

                return curr.id==id;
            });

            if(itemToEdit) {
                itemToEdit.editMode = true;
            }

        },
        saveItem:function(id) {
            this.errors = "";
            var itemToEdit = this.todoList.find(curr => {

                    return curr.id == id;
                });

            if (itemToEdit) {
                if(itemToEdit.text){
                    itemToEdit.editMode = false;
                }else{
                    this.errors="Empty field";
                }

            }

        }
    }

})

    class TodoItem{
        constructor(id,text){
            this.id=id;
            this.text=text;
            this.editMode=false;
        }
    }

var countId=0;