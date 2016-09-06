fis.set('project.files',['src/**'])
fis.set('project.ignore',['tool/**'])

fis.match('*.html',{	
	release: false
})

fis.match('src/index.js',{	
	release: 'index.js'
})