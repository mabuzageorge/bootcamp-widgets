document.addEventListener('alpine:init', () => {
    Alpine.data('gameWidget', function() {
        return {
            str : '',
            message : '',
            longestWord(){
                this.message = longestWord(this.str)
            }, 
            shortestWord(){
                this.message = shortestWord(this.str)
            }, 
            wordLengths(){
                this.message = wordLengths(this.str)
            }, 
        }
    })
})