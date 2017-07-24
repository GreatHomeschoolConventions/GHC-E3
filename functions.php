<?php

/**
 * Use minified stylesheet
 */
function ghc_e3_minified_css() {
    wp_enqueue_style( 'twentyseventeen-style', get_stylesheet_directory_uri() . '/style.min.css' );
    wp_enqueue_style( 'twentyseventeen-fonts', 'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,800,800i' );
}
add_action( 'wp_enqueue_scripts', 'ghc_e3_minified_css', 5 );

/**
 * Change logo and image sizes
 */
function ghc_e3_logo_size() {
    add_theme_support( 'custom-logo', array(
        'width'       => 1200,
        'height'      => 414,
        'flex-width'  => true,
    ) );

    add_image_size( 'speaker_xs', 150, 150, true );
    add_image_size( 'speaker_md', 450, 450, true );
    add_image_size( 'speaker_lg', 600, 600, true );
    add_image_size( 'speaker_xl', 900, 900, true );
    add_image_size( 'twentyseventeen-featured-image', 300, 300, true );
}
add_action( 'after_setup_theme', 'ghc_e3_logo_size', 15 );
