document.addEventListener('alpine:init', () => {
    Alpine.data('billWidget', function() {
        return{
            item : '',
            message : '',
            totalBill(){
                this.message = totalPhoneBill(this.item)
            }, 
        }
    })
})