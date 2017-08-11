<?php
/**
 * Template Name: Purchase Page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

function ghc_e3_purchase_optimization() {
    wp_dequeue_style( 'simple-payments' );
    wp_dequeue_style( 'woocommerce-layout' );
    wp_dequeue_style( 'woocommerce-smallscreen' );
    wp_dequeue_style( 'woocommerce-twenty-seventeen' );
    wp_dequeue_style( 'wc-memberships-frontend' );
    wp_dequeue_style( 'sv-wc-payment-gateway-payment-form' );
    wp_dequeue_style( 'open-sans' );
    wp_dequeue_style( 'jetpack_css' );

    wp_dequeue_script( 'jquery-payment' );
    wp_dequeue_script( 'jquery-scrollto' );
    wp_dequeue_script( 'media-analytics' );
    wp_dequeue_script( 'sv-wc-payment-gateway-payment-form' );
    wp_dequeue_script( 'wp-mediaelement' );
    wp_dequeue_script( 'woocommerce' );
    wp_dequeue_script( 'wc-add-to-cart' );
    wp_dequeue_script( 'wc-authorize-net-aim' );
    wp_dequeue_script( 'wc-cart-fragments' );
}
add_action( 'wp_enqueue_scripts', 'ghc_e3_purchase_optimization', 99 );

get_header(); ?>

<div class="wrap">
    <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

            <?php
            while ( have_posts() ) : the_post();

                get_template_part( 'template-parts/page/content', 'page' );

                // If comments are open or we have at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) :
                    comments_template();
                endif;

            endwhile; // End of the loop.
            ?>

        </main><!-- #main -->
    </div><!-- #primary -->
</div><!-- .wrap -->

<?php get_footer();
