var avalon = require('avalon')

/**
 * 动画效果不知道怎么加
 */
//avalon.effect('modal')

avalon.component('bs-modal',{   
    template: __inline('./template.html'),
    defaults: {  
        title: '',
        visible: false,
        appendToBody: true,
        onClose: function(){},
        close: function(){ 
            var ret = this.onClose()
            if(ret !== false){  
                this.visible = false
            }
        },
        onInit: function(){
            this.$watch('visible',function(val){
                avalon(document.body).toggleClass('modal-open',val)
            })
        },
        onReady: function(){ 
            if(this.appendToBody){  
                document.body.appendChild(this.$element)
            }
        }
    },
    //soleSlot: 'content'
})