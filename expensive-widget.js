document.addEventListener('alpine:init', () => {
    Alpine.data('expensiveWidget', function() {
        return {
            itemList : '',
            threshold : 20,
            message : '',
            findItemsOver20(){
                this.message = findItemsOver20(this.itemList)
            }, 
            findItemsOver(){
                this.message = findItemsOver20(this.itemList, this.threshold)
            },
        }
    })
})