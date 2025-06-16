function showAlert() {
  alert("BRAVO! Klikniv si gumb.");
}

function toggleBackground() {
  document.body.classList.toggle("new-background");
}

function preveriObrazec() {
  var ime = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();

  if (ime === "" || email === "") {
    alert("Prosimo, izpolnite vsa obvezna polja.");
    return false;
  }

  if (!email.includes("@")) {
    alert("E-poštni naslov mora vsebovati @.");
    return false;
  }

  alert("Obrazec uspešno oddan!");
  return true;
}


