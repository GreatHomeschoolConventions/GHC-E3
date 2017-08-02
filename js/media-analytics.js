(function ($) {
    /**
     * Track media events
     *
     * Modified from MarcTV MediaElement Tracking by Marc Tönsing 2017
     *
     * {@link https://wordpress.org/plugins/marctv-mediaelement-tracking/ WordPress plugin}
     */

    var gaEvent = function (category, action, label) {

        if (window._gaq && _gaq.push) {
            _gaq.push(['_trackEvent', category, action, label]);
        }

        if (window.ga && ga.create) {
            ga('send', 'event', {
                eventCategory: category,
                eventAction: action,
                eventLabel: label
            });
        }

        if (window.__gaTracker && __gaTracker.create) {
            __gaTracker('send', 'event', {
                eventCategory: category,
                eventAction: action,
                eventLabel: label
            });
        }

        if ('undefined' !== typeof _paq) {
            _paq.push(['trackEvent', category, action, label]);
        }
    };

    var trackPlayer = function (obj, category, action) {
        var postTitle = $('.entry-title').text();

        if( typeof postTitle !== 'undefined' ) {
            gaEvent(category, action, postTitle);
        }
    };


    $(document).ready(function ($) {

        /* video player */
        $('.wp-video-shortcode').bind('play', function (e) {
          trackPlayer(this,"wp-video","play");
        });

        $('.wp-video-shortcode').bind('pause', function (e) {
            trackPlayer(this,"wp-video","pause");
        });

        $('.wp-video-shortcode').bind('ended', function (e) {
            trackPlayer(this,"wp-video","ended");
        });


        /* audio player */
        $('.wp-audio-shortcode').bind('play', function (e) {
            trackPlayer(this,"wp-audio","play");
        });

        $('.wp-audio-shortcode').bind('pause', function (e) {
            trackPlayer(this,"wp-audio","pause");
        });

        $('.wp-audio-shortcode').bind('ended', function (e) {
            trackPlayer(this,"wp-audio","ended");
        });

    });

}(jQuery));
