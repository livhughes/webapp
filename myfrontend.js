jQuery("#greeting-form").on("submit",function(event_details){

    var greeting = "Bonjour ";
    var name = this.fullName.value;
    var greeting_message = greeting + name;
    jQuery("#greeting").fadeOut('slow', function() {
    jQuery("#greeting-form").hide();
    $("#greeting").append("<h4 class='page-header'>"+ greeting_message+"</h4>");
    $("#greeting").fadeIn('slow');
    });

    event_details.preventDefault();
});
