function initializeApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyB4AEgSfb2jKlHX-NFnZ9T46dpcXfUxtzA",
        authDomain: "pruebas-vue-d5853.firebaseapp.com",
        projectId: "pruebas-vue-d5853",
        storageBucket: "pruebas-vue-d5853.appspot.com",
        messagingSenderId: "587859084306",
        appId: "1:587859084306:web:5d595a3b5ec68ab092c4cb"
    };
}

//Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyB4AEgSfb2jKlHX-NFnZ9T46dpcXfUxtzA',
    authDomain: 'pruebas-vue-d5853.firebaseapp.com',
    projectId: 'pruebas-vue-d5853'
});

const firebaseConfig = {
    apiKey: "AIzaSyB4AEgSfb2jKlHX-NFnZ9T46dpcXfUxtzA",
    authDomain: "pruebas-vue-d5853.firebaseapp.com",
    projectId: "pruebas-vue-d5853",
    storageBucket: "pruebas-vue-d5853.appspot.com",
    messagingSenderId: "587859084306",
    appId: "1:587859084306:web:5d595a3b5ec68ab092c4cb"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const collection = db.collection('usuarios');

//Instancia de Vue
new Vue({
    el: '#main',
    data: {
        nombre: null,
        edad: null,
        usuarios: []
    },
    mounted() {
        this.usuarios = []
        collection.get()
            .then(r => {
                r.docs.map(item => {
                    this.usuarios.push({
                        id: item.id,
                        data: item.data()
                    })
                })
            })
    },
    methods: {
        addUsuario() {
            collection.add({
                nombre: this.nombre,
                edad: this.edad
            }).then(() => this.$mount())
        },
        deleteUsuario(id) {
            collection.doc(id).delete().then(() => this.$mount())
        },
        updateUsuario(id) {
            collection.doc(id).set({ nombre: this.nombre, edad: this.edad }).then(() => this.$mount())
        }
    },
})