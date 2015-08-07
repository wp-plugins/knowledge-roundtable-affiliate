jQuery(document).ready(function($) {

	//run if insertion divs exist
	if ($('.knowro_tutors').length>0) {
		
		//extract localized vars
		var stylePath=$.parseJSON(knowro_aff.stylePath);
		var tid=$.parseJSON(knowro_aff.tid);

		//load stylesheet
		var cssId = 'knowro_css';
		if (!document.getElementById(cssId)) {
		    var head  = document.getElementsByTagName('head')[0];
		    var stylelink  = document.createElement('link');
		    stylelink.id   = cssId;
		    stylelink.rel  = 'stylesheet';
		    stylelink.type = 'text/css';
		    stylelink.href = stylePath;
		    head.appendChild(stylelink);
		}
		//load fonts
		var cssId = 'knowro_css_font1';
		if (!document.getElementById(cssId)) {
		    var head  = document.getElementsByTagName('head')[0];
		    var stylelink  = document.createElement('link');
		    stylelink.id   = cssId;
		    stylelink.rel  = 'stylesheet';
		    stylelink.type = 'text/css';
		    stylelink.href = 'https://fonts.googleapis.com/css?family=Oswald';
		    head.appendChild(stylelink);
		}
		var cssId = 'knowro_css_font2';
		if (!document.getElementById(cssId)) {
		    var head  = document.getElementsByTagName('head')[0];
		    var stylelink  = document.createElement('link');
		    stylelink.id   = cssId;
		    stylelink.rel  = 'stylesheet';
		    stylelink.type = 'text/css';
		    stylelink.href = 'https://fonts.googleapis.com/css?family=Quattrocento';
		    head.appendChild(stylelink);
		}
		
		//function for displaying subject list
		function display_tutoring_subjects_disciplines(subject,empty_label) {
			empty_label=empty_label || '';
			var sel=(subject=="" ? ' selected':'');
			var text='<option value=""'+sel+'>'+empty_label+'</option>';
			sel=(subject=="Test Prep" ? ' selected':'');
			text+='<option value="Test Prep"'+sel+' style="font-weight:bold">Test Prep</option>';
			sel=(subject=="SAT" ? ' selected':'');
			text+='<option value="SAT"'+sel+' style="margin-left:1em;">SAT</option>';
			sel=(subject=="ACT" ? ' selected':'');
			text+='<option value="ACT"'+sel+' style="margin-left:1em;">ACT</option>';
			sel=(subject=="SAT Math" ? ' selected':'');
			text+='<option value="SAT Math"'+sel+' style="margin-left:1em;">SAT Math</option>';
			sel=(subject=="SAT Reading" ? ' selected':'');
			text+='<option value="SAT Reading"'+sel+' style="margin-left:1em;">SAT Reading</option>';
			sel=(subject=="SAT Writing" ? ' selected':'');
			text+='<option value="SAT Writing"'+sel+' style="margin-left:1em;">SAT Writing</option>';
			sel=(subject=="ACT Math" ? ' selected':'');
			text+='<option value="ACT Math"'+sel+' style="margin-left:1em;">ACT Math</option>';
			sel=(subject=="ACT English" ? ' selected':'');
			text+='<option value="ACT English"'+sel+' style="margin-left:1em;">ACT English</option>';
			sel=(subject=="ACT Science " ? ' selected':'');
			text+='<option value="ACT Science"'+sel+' style="margin-left:1em;">ACT Science</option>';
			sel=(subject=="SSAT" ? ' selected':'');
			text+='<option value="SSAT"'+sel+' style="margin-left:1em;">SSAT</option>';
			sel=(subject=="PSAT" ? ' selected':'');
			text+='<option value="PSAT"'+sel+' style="margin-left:1em;">PSAT</option>';
			sel=(subject=="GRE Math" ? ' selected':'');
			text+='<option value="GRE Math"'+sel+' style="margin-left:1em;">GRE Math</option>';
			sel=(subject=="GRE verbal" ? ' selected':'');
			text+='<option value="GRE Verbal"'+sel+' style="margin-left:1em;">GRE Verbal</option>';
			sel=(subject=="GMAT Math" ? ' selected':'');
			text+='<option value="GMAT Math"'+sel+' style="margin-left:1em;">GMAT Math</option>';
			sel=(subject=="GMAT Verbal" ? ' selected':'');
			text+='<option value="GMAT Verbal"'+sel+' style="margin-left:1em;">GMAT Verbal</option>';
			sel=(subject=="MCAT" ? ' selected':'');
			text+='<option value="MCAT"'+sel+' style="margin-left:1em;">MCAT</option>';
			sel=(subject=="LSAT" ? ' selected':'');
			text+='<option value="LSAT"'+sel+' style="margin-left:1em;">LSAT</option>';
			sel=(subject=="GED" ? ' selected':'');
			text+='<option value="GED"'+sel+' style="margin-left:1em;">GED</option>';
			sel=(subject=="Math" ? ' selected':'');
			text+='<option value="Math"'+sel+' style="font-weight:bold">Math</option>';
			sel=(subject=="Pre-Algebra" ? ' selected':'');
			text+='<option value="Pre-Algebra"'+sel+' style="margin-left:1em;">Pre-Algebra</option>';
			sel=(subject=="Algebra 1" ? ' selected':'');
			text+='<option value="Algebra 1"'+sel+' style="margin-left:1em;">Algebra 1</option>';
			sel=(subject=="Algebra 2" ? ' selected':'');
			text+='<option value="Algebra 2"'+sel+' style="margin-left:1em;">Algebra 2</option>';
			sel=(subject=="Geometry" ? ' selected':'');
			text+='<option value="Geometry"'+sel+' style="margin-left:1em;">Geometry</option>';
			sel=(subject=="Trigonometry" ? ' selected':'');
			text+='<option value="Trigonometry"'+sel+' style="margin-left:1em;">Trigonometry</option>';
			sel=(subject=="Pre-Calculus" ? ' selected':'');
			text+='<option value="Pre-Calculus"'+sel+' style="margin-left:1em;">Pre-Calculus</option>';
			sel=(subject=="Calculus" ? ' selected':'');
			text+='<option value="Calculus"'+sel+' style="margin-left:1em;">Calculus</option>';
			sel=(subject=="Statistics" ? ' selected':'');
			text+='<option value="Statistics"'+sel+' style="margin-left:1em;">Statistics</option>';
			sel=(subject=="Science" ? ' selected':'');
			text+='<option value="Science"'+sel+' style="font-weight:bold">Science</option>';
			sel=(subject=="Biology" ? ' selected':'');
			text+='<option value="Biology"'+sel+' style="margin-left:1em;">Biology</option>';
			sel=(subject=="Chemistry" ? ' selected':'');
			text+='<option value="Chemistry"'+sel+' style="margin-left:1em;">Chemistry</option>';
			sel=(subject=="Physics" ? ' selected':'');
			text+='<option value="Physics"'+sel+' style="margin-left:1em;">Physics</option>';
			sel=(subject=="Astronomy" ? ' selected':'');
			text+='<option value="Astronomy"'+sel+' style="margin-left:1em;">Astronomy</option>';
			sel=(subject=="Physical Science" ? ' selected':'');
			text+='<option value="Physical Science"'+sel+' style="margin-left:1em;">Physical Science</option>';
			sel=(subject=="English" ? ' selected':'');
			text+='<option value="English"'+sel+' style="font-weight:bold">English</option>';
			sel=(subject=="Writing" ? ' selected':'');
			text+='<option value="Writing"'+sel+' style="margin-left:1em;">Writing</option>';
			sel=(subject=="Reading" ? ' selected':'');
			text+='<option value="Reading"'+sel+' style="margin-left:1em;">Reading</option>';
			sel=(subject=="Grammar" ? ' selected':'');
			text+='<option value="Grammar"'+sel+' style="margin-left:1em;">Grammar</option>';
			sel=(subject=="Vocabulary" ? ' selected':'');
			text+='<option value="Vocabulary"'+sel+' style="margin-left:1em;">Vocabulary</option>';
			sel=(subject=="U.S. History" ? ' selected':'');
			text+='<option value="U.S. History"'+sel+' style="margin-left:1em;">U.S. History</option>';
			sel=(subject=="World History" ? ' selected':'');
			text+='<option value="World History"'+sel+' style="margin-left:1em;">World History</option>';
			sel=(subject=="Language" ? ' selected':'');
			text+='<option value="Language"'+sel+' style="font-weight:bold">Language</option>';
			sel=(subject=="Spanish" ? ' selected':'');
			text+='<option value="Spanish"'+sel+' style="margin-left:1em;">Spanish</option>';
			sel=(subject=="French" ? ' selected':'');
			text+='<option value="French"'+sel+' style="margin-left:1em;">French</option>';
			sel=(subject=="Arabic" ? ' selected':'');
			text+='<option value="Arabic"'+sel+' style="margin-left:1em;">Arabic</option>';
			sel=(subject=="Chinese" ? ' selected':'');
			text+='<option value="Chinese"'+sel+' style="margin-left:1em;">Chinese</option>';
			sel=(subject=="German" ? ' selected':'');
			text+='<option value="German"'+sel+' style="margin-left:1em;">German</option>';
			sel=(subject=="Italian" ? ' selected':'');
			text+='<option value="Italian"'+sel+' style="margin-left:1em;">Italian</option>';
			sel=(subject=="Japanese" ? ' selected':'');
			text+='<option value="Japanese"'+sel+' style="margin-left:1em;">Japanese</option>';
			sel=(subject=="Russian" ? ' selected':'');
			text+='<option value="Russian"'+sel+' style="margin-left:1em;">Russian</option>';
			sel=(subject=="TEFL" ? ' selected':'');
			text+='<option value="TEFL"'+sel+' style="margin-left:1em;">TEFL</option>';
			sel=(subject=="Special Education" ? ' selected':'');
			text+='<option value="Special Education"'+sel+' style="font-weight:bold">Special Education</option>';
			sel=(subject=="Elementary Math (K-6th)" ? ' selected':'');
			text+='<option value="Elementary Math (K-6th)"'+sel+' style="margin-left:1em;">Elementary Math (K-6th)</option>';
			sel=(subject=="Elementary Science (K-6th)" ? ' selected':'');
			text+='<option value="Elementary Science (K-6th)"'+sel+' style="margin-left:1em;">Elementary Science (K-6th)</option>';		
			sel=(subject=="Elementary Reading (K-6th)" ? ' selected':'');
			text+='<option value="Elementary Reading (K-6th)"'+sel+' style="margin-left:1em;">Elementary Reading (K-6th)</option>';
			sel=(subject=="Elementary Writing (K-6th)" ? ' selected':'');
			text+='<option value="Elementary Writing (K-6th)"'+sel+' style="margin-left:1em;">Elementary Writing (K-6th)</option>';
			sel=(subject=="ADD/ADHD" ? ' selected':'');
			text+='<option value="ADD/ADHD"'+sel+' style="margin-left:1em;">ADD/ADHD</option>';
			sel=(subject=="Dyslexia" ? ' selected':'');
			text+='<option value="Dyslexia"'+sel+' style="margin-left:1em;">Dyslexia</option>';
			sel=(subject=="Consulting" ? ' selected':'');
			text+='<option value="Consulting"'+sel+' style="font-weight:bold">Consulting</option>';
			sel=(subject=="College Counseling" ? ' selected':'');
			text+='<option value="College Counseling"'+sel+' style="margin-left:1em;">College Counseling</option>';
			sel=(subject=="Career Counseling" ? ' selected':'');
			text+='<option value="Career Counseling"'+sel+' style="margin-left:1em;">Career Counseling</option>';
			
			return text;
			
		}
	
		//toggle search form elements
		function toggle_advanced_on() {
			$('#advanced_toggle_on').hide();
			$('#advanced_options').show();
			$('#sidebar_sticky_div_height').height($('#find-tutor').height());
		}	
		function toggle_advanced_off() {
			$('#advanced_toggle_on').show();
			$('#advanced_options').hide();
			$('#sidebar_sticky_div_height').height($('#find-tutor').height());
		}	
		$('.knowro_tutors').on("click","#advanced_toggle_on",function(e){
			e.preventDefault();
			toggle_advanced_on();
		});
		$('.knowro_tutors').on("click","#advanced_toggle_off",function(e){
			e.preventDefault();
			toggle_advanced_off();
		});
		
		function toggle_online() {
			$('.local-switch').hide();
			$('#switch-online-on').hide();
			$('#switch-local-on').show();
			$('#online_search').val('true');
			$('#sidebar_sticky_div_height').height($('#find-tutor').height());
		}	
		function toggle_local() {
			$('.local-switch').show();
			$('#switch-online-on').show();
			$('#switch-local-on').hide();
			$('#online_search').val('false');
			$('#sidebar_sticky_div_height').height($('#find-tutor').height());
		}	
		
		$('.knowro_tutors').on("click","#switch-online-on",function(e){
			e.preventDefault();
			toggle_online();
		});
		$('.knowro_tutors').on("click","#switch-local-on",function(e){
			e.preventDefault();
			toggle_local();
		});
	
		//geocode
		var geocoder = new google.maps.Geocoder();
		jQuery(".knowro_tutors").on("submit","form.tutorsearch",function(e) {
			if (document.getElementById('zipin').value.length > 0) {
				if (document.getElementById('geocode').value !== 'end') {
					var that = this;
					e.preventDefault();
					var address=document.getElementById('zipin').value;
	   			geocoder.geocode({ 'address': address }, function (results, status) {
			      	if (status == google.maps.GeocoderStatus.OK) {  	
	   		     		document.getElementById('geolat').value=results[0].geometry.location.lat().toString().substr(0, 12);   
							document.getElementById('geolng').value=results[0].geometry.location.lng().toString().substr(0, 12);
							var result=results[0].address_components;
	          			for(var i=0;i<result.length;++i)
	          			{
	              			if(result[i].types[0]=="administrative_area_level_1"){document.getElementById('geostate').value=result[i].short_name}
	              			if(result[i].types[0]=="locality"){document.getElementById('geocity').value=result[i].long_name}
	          			}
							document.getElementById('geocode').value='end';      	   
	      		   	}
	      			else {
	         			alert('Please enter a valid zipcode');
	         			document.getElementById('geocode').value='end';
	         			return false;
		         		}
		         	if (document.getElementById('radius').value == '') {
							document.getElementById('radius').value='20'			
						}
						var myElem = document.getElementById('ratelo');
						if (myElem != null) {
							if (document.getElementById('ratelo').value == '') {
								document.getElementById('ratelo').value='10'			
								}
							if (document.getElementById('ratehi').value == '') {
								document.getElementById('ratehi').value='100'			
								}
							if (document.getElementById('agelo').value == '') {
								document.getElementById('agelo').value='18'			
								}
							if (document.getElementById('agehi').value == '') {
								document.getElementById('agehi').value='80'			
								}
						}
	      			jQuery("input.tutorsearchsubmit").trigger('click');
	      			}); 
					}
				}
				else {
					if($('#online_search').val()!='true') {
		         	alert('Please enter a zipcode');
		         	return false;
				}
	      }
		});
		
		//extract data from search results
		var params = {};
		if (window.location.href.indexOf('?')!=-1) {
			var params_arr = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < params_arr.length; i++) {
				var param = params_arr[i].split('=');
				params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, '%20'));
			}
		}
		params['tid']=tid;
		//console.log(params);
	
		//populate full page display
		if ($('#knowro_tutors_full').length>0) {
			$.ajax({
				url: "https://www.theknowledgeroundtable.com/api/search/tutors/results.php",
				jsonp: "callback",
				dataType: "jsonp",
				data: params,
				success: function( results ) {

					//console.log(results);
					var get_online_search=results['parameters']['online_search'];
					var search_type=results['parameters']['search_type'];
					var zipin=results['parameters']['zipin'];
					var state=results['parameters']['state'];
					var city=results['parameters']['city'];
					var lat=results['parameters']['lat'];
					var lng=results['parameters']['lng'];
					var radius=results['parameters']['radius'];
					var subject=results['parameters']['subject'];
					var discipline=results['parameters']['discipline'];
					var ratelo=results['parameters']['ratelo'];
					var ratehi=results['parameters']['ratehi'];
					var agelo=results['parameters']['agelo'];
					var agehi=results['parameters']['agehi'];
					var gender=results['parameters']['gender'];
					var local_fail_msg=results['parameters']['local_fail_msg'] ? results['parameters']['local_fail_msg'] : '';
		
					if(gender=='Either') {
						var gensel1=' selected';
						var gensel2='';
						var gensel3='';
					}	
					if(gender=='Female') {
						var gensel1='';
						var gensel2=' selected';
						var gensel3='';
					}
					if(gender=='Male') {
						var gensel1='';
						var gensel2='';
						var gensel3=' selected';
					}
					var dispsub=(search_type=='discipline' || search_type=='online-discipline' ? discipline:subject);
					dispsub=(dispsub==null ? '':dispsub);
					if(search_type!='online' && search_type!='online-discipline') {
						var online_switch='<div class="local-switch" style="margin-top:5px;"><b style="font-size: 110%;">Zipcode: </b><input placeholder="Zipcode" type="text" name="zipin" id="zipin" value="'+zipin+'" style="width:60px;"/></div>'+
						'<div style="clear:both"></div>'+
						'<div><a id="switch-online-on" style="" href="" >&rarr;Switch to online tutors</a></div>'+
						'<div><a id="switch-local-on" style="display:none;" href="" >&rarr;Switch to local tutors</a></div>';
					} else {
						var online_switch='<div class="local-switch" style="display:none;margin-top:5px;"><b style="font-size: 110%;">Zipcode: </b><input placeholder="Zipcode" type="text" name="zipin" id="zipin" value="'+zipin+'" style="width:60px;"/></div>'+
						'<div style="clear:both"></div>'+
						'<div><a id="switch-online-on" style="display:none;" href="" >&rarr;Switch to online tutors</a></div>'+
						'<div><a id="switch-local-on" style="" href="" >&rarr;Switch to local tutors</a></div>';
					}
					if(search_type!='online' && search_type!='online-discipline') {
						var online_search=(get_online_search ? get_online_search : 'false' );
					} else {
						var online_search=(get_online_search ? get_online_search : 'true' );
					}
				
					//display search box
					var left_column=
						'<!--left column-->'+
						'<div class="tutor_search_left_column">'+	
						'<div id="sidebar_sticky_div_width"></div>'+
						'<div id="sidebar_sticky_div_height"></div>'+
						'<div id="sidebar_sticky_div">'+
						'<div id="find-tutor">'+
						'<h2 style="text-shadow: 0 0; padding: 0; margin: 0 0 0 2px; text-align: center; font-size:25px; line-height: 36px;"><a href="https://www.theknowledgeroundtable.com/tutoring/find-a-tutor/" target="_blank" style="color:black !important">Find A Tutor</a></h2>'+
						'<form id="tutorsearch" name="tutorsearch" class="tutorsearch" method="get" action="">'+
						'<select name="subject" id="subject">'+
						display_tutoring_subjects_disciplines(dispsub,'Subject')+
						'</select></br>'+
						online_switch+
						'<input type="hidden" name="radius" id="radius" value="'+radius+'">'+
						'<br>'+
						'<div id="advanced_toggle_on" style="margin-top:-17px;margin-bottom:-10px;"><a href="">+ Advanced Options</a></div>'+
						'<div id="advanced_options" style="display:none;">'+
						'<div style="margin-top:-17px;">'+
						'<div id="advanced_toggle_off" style="margin-bottom:-3px;"><a href="">- Fewer Options</a></div>'+
						'<div style="float:left; width: 110px; margin-top:5px;">$<input type="text" name="ratelo" id="ratelo" value="'+ratelo+'"  style="width:20px;"/>'+
						' to $<input type="text" name="ratehi" id="ratehi"  value="'+ratehi+'" style="width:25px;"/></div>'+
						'<div style="float:left; width: 98px; margin-top:5px;"><input type="text" name="agelo" id="agelo" value="'+agelo+'" style="width:20px;"/>'+
						' to <input type="text" name="agehi" id="agehi" value="'+agehi+'" style="width:25px;"/> yrs</div>'+
						'</div>'+
						'<div style="clear:both"></div>'+
						'<div style="margin-bottom: -3px;margin-top:5px;">'+
						'<b style="font-size: 110%;">Sex: </b><select name="gender">'+
						'<option value="Either"'+gensel1+'>Either</option>'+
						'<option value="Female"'+gensel2+'>Female</option>'+
						'<option value="Male"'+gensel3+'>Male</option>'+
						'</select>'+
						'</div>'+
						'</div>'+
						'<div style="margin-top: 17px; text-align: center; margin-left: -30px; font-size: 120%;">'+
						'<input type="submit" class="tutorsearchsubmit" name="tutorsearchsubmit" '+
						'onMouseOver="this.style=\'height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #aecbca; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;\'" onMouseOut="this.style=\'height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #94bbb9; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;\'"'+ 
						'onMouseDown="this.style=\'height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #74a6a4; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;\'" style="height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #94bbb9; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;" value="Search"/>'+
						'<!--<input type="submit" class="tutorsearchsubmit" name="tutorsearchsubmit" value="Search"/>-->'+
						'</div><input id="geolat" type="hidden" name="geolat" value="'+lat+'">'+
						'<input id="geolng" type="hidden" name="geolng" value="'+lng+'">'+
						'<input id="geocity" type="hidden" name="geocity" value="'+city+'">'+
						'<input id="geostate" type="hidden" name="geostate" value="'+state+'">'+
						'<input id="geocode" type="hidden" name="geocode" value="start">'+
						'<input id="online_search" type="hidden" name="online_search" value="'+online_search+'">'+
						'</form>'+
						'</div>'+
						'<div style="clear:both;"></div>'+
						'</div>'+
						'</div>'+
						'<!--left column closing div-->'+
						'</div>';
					//if tutors found, display them
					if(results['results']!==false) {
						var names=results['results']['names'];
						var ids=results['results']['ids'];
						var cities=results['results']['cities'];
						var states=results['results']['states'];
						var zips=results['results']['zips'];
						var dists=results['results']['dists'];
						var rates=results['results']['rates'];
						var subjects=results['results']['subjects'];
						var taglines=results['results']['taglines'];
						var descrips=results['results']['descrips'];
						var certified=results['results']['certified'];
						var videos=results['results']['videos'];
						var testimonialss=results['results']['testimonialss'];
						var reliability_reports=results['results']['reliability_reports'];
						var reference_reportss=results['results']['reference_reportss'];
						var background_checks=results['results']['background_checks'];
						var get_avatar=results['results']['get_avatar'];
						var profile_urls=results['results']['profile_urls'];
						var numtuts=ids.length;
						if(search_type!='online' && search_type!='online-discipline') {
							var location_text=(search_type!='state' ? 'near '+city+',':'in');
							var tutor_count_bar='<h3 style="margin-left: 5px; margin-top: 4px;"><b style="font-size: 120%; color: #702963;">'+numtuts+'</b> <i>'+dispsub+'</i> Tutors '+location_text+' '+state+'</h3>';
						} else {
							var tutor_count_bar='<h3 style="margin-left: 5px; margin-top: 4px;"><b style="font-size: 120%; color: #702963;">'+numtuts+'</b> Online <i>'+dispsub+'</i> Tutors'+local_fail_msg+'</h3>';
						}
						var display_html=left_column+
							'<!--right column-->'+
							'<div class="tutor_column">'+
							'<div class="tutor_count_bar">'+
							tutor_count_bar+
							'</div>';
			
						for(var i = 0; i < ids.length; i++) {
							var author_url=profile_urls[i];
							author_url+='?tid='+tid;
							//extract actual avatar src
							if(get_avatar[i].indexOf('user-avatar-pic.php')!==-1) {
								var avatar_url=get_avatar[i].substring(get_avatar[i].lastIndexOf("?src=")+5,get_avatar[i].lastIndexOf("&#038;w=118"));
								var avatar_tag='<img src="'+avatar_url+'" width="118"/>';
							} else {
								var avatar_tag=get_avatar[i];
							}
							if(testimonialss[i]==1) {
								var testimonial_display='<b><i><a class="profile_link" target="_blank" href="'+author_url+'">1 Testimonial</a></i></b>';
							} else if(testimonialss[i]>1) {
								var testimonial_display='<b><i><a class="profile_link" target="_blank" href="'+author_url+'">'+testimonialss[i]+' Testimonials</a></i></b>';
							} else {
								var testimonial_display='';
							}
							if (taglines[i].length > 50) {
								var tagell='...';
							} else {
								var tagell='';	
							}
							if (descrips[i].length > 300) {
								var desell='...';
							} else {
								var desell='';				
							}
							if (subjects[i].length > 107) {
								var subell='...';
							} else {
								var subell='';				
							}
							if(certified[i]!=0) {			
								var cert_img_url='https://www.theknowledgeroundtable.com/wp-content/plugins/certification-manager/images/certification_badge.png';
								var display_cert_badge='<div class="subject_badge"><img width="66px" src="'+cert_img_url+'" alt="This tutor is certified in '+subject+'" ></img></div>'+
									'<div class="subject_badge_text">Subject Certified</div>';
							} else {
								var display_cert_badge='';
							}
							if(videos[i]) {			
								var display_video_link='<a class="blink profile_link" target="_blank" href="'+author_url+'" style="margin-left: 15px;margin-top: 6px;color: darkcyan;font-weight: bold;">Video Profile!</a>';
							} else {
								var display_video_link='';
							}			
							var subject_list=subjects[i].split(', ');
							var contact_link='https://www.theknowledgeroundtable.com/tutoring/inquiry/form/?tutor_id='+ids[i];
							var email_img='https://www.theknowledgeroundtable.com/images/email.gif';
							var check_img='https://www.theknowledgeroundtable.com/wp-content/themes/intuition/images/check_mark.png';
							var num_subjects=subject_list.length;
							if(num_subjects!=0) {
								var plural=(subject_list.length==1 ? '' : 's' );
								var subject_list_display='<a class="profile_link" target="_blank" href="'+author_url+'">'+
									'<div class="profile_badges">'+
									num_subjects+' Subject'+plural+
									'</div>'+
									'</a>';
							} else {
								var subject_list_display='';
							}
							if(reference_reportss[i]!=0) {
								var plural=(reference_reportss[i]==1 ? '' : 's' );
								var reference_display='<a class="profile_link" target="_blank" href="'+author_url+'">'+
									'<div class="profile_badges">'+
									reference_reportss[i]+' Reference'+plural+
									'</div>'+
									'</a>';
							} else {
								var reference_display='';
							}
							if(reliability_reports[i]) {
								var reliability_display='<a class="profile_link" target="_blank" href="'+author_url+'">'+
									'<div class="profile_badges">'+
									reliability_reports[i]+' Reliability'+
									'</div>'+
									'</a>';
							} else {
								var reliability_display='';
							}
							if(search_type!='state'  && search_type!='online' && search_type!='online-discipline') { 
								var dist_display=dists[i].toFixed(2)+' miles'; 
							} else {
								var dist_display='';
							}
							
							display_html+=
								'<div class="search_results_tutor_box">'+
								display_cert_badge+				
								'<div class="tutor-pic">'+
								'<a class="profile_link" target="_blank" href="'+author_url+'">'+avatar_tag+'</a>'+
								display_video_link+					
								'</div>'+
								'<div class="tutor-desc" >'+
								'<table>'+
								'<tr>'+
								'<td>'+
								'<div style="float:left; font-size: 125%; text-decoration:underline;"><a class="profile_link" target="_blank" href="'+author_url+'">'+names[i]+'</a></div>'+
								'<div style="float:right; margin-right: 12%;">'+testimonial_display+'</div>'+
								'<div style="clear:both;"></div>'+
								'</td>'+
								'</tr>'+
								'<tr>'+
								'<td><b style="color: #702963;">'+taglines[i].substr(0,50)+tagell+'</b></td>'+	
								'</tr>'+
					        	'<tr>'+
						      '<td>'+descrips[i].substr(0,300)+desell+'</td>'+
					        	'</tr>'+
					         '</table>'+
								'<a class="profile_link" target="_blank" href="'+contact_link+'">'+
								'<div class="profile_badges_img">'+
								'<div style="float:left"><img src="'+email_img+'" width="20" height="20"></div>'+
								'<div style="float:left;margin-left:3px;margin-top:2px;">Send Email</div>'+
								'<div style="clear:both;"></div>'+
								'</div>'+
								'</a>'+
								subject_list_display+reference_display+reliability_display+
								'</div>'+
								'<div class="tutor-info">'+
								'<div class="rates">$'+rates[i]+'</div>'+
								'<div><b>'+dist_display+'</b></div>'+
								'<div><b>'+cities[i]+', '+states[i]+'</b></div>'+
								'<div style="margin-bottom: 10px;"><p>('+zips[i]+')</p></div>'+	
								'<a style="background-color: purple" class="call_to_action profile_link" href="'+author_url+'" target="_blank"><span>View Tutor</span></a>'+
								'</div>'+
								'</div>'+
								'<div style="clear:both;"></div>';
						}
			
					} else { //no tutors found
						if(subject.length!==0) {
							var subfail1=' who offers tutoring in <b>'+subject+'</b>';
						} else {
							var subfail1='';
						}
						var display_html=left_column+
							'<div class="tutor_column">'+
							'<h2>No Results</h2>'+
							'<p>We couldn\'t find a tutor within <b>'+radius+'</b> miles of zipcode <b>'+zipin+'</b>'+subfail1+'.</p>'+
							'<h4 style="margin:1.5em 0 0.5em 0;">But we can still help. Click the button below to post to our job board.</h4>'+
							'<a target="_blank" class="call_to_action" style="background-color: orange;" href="https://www.theknowledgeroundtable.com/tutoring/request-tutor/">Request A Tutor</a>'+
							'</div>';
					}
						
					display_html+=
						'</div>'+	
						'<!--right column end-->'+
						'<!--reference anchor for page bottom-->'+
						'<div class="anchor_bottom"></div>';
					$('#knowro_tutors_full').append(display_html);
						
					//sticky div code for tutor search
				   var div_top = $('#knowro_tutors_full').offset().top;
					$('#sidebar_sticky_div_height').height($('#find-tutor').height());
				
					$(document).on('scroll', function(){
				
					  var window_top = $(window).scrollTop();
						
		//			  if (window_top > div_top_sidebar_sticky_div) {						if (window_top > div_top) {
						 if ($('#sidebar_sticky_div.stick').length==0) {			    
						    $('#sidebar_sticky_div').addClass('stick');
							//$('#sidebar_sticky_div').css({ top: 0 });
						 }		
					  } else {
						 if ($('#sidebar_sticky_div.stick').length!=0) {			    
						    $('#sidebar_sticky_div').removeClass('stick');
						 } 
					  }
							
					});							
		
						
				}, 
				error: function(XHR, textStatus, errorThrown) {
					console.log("Error: " + textStatus);
					console.log("Error: " + errorThrown);
					console.log(XHR.responseJSON);
				}
			});
		}

		//populate sidebar display
		if ($('#knowro_tutors_sidebar').length>0) {
			var action='https://www.theknowledgeroundtable.com/tutoring/find-a-tutor/';
			var get_online_search='false';
			var search_type='standard';
			var zipin='';
			var state='';
			var city='';
			var lat='';
			var lng='';
			var radius='20';
			var subject='';
			var discipline='';
			var ratelo='10';
			var ratehi='100';
			var agelo='18';
			var agehi='80';
			var gender='Either';

			if(gender=='Either') {
				var gensel1=' selected';
				var gensel2='';
				var gensel3='';
			}	
			if(gender=='Female') {
				var gensel1='';
				var gensel2=' selected';
				var gensel3='';
			}
			if(gender=='Male') {
				var gensel1='';
				var gensel2='';
				var gensel3=' selected';
			}
			var dispsub=(search_type=='discipline' || search_type=='online-discipline' ? discipline:subject);
			dispsub=(dispsub==null ? '':dispsub);
			if(search_type!='online' && search_type!='online-discipline') {
				var online_switch='<div class="local-switch" style="margin-top:5px;"><b style="font-size: 110%;">Zipcode: </b><input placeholder="Zipcode" type="text" name="zipin" id="zipin" value="'+zipin+'" style="width:60px;"/></div>'+
				'<div style="clear:both"></div>'+
				'<div><a id="switch-online-on" style="" href="" >&rarr;Switch to online tutors</a></div>'+
				'<div><a id="switch-local-on" style="display:none;" href="" >&rarr;Switch to local tutors</a></div>';
			} else {
				var online_switch='<div class="local-switch" style="display:none;margin-top:5px;"><b style="font-size: 110%;">Zipcode: </b><input placeholder="Zipcode" type="text" name="zipin" id="zipin" value="'+zipin+'" style="width:60px;"/></div>'+
				'<div style="clear:both"></div>'+
				'<div><a id="switch-online-on" style="display:none;" href="" >&rarr;Switch to online tutors</a></div>'+
				'<div><a id="switch-local-on" style="" href="" >&rarr;Switch to local tutors</a></div>';
			}
			if(search_type!='online' && search_type!='online-discipline') {
				var online_search=(get_online_search ? get_online_search : 'false' );
			} else {
				var online_search=(get_online_search ? get_online_search : 'true' );
			}
 		
			//display
			var display_html=
				'<!--left column-->'+
				'<div class="tutor_search_left_column" style="float:none;">'+	
				'<div style="width:259px;height:1px;"></div>'+
				'<div id="sidebar_sticky_div">'+
				'<div id="find-tutor">'+
				'<h2 style="text-shadow: 0 0; padding: 0; margin: 0 0 0 2px; text-align: center; font-size:25px; line-height: 36px;"><a href="https://www.theknowledgeroundtable.com/tutoring/find-a-tutor/" target="_blank" style="color:black !important">Find A Tutor</a></h2>'+
				'<form id="tutorsearch" name="tutorsearch" class="tutorsearch" method="get" action="'+action+'">'+
				'<select name="subject" id="subject">'+
				display_tutoring_subjects_disciplines(dispsub,'Subject')+
				'</select></br>'+
				online_switch+
				'<input type="hidden" name="radius" id="radius" value="'+radius+'">'+
				'<br>'+
				'<div id="advanced_toggle_on" style="margin-top:-17px;margin-bottom:-10px;"><a href="">+ Advanced Options</a></div>'+
				'<div id="advanced_options" style="display:none;">'+
				'<div style="margin-top:-17px;">'+
				'<div id="advanced_toggle_off" style="margin-bottom:-3px;"><a href="">- Fewer Options</a></div>'+
				'<div style="float:left; width: 110px; margin-top:5px;">$<input type="text" name="ratelo" id="ratelo" value="'+ratelo+'"  style="width:20px;"/>'+
				' to $<input type="text" name="ratehi" id="ratehi"  value="'+ratehi+'" style="width:25px;"/></div>'+
				'<div style="float:left; width: 98px; margin-top:5px;"><input type="text" name="agelo" id="agelo" value="'+agelo+'" style="width:20px;"/>'+
				' to <input type="text" name="agehi" id="agehi" value="'+agehi+'" style="width:25px;"/> yrs</div>'+
				'</div>'+
				'<div style="clear:both"></div>'+
				'<div style="margin-bottom: -3px;margin-top:5px;">'+
				'<b style="font-size: 110%;">Sex: </b><select name="gender">'+
				'<option value="Either"'+gensel1+'>Either</option>'+
				'<option value="Female"'+gensel2+'>Female</option>'+
				'<option value="Male"'+gensel3+'>Male</option>'+
				'</select>'+
				'</div>'+
				'</div>'+
				'<div style="margin-top: 17px; text-align: center; margin-left: -30px; font-size: 120%;">'+
				'<input type="submit" class="tutorsearchsubmit" name="tutorsearchsubmit" '+
				'onMouseOver="this.style=\'height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #aecbca; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;\'" onMouseOut="this.style=\'height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #94bbb9; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;\'"'+ 
				'onMouseDown="this.style=\'height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #74a6a4; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;\'" style="height: 30px; width: 170px; margin-top: -5px; font-size: 105%; font-weight: bold; font-family: Georgia; background-color: #94bbb9; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border:1px solid #bababa; border-radius:7px;" value="Search"/>'+
				'<!--<input type="submit" class="tutorsearchsubmit" name="tutorsearchsubmit" value="Search"/>-->'+
				'</div><input id="geolat" type="hidden" name="geolat" value="'+lat+'">'+
				'<input id="geolng" type="hidden" name="geolng" value="'+lng+'">'+
				'<input id="geocity" type="hidden" name="geocity" value="'+city+'">'+
				'<input id="geostate" type="hidden" name="geostate" value="'+state+'">'+
				'<input id="geocode" type="hidden" name="geocode" value="start">'+
				'<input id="online_search" type="hidden" name="online_search" value="'+online_search+'">'+
				'</form>'+
				'</div>'+
				'<div style="clear:both;"></div>'+
				'</div>'+
				'</div>'+
				'<!--left column closing div-->'+
				'</div>';
				
			$('#knowro_tutors_sidebar').append(display_html);
		}
	}
});