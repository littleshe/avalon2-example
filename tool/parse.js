var fs = require('fs')
var parse = require('xml2js').parseString;

var xmlOptions = {	
	mergeAttrs    : true,
	explicitArray : false,
	tagNameProcessors: [function(name){
		return 'children'
	}],
	attrNameProcessors: [function(name){
		return name.toLowerCase()
	}],
	valueProcessors: [],
	attrValueProcessors: []
}

var xml = fs.readFileSync('LocList.xml','utf-8')

parse(xml,xmlOptions,function(err,result){	
	result = result.children.children
	fs.writeFileSync('../dist/area.json',JSON.stringify(result,null,2))
})
