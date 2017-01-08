var avalon = require('avalon')

avalon.component('bs-pagination',{  
    template: __inline('template.html'),
    defaults: { 
        totalPage: 0,
        currentPage: 1,
        showPage: 5,
        simple: false,
        previousText: '&laquo;',
        nextText: '&raquo;',
        onPageClick: function(){},
        $computed: {   
            wrapClass: function(){ 
                return [this.simple ? 'pager' : 'pagination']
            },
            previousClass: function(){
                var disabled = this.currentPage == 1 ? 'disabled' : ''
                return ['previous',disabled]
            },
            nextClass: function(){  
                 var disabled = this.currentPage == this.totalPage ? 'disabled': ''
                return ['next',disabled]
            },
            pages: function(){  
                if(this.simple){    
                    return []
                }
                var pages = [];
                var s = this.showPage, l = this.currentPage, r = this.currentPage, c = this.totalPage;
                pages.push(l);
                while(true) {
                    if(pages.length >= s) {
                        break;
                    }
                    if(l > 1) {
                        pages.unshift(--l);
                    }
                    if(pages.length >= s) {
                        break;
                    }
                    if(r < c) {
                        pages.push(++r);
                    }
                }
                return pages
            }
        },
        goToPage: function(page,e){
            e.preventDefault()
            if(page == 'previous'){ 
                this.currentPage > 1 && this.currentPage --
            }else if(page == 'next'){   
                this.currentPage < this.totalPage && this.currentPage ++
            }else{
                this.currentPage = page
            }
        },
        onInit: function(){
            this.$watch('currentPage',function(val){  
                this.onPageClick(val)
            })
        }
    }
})