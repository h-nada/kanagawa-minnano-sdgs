$(document).ready(function(){
	//list click
	$("#imagelist a").click(function(){
		$("#imagearea img").attr("alt",$(this).text()).attr("src",$(this).attr("href"));
		$("#aboutarea").text($(this).attr("title"));
		return false;
	});
});