$(document).ready(function(){
	

		$("#logo").keyup(function() {
			var value=$("#logo").val();
			$("#content-logo").html("<img src='"+(value)+"'>");
		});
		$("#zawartoscStrony").keyup(function() {
			var value=$("#zawartoscStrony").val();
			$("#content-zawartoscStrony").html(value);
		});
		$("#stopka").keyup(function() {
			var value=$("#stopka").val();
			$("#content-stopka").html(value);
		});
		$("#tekstPowitalny").keyup(function() {
			var value=$("#tekstPowitalny").val();
			$("#content-tekstPowitalny").html(value);
		});
		$("#menu").keyup(function() {
			var value=$("#menu").val();
			menuTab = value.split(';');
			html = "";
			
			html += "<ul>";
			
			for(i=0; i<menuTab.length; i++)
			{
				html += "<li>";
					if(menuTab[i].indexOf("|") !== -1)
					{
						submenuTab=menuTab[i].split('|');
						
						html += submenuTab[0];
						html += "<div class='submenu'>"+
						submenuTab[1]+"</div>";
					}
					else
						html += menuTab[i];
				html += "</li>";
			}
			html += "</ul>";
			$("#content-menu").html(html);
		});
		$("#content-menu").on("mouseenter", "li", function() {
			$("#content-menu").children(".submenu").fade.In();
		});
		$("#content-menu").on("mouseenter", "li", function() {
			$("#content-menu").children(".submenu").fade.Out();
		});
});