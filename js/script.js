

function scrollToPosition(position) {
  window.scrollTo({
      top: position,
      behavior: "smooth"
  });
}
function hitung1() {
    const tinggi= parseFloat(document.getElementById("tinggi1").value);
    const alas = parseFloat(document.getElementById("alas1").value);

    if (isNaN(tinggi) || isNaN(alas)) {
        alert("isi dulu ngab");
        return;
      }

    const luasSegitiga = 0.5 * tinggi * alas;
    let t = tinggi1.value
    let a = alas1.value
    let l = luasSegitiga
    document.getElementById("hasil1").innerHTML = `Luas segitiga dari Tinggi ${t}cm dan Alas ${a}cm adalah ${l}cm2.`;
  }
  
  function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
    var sisiC = parseFloat(document.getElementById("sisiC").value);
    
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
      document.getElementById("hasil").innerHTML = "Masukkan panjang sisi dengan benar.";
    } else {
      var keliling = sisiA + sisiB + sisiC;
      document.getElementById("hasil").innerHTML = "Keliling segitiga adalah: " + keliling.toFixed(2);
    }
  }
  function reset1() {
    document.getElementById("tinggi1").value = "";
    document.getElementById("alas1").value = "";
    document.getElementById("hasil1").innerHTML = "";
  }

  function reset2() {
    document.getElementById("SisiA").value = "";
    document.getElementById("SisiB").value = "";
    document.getElementById("SisiC").value = "";
    document.getElementById("hasil2").innerHTML = "";
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      if (document.activeElement.tagName === "INPUT") {
        event.preventDefault();
        if (document.activeElement.id === "alas1" || document.activeElement.id === "tinggi1") {
          document.getElementById("hitung1").click();
        } else if (document.activeElement.id === "SisiA" || document.activeElement.id === "SisiB" || document.activeElement.id === "SisiC") {
          document.getElementById("hitung2").click();
        }
      }
    }
  });