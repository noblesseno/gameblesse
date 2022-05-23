$(document).ready(function(){

function ImageSwitcher(choices, i) {
	i = -1;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
	
	var hide_current_image = function() {
		console.log(i);
		if(choices){
			if(i>=0) choices[i].style.visibility = "hidden";
			i++;
		}
	}
	
	var show_next_image = function() {
		console.log(i);
		if(choices){
			if(i >= (choices.length)) {
				i = -1;
			} 
			if(i>=0) choices[i].style.visibility = "visible";
		}
	}
	
	this.CheckStyle = function(data_class) {
		if(choices[i] == undefined) return true;
		return choices[i].className.includes(data_class);
	}
	
}
  
    var pants = $(".pant");
	var shirts = $(".shirt");
	var pars = $(".par");
	var bums = $(".bum");
	var buns = $(".bun");
	var fars = $(".far");
	var glos = $(".glo");

	var shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
	
	var pants_picker = new ImageSwitcher(pants);
	document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
	
	var pars_picker = new ImageSwitcher(pars);
	document.getElementById("par_button").onclick = function() {pars_picker.Next(); };
	
	var bums_picker = new ImageSwitcher(bums);
	document.getElementById("bum_button").onclick = function() {bums_picker.Next(); };
	
	var buns_picker = new ImageSwitcher(buns);
	document.getElementById("bun_button").onclick = function() {buns_picker.Next(); };
	
	var fars_picker = new ImageSwitcher(fars);
	document.getElementById("far_button").onclick = function() {fars_picker.Next(); };	
	
	var glos_picker = new ImageSwitcher(glos);
	document.getElementById("glo_button").onclick = function() {glos_picker.Next(); };
	

	document.getElementById("totals_button").onclick = function() { 
		console.log("Проверка data_official_style");
		var game_menu = document.getElementById("game_menu");
		var game_results = document.getElementById("game_results");
		var game_results_content = document.getElementById("game_results_content");
		var game_results_string = "";
		var game_results_success = true;
		
		
		if(!shirt_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобрана рубашка!<br>";
			game_results_success = false;
		}
		
		if(!pants_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобраны штаны!<br>";
			game_results_success = false;
		}

		if(!pars_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобрана прическа!<br>";
			game_results_success = false;
		}
		
		if(!glos_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобрана байка!<br>";
			game_results_success = false;
		}				
				
		if(!fars_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобран пиджак!<br>";
			game_results_success = false;
		}				
				
		if(!bums_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобрана обувь!<br>";
			game_results_success = false;
		}				
				
		if(!buns_picker.CheckStyle("data_official_style")){
			game_results_string += "Неверно подобран костюм!<br>";
			game_results_success = false;
		}				
		
		if(game_results_success) {
			game_results_content.innerHTML = "Поздравляем с успешным созданием Вашего персонажа";
			document.getElementById("back_to_menu_button").style.display = "block";
		} else {
			game_results_content.innerHTML = game_results_string;
			document.getElementById("back_to_menu_button").style.display = "none";
		}
		game_results.style.display = "block";
		game_menu.style.display = "none";
	};
	
	document.getElementById("back_button").onclick = function() { 
		var game_menu = document.getElementById("game_menu");
		var game_results = document.getElementById("game_results");
		game_menu.style.display = "flex";
		game_results.style.display = "none";
	};
});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });