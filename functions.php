<?php 

    /***  Add support for menus, widgets, background, header */
    add_theme_support('menus');
    add_theme_support('widgets');
    add_theme_support('custom-logo');
    add_theme_support('custom-header');
    add_theme_support('custom-background');
    add_theme_support('post-thumbnails');

    /***  Menu Id */
    function sidebar_add(){
        register_sidebar( array(
            'name'  => 'Right Sidebar',
            'id'    => 'rs',
            'description' => 'All link here',
            'before_widget' => '<ul>',
            'after_widget' => '</ul>',
            'before_title' => '<h2>',
            'after_title' => '</h2>',
        ));
    }

    add_action('widgets_init', 'sidebar_add');

    /***  Menu Id */
    register_nav_menus(
        array(
            'header_menu', 'header_menu',
    ));
    register_nav_menu('header_menu', 'header_menu');

    /*** Changes the class on the custom logo in the header.php */
    function navbar_brand( $html ) {
        $html = str_replace('custom-logo-link', 'navbar-brand', $html ); 
        return $html;
    }
    add_filter('get_custom_logo', 'navbar_brand', 10);

    /*** Dynamic coppy right section */
    function the_latest_cs($wp_customize){

        $wp_customize->add_section('footer_section', array(

            'title'     =>'Footer Area',
            'priority'  =>30,
        ));

        $wp_customize->add_setting('copyright_section', array(

            'default'   =>'Copyright ©2020 All rights reserved | This template is made with love by <a target="_blank" href="https://www.facebook.com/ahmmedsabbirbdme">Sabbir Ahmmed</a>',
            'transport'  => 'refresh',
        ));

        $wp_customize->add_control('copyright_section', array(

            'label'     =>'Enter your copyright text',
            'section'   =>'footer_section',
            'type'      =>'text',
        ));
    }

    add_action('customize_register', 'the_latest_cs');

?>