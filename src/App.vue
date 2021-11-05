<template>
  <div id="app">
    <header>
      <router-view name="header" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <router-view name="footer" />
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
  html, body ,#app {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    main {
      flex: 1;
      overflow-x: hidden;
    }
  }
</style>
