// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAKW6to7vHn6C0snY2l53t0cTw5dTbDQ90",
    authDomain: "dacapoapp-918ad.firebaseapp.com",
    projectId: "dacapoapp-918ad",
    storageBucket: "dacapoapp-918ad.firebasestorage.app",
    messagingSenderId: "856805139575",
    appId: "1:856805139575:web:5e3ed16fa3539381391272",
    measurementId: "G-137L68XEQ8"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Éléments du DOM
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');
const loginErrorElement = document.getElementById('loginError');
const signupEmailInput = document.getElementById('signupEmail');
const signupPasswordInput = document.getElementById('signupPassword');
const signupErrorElement = document.getElementById('signupError');
const switchToSignupButton = document.getElementById('switchToSignup');
const switchToLoginButton = document.getElementById('switchToLogin');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// Fonctions de connexion et d'inscription
function login() {
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Utilisateur connecté avec succès
            console.log('Connecté:', userCredential.user);
            window.location.href = 'main.html'; // Rediriger vers la page principale
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            loginErrorElement.textContent = errorMessage;
            console.error('Erreur de connexion:', errorCode, errorMessage);
        });
}

function signup() {
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Utilisateur inscrit avec succès
            console.log('Inscrit:', userCredential.user);
            window.location.href = 'main.html'; // Rediriger vers la page principale
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            signupErrorElement.textContent = errorMessage;
            console.error('Erreur d\'inscription:', errorCode, errorMessage);
        });
}

// Gestion de l'affichage des formulaires
switchToSignupButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

switchToLoginButton.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});
