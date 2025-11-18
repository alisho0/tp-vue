app.component("mi-header", {
  template: `
    <header class="bg-primary text-white p-3 mb-3">
      <div class="container">
        <h1 class="fw-bold m-0">Mi Portafolio</h1>
      </div>
    </header>
  `,
});

// foot
app.component("mi-footer", {
  template: `
    <footer class="bg-dark text-white text-center py-3 mt-4">
      <p class="mb-0">2025 - Portafolio Vue SPA | Rea, Gabriel - Díaz, Lucas - Sosa, Matías - Coronel, Maximiliano - Bruno Vera, Leonel</p>
    </footer>
  `,
});

// inicio
app.component("vista-inicio", {
  template: `
    <section class="vista container py-4">
      <div class="p-5 mb-4 bg-light rounded-3 border">
        <h2 class="fw-bold">Bienvenido a mi Portafolio</h2>
        <p class="fs-5">
          Me llamo Luis Rodriguez, soy programador backend con más de 2 años de experiencia y aquí vas a encontrar mis proyectos, contacto y más info
        </p>
      </div>
    </section>
  `,
});

app.component("vista-proyectos", {
  props: ["items"],
  emits: ["like"],
  template: `
    <section class="vista container py-3">
      <h2 class="mb-4 fw-bold">Mis Proyectos</h2>

      <p v-if="items.length === 0" class="alert alert-warning">
        No hay proyectos aún.
      </p>

      <div class="row g-3">
        <div class="col-md-4" v-for="p in items">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ p.titulo }}</h5>
              <p class="card-text">{{ p.descripcion }}</p>

              <button 
                class="btn btn-outline-primary w-100 mt-2"
                @click="$emit('like', p)"
              >
                Like ({{ p.likes }})
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});

// contacto
app.component("vista-contacto", {
  props: ["nombre", "mensaje"],
  emits: ["update:nombre", "update:mensaje"],
  data() {
    return {
      enviado: false,
    };
  },
  template: `
    <section class="vista container py-4">
      <h2 class="fw-bold mb-4">Contacto</h2>
      <div 
        class="alert alert-success alert-dismissible fade show"
        role="alert"
        v-if="enviado"
      >
        ¡Mensaje enviado correctamente!
        <button type="button" class="btn-close" @click="enviado = false"></button>
      </div>

      <div class="mb-3">
        <label class="form-label">Tu nombre</label>
        <input
          type="text"
          class="form-control"
          placeholder="Tu nombre"
          :value="nombre"
          @input="$emit('update:nombre', $event.target.value)"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">Mensaje</label>
        <textarea
          class="form-control"
          rows="4"
          placeholder="Escribe tu mensaje..."
          :value="mensaje"
          @input="$emit('update:mensaje', $event.target.value)"
        ></textarea>
      </div>

      <p v-if="mensaje === '' && !enviado" class="text-danger">
        El mensaje está vacío
      </p>

      <button 
        class="btn btn-primary w-100 mb-4"
        @click="enviar"
      >
        Enviar mensaje
      </button>

      <div class="card mt-4 shadow-sm">
        <div class="card-body">
          <h5 class="fw-bold">Vista Previa:</h5>
          <p><strong>{{ nombre }}</strong>: {{ mensaje }}</p>
        </div>
      </div>
    </section>
  `,
  methods: {
    enviar() {
      if (this.mensaje.trim() === "") return;

      this.enviado = true;
      this.$emit("update:nombre", "");
      this.$emit("update:mensaje", "");
    },
  },
});

// agregar
app.component("vista-agregar", {
  props: ["titulo", "descripcion"],
  emits: ["update:titulo", "update:descripcion", "agregar"],
  template: `
    <section class="vista container py-4">
      <h2 class="fw-bold mb-4">Agregar Nuevo Proyecto</h2>

      <div class="mb-3">
        <label class="form-label">Título</label>
        <input
          type="text"
          class="form-control"
          placeholder="Título del proyecto"
          :value="titulo"
          @input="$emit('update:titulo', $event.target.value)"
        >
      </div>

      <div class="mb-3">
        <label class="form-label">Descripción</label>
        <textarea
          class="form-control"
          rows="4"
          placeholder="Descripción del proyecto"
          :value="descripcion"
          @input="$emit('update:descripcion', $event.target.value)"
        ></textarea>
      </div>

      <button 
        class="btn btn-success w-100 mt-2"
        @click="$emit('agregar')"
      >
        Agregar Proyecto
      </button>
    </section>
  `,
});
