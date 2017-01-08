var avalon = require('avalon')

avalon.component('bs-button',{  
    template: __inline('./template.html'),
    defaults: { 
        type: 'default', 
        size: '', 
        block: false, 
        active: false,
        disabled: false,
        $computed: {    
            buttonClass: function(){
                var type = 'btn-' + this.type
                var size = this.size ? ('btn-' + this.size) : ''
                var block = this.block ? 'btn-block' : ''
                var active = this.active ? 'active' : ''
                return ['btn',type,size,block,active]
            }
        }
    },
    soleSlot: 'buttonText'
})