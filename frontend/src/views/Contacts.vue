<template>
  <div class="text-center">
    <h2 class="contacts-header">Контакты мои контакты</h2>

    <div class="row">
      <div class="col-12 col-md-4">

      </div>
      <div class="col-12 col-md-8">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Contacts",
}
</script>

<style scoped lang="scss">

.contacts-header {
  margin: 0;
  display: inline-block;
  background: linear-gradient(45deg, var(--accent-main-blue) 0%, var(--accent-second-blue) 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::selection {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
