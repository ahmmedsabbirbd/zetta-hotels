<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <link rel="icon" type="image/png" href="<?= get_theme_file_uri(); ?>/images/favicon.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Home | <?php bloginfo('name'); ?></title> 
    
    <!-- Bootstrap -->
    <link href="<?= get_theme_file_uri(); ?>/css/plugins.css" rel="stylesheet">
    <link href="<?= get_theme_file_uri(); ?>/style.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800" rel="stylesheet">
</head>
<body <?php body_class(); ?>> 
    <div class="progress"></div>
    
    <div id="sidr">
        <div class="mobile-header d-none">
            <div class="navbar-header">
                <a class="navbar-toggle in">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
            </div>

            <div class="navigation">

                <?php 
                    wp_nav_menu(array(
                        'theme_location'    =>'header_menu',
                        'menu_class'        =>'nav navbar-nav',
                        'fallback_cb'        => false,
                    ));
                ?> <!-- /Dynamic Header code -->
                
                <!-- <ul class="nav navbar-nav">
                    <li class="active"><a href="index.php">Home</a></li>
                    <li class="dropdown">
                        <a href="rooms.php">Rooms<span class="dropdown-toggle" data-toggle="dropdown"></span></a>

                        <ul class="dropdown-menu">
                            <li><a href="#">Rooms 1</a></li>
                            <li><a href="#">Rooms 2</a></li>
                            <li><a href="#">Rooms 3</a></li>
                            <li><a href="#">Rooms 4</a></li>
                        </ul>
                    </li>
                    <li><a href="restaurant.php">Restaurant</a></li>
                    <li><a href="about-us.php">About us</a></li>
                    <li><a href="contact.php">Blog</a></li>
                    <li><a href="contact.php">contact</a></li>
                </ul> --> 
            </div>
        </div>
    </div><!-- /mobile-header -->

    <header class="header transparent">
        <div class="navbar navbar-expand">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="navbar-header">
                    <div class="logo"> 
                        <?php the_custom_logo(); ?> 
                    </div>
                </div>
        
                <div class="collapse navbar-collapse">

                     <?php 
                        wp_nav_menu(array(
                            'theme_location'    =>'header_menu',
                            'menu_class'        =>'navbar-nav',
                            'fallback_cb'        => false,
                        ));
                    ?> <!-- /Dynamic Header code -->

                    <!-- <ul class="nav navbar-nav">
                        <li class="active"><a href="index.php">Home</a></li>
                        <li class="dropdown">
                            <a href="rooms.php">Rooms<span class="dropdown-toggle" data-toggle="dropdown"></span></a>

                            <ul class="dropdown-menu">
                                <li><a href="#">Rooms 1</a></li>
                                <li><a href="#">Rooms 2</a></li>
                                <li><a href="#">Rooms 3</a></li>
                                <li><a href="#">Rooms 4</a></li>
                            </ul>
                        </li>
                        <li><a href="restaurant.php">Restaurant</a></li>
                        <li><a href="about-us.php">About us</a></li>
                        <li><a href="contact.php">Blog</a></li>
                        <li><a href="contact.php">contact</a></li>
                    </ul> --> 

                    <ul class="navbar-nav navbar-nav-right">
                        <li class="mobile-navbar-toggler d-xl-none">
                            <a href="#sidr"class="navbar-toggle">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </a>
                        </li>
                    </ul>
                </div><!-- /collapse -->
            </div><!-- /container -->
        </div><!--/ Navbar -->
    </header> <!-- /header -->

    <section class="page-header parallax page-banner" style="background: #f1f1f1 url(<?= get_theme_file_uri(); ?>/images/banner.jpg)no-repeat fixed center 16%/cover;">
        <div class="container">
            <div class="row page-header-slider lr-8">
                <div class="col-12">
                    <div class="content">
                        <div class="entry-title white-entry-title">
                            <h1 class="title exb">The best hotel you will ever need</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="content">
                        <div class="entry-title white-entry-title">
                            <h1 class="title exb">How does content marketing work</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row lr-8">
                <div class="col-12">
                    <div class="best-hotel-form">
                        <div class="page-header_slider_control text-right">
                            <button class="prev btn slick-arrow custom-arrow"></button>
                            <button class="next btn slick-arrow custom-arrow"></button>
                        </div>

                        <div class="media">
                            <img src="<?= get_theme_file_uri(); ?>/images/page-header-slider.png" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- /page-header -->