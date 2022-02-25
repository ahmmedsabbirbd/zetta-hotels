<?php

	wp_list_comments();

	if (!comments_open()) {
		echo '<h2> Comments are not allow</h2>';
	}
	
	comment_form();


?>