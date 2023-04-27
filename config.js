import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
  
        apiKey: "AIzaSyCGv9nuArm2BML48_GTZWxl_BQzG342hp4",
        authDomain: "aek33-a28e5.firebaseapp.com",
        databaseURL: "https://aek33-a28e5-default-rtdb.firebaseio.com",
        projectId: "aek33-a28e5",
        storageBucket: "aek33-a28e5.appspot.com",
        messagingSenderId: "953823371353",
        appId: "1:953823371353:web:6c309a4be30de7ef695148",
        measurementId: "G-GFFQMLXTJC"
      
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
