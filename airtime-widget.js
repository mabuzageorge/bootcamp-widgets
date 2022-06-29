document.addEventListener('alpine:init', () => {
    Alpine.data('airtimeWidget', function() {
        return {
            usage : '',
            amount : 0,
            message : '',
            calculate() {
                this.message = enoughAirtime(this.usage, this.amount)
            },
        }
        
    })
})