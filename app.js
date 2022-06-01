function initializeApp() {
    const firebaseConfig = {
        apiKey: "#####",
        authDomain: "####",
        projectId: "#####",
        storageBucket: "#####",
        messagingSenderId: "#####",
        appId: "#####"
    };
}

//Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '######',
    authDomain: '######',
    projectId: '####'
});

const firebaseConfig = {
    apiKey: "####",
    authDomain: "####",
    projectId: "#####",
    storageBucket: "#####",
    messagingSenderId: "#####",
    appId: "#####"
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
