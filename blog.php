<?php 
    /*
        Template Name: Blog
    */
    get_header(); 
?> 

   <div id="primary" class="content-area"> 

        <section class="newest-blog">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="entry-title">
                            <span class="sub-title">BLog</span>
                            <h2 class="title exb">Read our newest blog post right aways</h2>
                        </div>
                    </div>
                </div>

                <div class="row lr-8 minus">
                    <?php 

                        if( !have_posts() ) { 
                            echo "<h3>No Post found</h3>"; 
                        }  
                    ?>
                    
                    <?php while( have_posts() ) : the_post(); ?>

                    <div class="col-lg-4 col-sm-6">
                        <a href="#" class="blog-item">
                            <div class="media">
                                <img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id($post->ID)); ?>" class="img-fluid" alt="">
                            </div>

                            <div class="text text-center">
                                <div class="entry-title dark-description">
                                    <span class="sub-title">Food and life</span>
                                    <h4 class="title exb"><?php the_title(); ?></h4> 
                                    <?php the_content(); ?>
                                </div>
                            </div>
                        </a>
                    </div> 

                    <?php endwhile; ?>
                </div>
            </div>
        </section><!-- /newest-blog -->
        
   </div> 

<?php get_footer(); ?>