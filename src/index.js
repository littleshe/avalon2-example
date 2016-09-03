//http://www.sucaihuo.com/jquery/0/34/demo/
avalon.component('ms-area-select', {	

	template: __inline('template.html'),

	defaults: {	
		data: [],
		selectedValue: [-1],
		change: function(e,item,cur){
			var el = e.target
			var option = el.options[el.selectedIndex]
			var next = cur+1

			this.selectedValue.set(cur,option.value)

			while(next < this.data.length){	
				this.data.removeAt(next)
				this.selectedValue.removeAt(next)	
			}

			if(option.value !== -1){
				var data = item.$model[el.selectedIndex-1]
				if(data.children && data.children.length){
					this.data.set(next,data.children)
					this.selectedValue.set(next,-1)
				}
			}
			
		},
		onInit: function(){
			var cur = 0
			var len = this.selectedValue.length
			var data = avalon.mix(true,[],AREA_DATA)
			//var copyData = avalon.mix(true,[],AREA_DATA)
			this.data.set(cur,data)
			while(cur < len && this.selectedValue[cur] !== -1){
				data = getArea(data,this.selectedValue[cur]).children
				this.data.set(++cur,data)
			}
		}
	}

})

function getArea(data,name){
	for(var i=0;i<data.length;i++){	
		if(data[i].name == name){	
			return data[i]
		}
	}
	return null
}