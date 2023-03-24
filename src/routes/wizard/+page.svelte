<script>
</script>

<main class="container-fluid">
  <nav>
    <ul>
      <li><a href="#attributes">Atributos</a></li>
      <li><a href="#tone">Tono</a></li>
      <li><a href="#abilities">Habilidades</a></li>
      <li><a href="#presentation">Final</a></li>
    </ul>
  </nav>
  <section id="attributes">AT</section>
  <section id="tone">TONO</section>
  <section id="abilities">HAB</section>
  <section id="presentation">PRES</section>
</main>

<style>
  nav {
    display: block;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
  section {
    display: none;
    margin: 5px 0;
  }
  section:target {
    display: block;
  }
</style>
