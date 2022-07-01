document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function() {
        return {
            itemList : '',
            message : '',
            greetMe(){
                this.message = greet(this.name)
            }, 
        }
    })
})