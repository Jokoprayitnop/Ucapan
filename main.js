onload = () =>{
    setTimeout(()=> {
        document.body.classList.remove("container");
    }, 0);
};

window.addEventListener('load', () => {
  Swal.fire({
    title: 'Ingin Memutar Musik di Latar Belakang?',
    // text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya',
    cancelButtonText: 'Tidak',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.song').play();
      resolveFetch().then(animationTimeline());
    } else {
      resolveFetch().then(animationTimeline());
    }
  });
});
