<?php get_header(); ?> 

   <div id="primary" class="content-area"> 
        <section class="newest-blog">
            <div class="container">
                <div class="row lr-8 minus">
                    <?php while( have_posts() ) : the_post(); ?>
                    <div class="col-12"> 
                            <div class="media">
                                <img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id($post->ID)); ?>" class="img-fluid" alt="">
                            </div>

                            <div class="entry-title dark-description">
                                <span class="sub-title"><?php the_category(' '); ?></span>
                                <span class="sub-title"><?php the_author(); ?></span>
                                <span class="sub-title"><?php the_time('d M, Y '); ?></span>
                                <span class="sub-title"><?php comments_number(); ?></span>
                                <span class="sub-title">Food and life</span>
                                <h4 class="title exb"><?php the_title(); ?></h4> 
                                <?php the_content(); ?>  
                            </div> 
                    </div> 

                    <?php endwhile; ?>

                    <?php

                        if(!post_password_required()) {
                            comments_template();
                        }

                    ?>
                </div>
            </div>
        </section><!-- /newest-blog -->
   </div> 

<?php get_footer(); ?>