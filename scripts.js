const app = Vue.createApp({
  data() {
    return {
      vista_inicio: true,
      vista_proyectos: false,
      vista_contacto: false,
      vista_agregar: false,

      proyectos: [
        {
          titulo: "Portfolio Web",
          descripcion: "Mi web personal diseñada con Vue JS",
          likes: 3,
        },
        {
          titulo: "Sistema SITE",
          descripcion:
            "Sistema Interno de Trámites y Expedientes diseñado para la Dirección General de Comercio de Santiago del Estero.",
          likes: 5,
        },
        {
          titulo: "Sistema Escolar",
          descripcion:
            "Sistema interno de gestión de alumnos y sus respectivas observaciones.",
          likes: 1,
        },
      ],

      // form de contacto (v-model)
      formContacto: {
        nombre: "",
        mensaje: "",
      },

      // form para agregar
      nuevoProyecto: {
        titulo: "",
        descripcion: "",
      },
    };
  },

  methods: {
    mostrarVista(v) {
      // Reseteamos todas a false
      this.vista_inicio = false;
      this.vista_proyectos = false;
      this.vista_contacto = false;
      this.vista_agregar = false;

      this[`vista_${v}`] = true;
    },

    agregarProyecto() {
      if (this.nuevoProyecto.titulo.trim() === "") return;

      this.proyectos.push({
        titulo: this.nuevoProyecto.titulo,
        descripcion: this.nuevoProyecto.descripcion,
        likes: 0,
      });

      this.nuevoProyecto.titulo = "";
      this.nuevoProyecto.descripcion = "";
      alert("Proyecto agregado!");

      this.mostrarVista("proyectos");
    },

    ponerLike(proy) {
      proy.likes++;
    },
  },
});

// La pondremos en el html al final
