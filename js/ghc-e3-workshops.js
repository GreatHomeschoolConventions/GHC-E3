(function($) {
    $(document).ready(function(){
        $('.click-to-expand').hide();
        $('.expand-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('expanded').parents().next('.click-to-expand').slideToggle();
        });
    });
})(jQuery);
