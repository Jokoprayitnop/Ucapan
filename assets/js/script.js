// trigger to play music in the background with sweetalert
window.addEventListener( () => {
  Swal.fire({
    title: 'Do you want to play music in the background?',
    // text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.music').play();
      resolveFetch().then(content());
    } else {
      resolveFetch().then(content());
    }
  });
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
