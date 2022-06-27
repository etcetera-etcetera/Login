const tabs = document.getElementsByClassName("tab");
const submitBtn = document.querySelector(".submitBtn");
const forgotPassword = document.querySelector(".forgotPassword");

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  tab.addEventListener("click", () => {
    toggleTab(i);
  });
}

function toggleTab(i) {
  tabs[0].classList.toggle("active");
  tabs[0].classList.toggle("inactive");
  tabs[1].classList.toggle("active");
  tabs[1].classList.toggle("inactive");

  var errorDOM = document.querySelector(".error");
  errorDOM.style.opacity = "0";
  errorDOM.textContent = ".";

  var currentTab = tabs[i];
  if (i == 0) {
    submitBtn.textContent = "Register";
    forgotPassword.style.display = "none";
  } else {
    submitBtn.textContent = "Sign in";
    forgotPassword.style.display = "block";
  }
}

function checkEmail() {
  const email = document.getElementById("email").value;
  const regex = /..+@..+/;
  var matches = regex.test(email);
  console.log(matches);

  if (!matches) {
    document.querySelector(".errorMsgEmail").style.opacity = "1";
  } else {
    document.querySelector(".errorMsgEmail").style.opacity = "0";
  }
}
