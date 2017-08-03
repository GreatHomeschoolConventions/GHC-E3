(function($) {
    $(document).ready(function(){
        /**
         * Hidden/expanding content
         */
        $('.click-to-expand').hide();
        $('.expand-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('expanded').parents().next('.click-to-expand').slideToggle();
        });

        /**
         * Purchase page analytics
         */
        $('.buy-now .button').on('click', function(e) {
            var buttonText = $(this).text();
            ga('send', 'event', 'Button', 'purchase', buttonText);
        });
    });
})(jQuery);
