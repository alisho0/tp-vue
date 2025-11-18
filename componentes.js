// aqui vas a completar cada componente global
// HEADER
// HEADER
app.component('mi-header', {
  template: `
    <header class="header">
      <h1>Mi Portafolio</h1>
    </header>
  `
});

// FOOTER
app.component('mi-footer', {
  template: `
    <footer class="footer">
      <p>© 2025 - Mi Portafolio Vue SPA</p>
    </footer>
  `
});

// VISTA INICIO
app.component('vista-inicio', {
  template: `
    <section class="vista">
      <h2>Bienvenido a mi Portafolio</h2>
      <p>Aquí vas a encontrar mis proyectos, contacto y más info.</p>
    </section>
  `
});

// VISTA PROYECTOS - usa props + v-for + v-on
app.component('vista-proyectos', {
  props: ['items'],
  emits: ['like'],
  template: `
    <section class="vista">
      <h2>Mis Proyectos</h2>

      <p v-if="items.length === 0">No hay proyectos aún.</p>

      <div v-for="p in items" class="card">
        <h3>{{ p.titulo }}</h3>
        <p>{{ p.descripcion }}</p>

        <button @click="$emit('like', p)">
          👍 Like ({{ p.likes }})
        </button>
      </div>
    </section>
  `
});

// CONTACTO – usa v-model en dos sentidos + v-if
app.component('vista-contacto', {
  props: ['nombre', 'mensaje'],
  emits: ['update:nombre', 'update:mensaje'],
  template: `
    <section class="vista">
      <h2>Contacto</h2>

      <input
        type="text"
        placeholder="Tu nombre"
        :value="nombre"
        @input="$emit('update:nombre', $event.target.value)"
      >

      <textarea
        placeholder="Escribí tu mensaje..."
        :value="mensaje"
        @input="$emit('update:mensaje', $event.target.value)"
      ></textarea>

      <p v-if="mensaje === ''">El mensaje está vacío</p>

      <h3>Vista Previa:</h3>
      <p><strong>{{ nombre }}</strong>: {{ mensaje }}</p>
    </section>
  `
});

// AGREGAR PROYECTO – v-model + emit + form
app.component('vista-agregar', {
  props: ['titulo', 'descripcion'],
  emits: ['update:titulo', 'update:descripcion', 'agregar'],
  template: `
    <section class="vista">
      <h2>Agregar Nuevo Proyecto</h2>

      <input
        type="text"
        placeholder="Título"
        :value="titulo"
        @input="$emit('update:titulo', $event.target.value)"
      >

      <textarea
        placeholder="Descripción"
        :value="descripcion"
        @input="$emit('update:descripcion', $event.target.value)"
      ></textarea>

      <button @click="$emit('agregar')">Agregar</button>
    </section>
  `
});
