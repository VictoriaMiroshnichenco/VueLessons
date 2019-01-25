var app=new Vue({
    el:"#app",
    data:{

        title:"Title",
        sizeToggleMyVar:false,
        isRoundedMyVar:false,
        disabledMyVar:false,
        fontColor:"#ccc",
        backgroundColor:"yellow"
    },
    computed:{
        computedstyles:function(){
            return{
                color:this.fontColor,
                background:this.backgroundColor
            }

        }
    }
})