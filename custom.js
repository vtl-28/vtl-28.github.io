$(document).ready(function() {
		/*home script*/
		$("button#tell_me_more").click(function() {

			$("div.mission, div.vision, div.tell_me_less").css("display", "block");
			$("button#tell_me_less").css("display", "inline");
		    $("button#tell_me_less").css("margin-top", "50px");
			$(this).css("display", "none");
			$("p#values, p#mission, p#vision, h1#welcome").css("color", "#ffffff");
			$("p#values, p#mission, p#vision").css("margin-bottom", "5px");

			$("div#top_part").css("margin-top", "10px");


		});
		$("button#tell_me_less").click(function() {

			$("div.mission,div.vision, button#tell_me_less").css("display", "none");
			$("button#tell_me_more").css("display", "inline");
			$("p#values, p#mission, p#vision, h1#welcome").css("color", "#ffffff");
			$("div#top_part").css("margin-top", "130px");
		});	



		/*about script*/
		$("button#about_show_more").click(function() {

			$("div.specialities, div.speciality_listing").css("display", "flex");
			$("button#about_show_less").css("display", "inline");
			$("p#specialities").css("margin-top", "40px");

			$(this).css("display", "none");
		});
		$("button#about_show_less").click(function() {

			$("div.specialities, div.speciality_listing").css("display", "none");
			$("button#about_show_more").css("display", "inline");
			$(this).css("display", "none");
		});




		/*services script*/
		$("button#service_show_more").click(function() {

			$("div.second_half_services, div.third_half_services").css("display", "flex");
			$("button#service_show_less").css("display", "inline");

			$(this).css("display", "none");
		});
		$("button#service_show_less").click(function() {

			$("div.second_half_services, div.third_half_services").css("display", "none");
			$("button#service_show_less").css("display", "none");
			$("button#service_show_more").css("display", "inline");
			$(this).css("display", "none");
		});

});