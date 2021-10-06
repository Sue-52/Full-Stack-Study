<template>
  <div>
    <h1>Parent Page</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/parent/child1">child1</nuxt-link></li>
        <li><nuxt-link to="/parent/child2">child2</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <NuxtChild />
    </main>
  </div>
</template>

<script>
export default {};
</script>
