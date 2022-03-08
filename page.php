<?php get_header(); ?> 

   <div id="primary" class="content-area"> 

        <section class="newest-blog">
            <div class="container">
                <div class="row lr-8 minus">
                    <?php while( have_posts() ) : the_post(); ?>
                    <div class="col-12"> 
                           <h1><?php the_title(); ?></h1> 

                            <div class="entry-title dark-description">      
                                <?php the_content(); ?>  
                            </div> 
                    </div> 

                    <?php endwhile; ?> 
                </div>
            </div>
        </section><!-- /newest-blog -->

   </div> 

   <?php 

        if (is_active_sidebar('rs')) {
            dynamic_sidebar('rs');
        }

   ?>

<?php get_footer(); ?>