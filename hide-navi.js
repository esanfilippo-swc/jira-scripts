AJS.$(document).ready(function() {
    setTimeout(function() {
        var itemsToHide = [
            "Get started",
            "Queues", 
            "Reports",
            "Customers",
            "Channels",
            "Raise a request",
            "Customer notifications"
        ];
        
        itemsToHide.forEach(function(item) {
            AJS.$('nav a:contains("' + item + '")').closest('li').hide();
        });
    }, 1000);
});
