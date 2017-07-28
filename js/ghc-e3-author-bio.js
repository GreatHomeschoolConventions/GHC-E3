(function($) {
    $(document).ready(function(){
        $('div.author-bio').hide();
        $('a.author-bio').on('click', function(e) {
            e.preventDefault();
            $(this).parents().next('div.author-bio').slideToggle();
        });
    });
})(jQuery);
