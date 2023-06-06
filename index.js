warning = document.getElementById("warning");

document.getElementById("input").addEventListener("keyup", function (event) {
  if (event.getModifierState("CapsLock") && event.getModifierState("NumLock")) {
    warning.style.display = "block";
    warning.textContent = "⚠️ Caps Lock and Num Lock are activated...";
  } else if (event.getModifierState("CapsLock")) {
    warning.style.display = "block";
    warning.textContent = "⚠️ Caps Lock is activated...";
  } else if (event.getModifierState("NumLock")) {
    warning.style.display = "block";
    warning.textContent = "⚠️ Num Lock is activated...";
  } else {
    warning.style.display = "none";
  }
});

// switch (event) {
//     case event.getModifierState("CapsLock"):
//       warning.style.display = "block";
//       warning.textContent = "⚠️ Caps Lock is activated...";
//       break;
//     case event.getModifierState("Numlock"):
//       warning.style.display = "block";
//       warning.textContent = "⚠️ Num Lock is activated...";

//     default:
//       warning.style.display = "block";
//       warning.textContent = "⚠️ ça marche";
//   }
