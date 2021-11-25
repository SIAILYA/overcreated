<template>
  <default-view>
    contacts
  </default-view>
</template>

<script>
import DefaultView from "./DefaultView";

export default {
  name: "Contacts",
  components: {DefaultView},
  beforeRouteEnter(to, from, next) {
    console.log(to.meta)
    document.documentElement.setAttribute("theme", to.meta.themeColor)
    next()
  }
}
</script>
