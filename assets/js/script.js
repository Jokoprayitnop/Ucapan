$(".deleteRecord").click(function(){
		//alert("test");
		var id= $(this).attr('rel');
		//alert(id);
		var deletefunction= $(this).attr('rel1');
		//alert(deletefunction);
		Swal.fire({
			title: "Are you sure?",
			text: "You will not be able to recover this record again!",
			type:"warning",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "Yes, delete it!"
		},
		function(){
			window.location.href="/admin/"+deleteFunction+"/"+id;
		});

$(document).ready(function () {
  // Render Background Random Shape
  var html = "";
  for (var i = 1; i <= 50; i++) {
    html +=
      '<div class="shape-container--' +
      i +
      ' shape-animation"><div class="random-shape"></div></div>';
  }

  document.querySelector(".shape").innerHTML += html;

  var $allShapes = $("[class*='shape-container--']");
});
