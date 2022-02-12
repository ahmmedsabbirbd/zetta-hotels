<?php 

    /***  Add support for menus, widgets, background, header */
    add_theme_support('menus');
    add_theme_support('widgets');
    add_theme_support('custom-header');
    add_theme_support('custom-background');
    add_theme_support('post-thumbnails');

     /***  Menu Id */
    register_nav_menus(
        array(
            'header_menu', 'header_menu',
    ));

?>