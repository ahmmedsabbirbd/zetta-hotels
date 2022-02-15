<?php 

    /***  Add support for menus, widgets, background, header */
    add_theme_support('menus');
    add_theme_support('widgets');
    add_theme_support('custom-logo');
    add_theme_support('custom-header');
    add_theme_support('custom-background');
    add_theme_support('post-thumbnails');

     /***  Menu Id */
    register_nav_menus(
        array(
            'header_menu', 'header_menu',
    ));

    /**
     * Changes the class on the custom logo in the header.php
     */
    function navbar_brand( $html ) {
        $html = str_replace('custom-logo-link', 'navbar-brand', $html ); 
        return $html;
    }
    add_filter('get_custom_logo', 'navbar_brand', 10);

?>