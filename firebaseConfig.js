import { initializeApp } from 'firebase/app';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA97i57glP1f5JZbKXxYZYk4GnqcidGQJc",
  authDomain: "rodizio-mobile.firebaseapp.com",
  databaseURL: "https://rodizio-mobile-default-rtdb.firebaseio.com",
  projectId: "rodizio-mobile",
  storageBucket: "rodizio-mobile.firebasestorage.app",
  messagingSenderId: "997614968410",
  appId: "1:997614968410:web:dc5d6870ad6fd311a60263"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

export default app; // Você pode exportar o app para usar em outros arquivos
