<?php
/*
Plugin Name: Knowledge Roundtable Affiliate
Plugin URI: https://www.theknowledgeroundtable.com/affiliate-program/wordpress-plugin/
Description: Earn money by referring students to The Knowledge Roundtable. Easily show tutors from The Knowledge Roundtable's tutor directory on your WordPress site!
Author: The Knowledge Roundtable
Version: 1.0
Author URI: https://www.theknowledgeroundtable.com
*/

add_action( 'admin_menu', 'add_knowro_aff_menu' );
function add_knowro_aff_menu() {
	add_options_page( 'Knowledge Roundtable Affiliate Plugin', 'KnowRo Affiliate', 'manage_options', 'knowro_affiliate', 'knowro_affiliate_plugin_page');
}
function knowro_affiliate_plugin_page() {
	//update options
	if(isset($_POST['submit'])) {
		$tid=$_POST['knowro_aff_tid'];
		update_option( 'knowro_aff_tid', $tid, true );
		echo '<div id="message" class="updated"><p>Successfully updated your Tracking ID (TID).</p></div>';
		//knowro_update_jsfile($tid);
	}
	?>
	<div class="wrap">
	<h2>Knowledge Roundtable Affiliate Plugin</h2>
	<form method="post" action="">
	<h3>Affiliate Credentials</h3>
	<p>Enter your affiliate credentials.</p>
	<p><i>Not enrolled in The Knowledge Roundtable's Affiliate Program yet? <a href="https://www.theknowledgeroundtable.com/register-2/?role=pendingaff" target="_blank">Register here</a>.</i></p>	
	<table class="form-table"><tbody>
	<tr>
	<th scope="row">Tracking ID (TID)</th>
	<td><input type="text" name="knowro_aff_tid" value="<?php echo esc_attr( get_option('knowro_aff_tid') );?>" /></td>
	</tr>
	</tbody></table>
	<?php submit_button(); ?>
	</form>

	<h3>Shortcodes</h3>
	<p><strong>[knowro_tutors_full]</strong> - Use this shortcode in posts and pages to display a tutor search form with full-page search results.</p>
	<p><strong>[knowro_tutors_sidebar]</strong> - Use this shortcode in posts, pages, or widgets to display a tutor search form.</p>
	<h3>Widget</h3>
	<p>The <strong>KnowRo Affiliate Widget</strong> adds a tutor search form to your sidebar or other widget areas.</p>
	</div>
	<?
}
/*
function knowro_update_jsfile($tid) {
	//update render.js with tid
	//get contents of original
	$fname=plugin_dir_path( __FILE__ ).'js/knowro_render.js';
	$fhandle=fopen($fname,"r");
	$content=fread($fhandle,filesize($fname));
	
	//replace tid
	$edittid="\n\t\t var tid='".$tid."'; \n\t\t";
	$editfrom=strpos($content,'//BEGIN set tid')+strlen('//BEGIN set tid');
	$editto=strpos($content,'//END set tid');
	$editlength=$editto-$editfrom;
	$content=substr_replace($content,$edittid,$editfrom,$editlength);
	
	//write to file and close
	$jsfile = fopen($fname,"w");
	fwrite($jsfile,$content);
	fclose($jsfile);
}
*/

//Shortcodes
function knowro_tutors_full_shortcode() {
   wp_register_script('gmap-api', ("//maps.google.com/maps/api/js"), false);
   wp_enqueue_script('gmap-api');
	wp_enqueue_script( 'knowro_aff_render', plugins_url().'/knowledge-roundtable-affiliate/js/knowro_render.js', array('jquery','gmap-api') );
	$stylePath=plugins_url().'/knowledge-roundtable-affiliate/css/knowro_default.css';
	$tid=get_option('knowro_aff_tid');
	wp_localize_script( 
		'knowro_aff_render', 
		'knowro_aff',
		array( 'stylePath' => json_encode($stylePath), 'tid' => json_encode($tid) ) 
	);
	$container='<div class="knowro_tutors" id="knowro_tutors_full"></div>';
	return $container;
}
add_shortcode( 'knowro_tutors_full', 'knowro_tutors_full_shortcode' );
function knowro_tutors_sidebar_shortcode() {
   wp_register_script('gmap-api', ("//maps.google.com/maps/api/js"), false);
   wp_enqueue_script('gmap-api');
	wp_enqueue_script( 'knowro_aff_render', plugins_url().'/knowledge-roundtable-affiliate/js/knowro_render.js', array('jquery','gmap-api') );
	$stylePath=plugins_url().'/knowledge-roundtable-affiliate/css/knowro_default.css';
	$tid=get_option('knowro_aff_tid');
	wp_localize_script( 
		'knowro_aff_render', 
		'knowro_aff',
		array( 'stylePath' => json_encode($stylePath), 'tid' => json_encode($tid) ) 
	);
	$container='<div class="knowro_tutors" id="knowro_tutors_sidebar"></div>';
	return $container;
}
add_shortcode( 'knowro_tutors_sidebar', 'knowro_tutors_sidebar_shortcode' );

//Widget
class knowro_aff_widget extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'knowro_aff_widget', // Base ID
			'KnowRo Affiliate Widget', // Name
			array( 'description' => 'Add a tutor search form.' ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget() {
		//echo '[knowro_tutors_sidebar]';
	   wp_register_script('gmap-api', ("//maps.google.com/maps/api/js"), false);
	   wp_enqueue_script('gmap-api');
		wp_enqueue_script( 'knowro_aff_render', plugins_url().'/knowledge-roundtable-affiliate/js/knowro_render.js', array('jquery','gmap-api') );
		$stylePath=plugins_url().'/knowledge-roundtable-affiliate/css/knowro_default.css';
		$tid=get_option('knowro_aff_tid');
		wp_localize_script( 
			'knowro_aff_render', 
			'knowro_aff',
			array( 'stylePath' => json_encode($stylePath), 'tid' => json_encode($tid) ) 
		);
		$container='<div class="sidebar_widget"><div class="knowro_tutors" id="knowro_tutors_sidebar"></div></div>';
		echo $container;
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form() {

	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update() {
	}

}
add_action('widgets_init',
     create_function('', 'return register_widget("knowro_aff_widget");')
);
?>