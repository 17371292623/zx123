$(document).ready(function(){
	$("#sub1").click(function(){
		console.log('data');

		$.ajax({
			type:"get",
			url:"http://192.168.8.119:5555/index",
			success(data){
				console.log(data);
			}
		});
	})
})
