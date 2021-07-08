<template>
  <footer class="footer">
  <div class="container">
    <div class="columns">
  <div class="column">
    <a href="mailto:anthony@anthonyngo.me" target="_blank">📧</a>
  </div>
  <div class="column">
    <a href="https://twitter.com/vadlus" target="_blank">🐦</a>
  </div>
  <div class="column">
    <a href="https://linkedin.com/in/anthongo" target="_blank">🔗</a>
  </div>
  <div class="column">
    <a href="https://github.com/ngoantho" target="_blank">🐙</a>
  </div>
</div>
</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    margin-top: 1rem;
    padding-top: 1.5rem !important;
    padding-bottom: 2rem !important;
  }

.container {
    max-width: 256px;
  }

.columns {
    display: flex !important;
  }

.column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
