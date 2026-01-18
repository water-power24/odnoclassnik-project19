function showModal() {
  console.log("showModal вызвана");
  document.getElementById("Modal").style.display = "block";
}

function closeModal() {
  console.log("closeModal вызвана");
  document.getElementById("Modal").style.display = "none";
}

function showLogoutModal() {
  document.getElementById("logoutModal").style.display = "block";
}

function closeLogoutModal() {
  document.getElementById("logoutModal").style.display = "none";
}

function showProfilePanel() {
  console.log("showProfilePanel вызвана");
  document.getElementById("profilePanel").classList.add("active");
  document.getElementById("panelOverlay").classList.add("active");
}

function closeProfilePanel() {
  console.log("closeProfilePanel вызвана");
  document.getElementById("profilePanel").classList.remove("active");
  document.getElementById("panelOverlay").classList.remove("active");
}

window.onclick = function (event) {
  console.log("Клик по window", event.target);

  const modal = document.getElementById("Modal");
  const logoutModal = document.getElementById("logoutModal");
  const panelOverlay = document.getElementById("panelOverlay");

  if (event.target === modal) {
    console.log("Клик вне Modal - закрываем");
    closeModal();
  }
  if (event.target === logoutModal) {
    console.log("Клик вне logoutModal - закрываем");
    closeLogoutModal();
  }
  if (event.target === panelOverlay) {
    console.log("Клик по overlay - закрываем профиль");
    closeProfilePanel();
  }
};

document.addEventListener("keydown", function (event) {
  console.log("Нажата клавиша:", event.key);
  if (event.key === "Escape") {
    closeModal();
    closeLogoutModal();
    closeProfilePanel();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const panelOverlay = document.getElementById("panelOverlay");
  if (panelOverlay) {
    panelOverlay.addEventListener("click", closeProfilePanel);
  }
});

// -=-= все что выше не трогай, все работает, там все модальное окна и предупреждения logout
console.log("✅ index.js загружен!");

function closeLogoutModal() {
  console.log("Закрыть модалку выхода");
  // ваш код
}

function closeProfilePanel() {
  console.log("Закрыть панель профиля");
  // ваш код
}
