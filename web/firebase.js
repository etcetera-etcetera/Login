import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getUsers(db) {
  const usersRef = collection(db, "users");
  const data = await getDocs(usersRef);
  const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return users;
}

document.querySelector(".submitBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  await signin(document.querySelector(".active").textContent.toLowerCase());
});

async function signin(process) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  var users = await getUsers(db);

  var userNotFound = false;
  if (process == "sign in") {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (email == user.email) {
        if (password == user.password) {
          successfulSignin(user);
          break;
        } else {
          wrongPassword();
        }
      } else {
        userNotFound = true;
      }
    }

    if (userNotFound) {
      user404();
    }
  } else if (process == "new account") {
    var userExists = false;

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (email == user.email) {
        userExists = true;
        break;
      }
    }

    if (userExists) {
      userFound();
    } else {
      register(email, password);
    }
  }
}

function successfulSignin(user) {
  localStorage.setItem("account", user.id);
  window.location.pathname = "/successful";
}

function wrongPassword() {
  var errorDOM = document.querySelector(".error");
  errorDOM.textContent = "Please, enter valid credentials";
  errorDOM.style.opacity = "1";
}

function user404() {
  var errorDOM = document.querySelector(".error");
  errorDOM.textContent = "User not found";
  errorDOM.style.opacity = "1";
}

function userFound() {
  var errorDOM = document.querySelector(".error");
  errorDOM.textContent = "Account already exists";
  errorDOM.style.opacity = "1";
}

async function register(email, password) {
  var user = await addDoc(collection(db, "users"), {
    email: email,
    password: password,
  });

  successfulSignin(user);
}
