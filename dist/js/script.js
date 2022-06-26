// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    // toTop.classList.remove('hidden');
    // toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    // toTop.classList.remove('flex');
    // toTop.classList.add('hidden');
  }
};

function tampil()
{
  var hasilTotal = document.getElementById("Total");
  var jumlah_pesan= document.getElementById("jumlah").value;
  var harga = document.getElementById("jenis_pesan").value;
  var TotalPesan = jumlah_pesan * harga;
  hasilTotal.value=TotalPesan;
}
