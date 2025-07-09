<template>
  <header class="header">
    <h1>🎱 Lotto Random System</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/history">History</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #2f3b52;
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

nav {
  margin-top: 0.5rem;
}

a {
  color: #fff;
  margin: 0 0.5rem;
  text-decoration: none;
}

a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

