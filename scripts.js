// completa el estado y los métodos
// script.js
const app = Vue.createApp({
  data() {
    return {
      // NAV
      vista_inicio: true,
      vista_proyectos: false,
      vista_contacto: false,
      vista_agregar: false,

      // LISTA PARA v-for
      proyectos: [
        { titulo: "Portfolio Web", descripcion: "Mi web personal.", likes: 2 },
        { titulo: "API Java", descripcion: "Backend en Spring Boot.", likes: 5 },
        { titulo: "Dashboard Vue", descripcion: "Practice SPA.", likes: 1 }
      ],

      // FORM CONTACTO (v-model)
      formContacto: {
        nombre: "",
        mensaje: ""
      },

      // FORM AGREGAR
      nuevoProyecto: {
        titulo: "",
        descripcion: ""
      }
    };
  },

  methods: {
    mostrarVista(v) {
      // Reseteamos todas a false
      this.vista_inicio = false;
      this.vista_proyectos = false;
      this.vista_contacto = false;
      this.vista_agregar = false;

      // Activamos la seleccionada
      // Usamos notación de corchetes para acceder dinámicamente a la propiedad
      this[`vista_${v}`] = true;
    },

    agregarProyecto() {
      if (this.nuevoProyecto.titulo.trim() === "") return;

      this.proyectos.push({
        titulo: this.nuevoProyecto.titulo,
        descripcion: this.nuevoProyecto.descripcion,
        likes: 0
      });

      this.nuevoProyecto.titulo = "";
      this.nuevoProyecto.descripcion = "";
      alert("Proyecto agregado!");
      
      // Opcional: Volver a la vista de proyectos automáticamente
      this.mostrarVista('proyectos');
    },

    ponerLike(proy) {
      proy.likes++;
    }
  }
});

// IMPORTANTE: BORRÉ LA LÍNEA app.mount('#app') DE AQUÍ.
// La pondremos en el HTML al final.