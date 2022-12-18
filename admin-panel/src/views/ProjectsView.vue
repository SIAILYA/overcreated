<template>

</template>

<script setup lang="ts">

import {Project} from "../data/models/Project";

// const p = new Project({id: "123", _updated_at: new Date(), _created_at: new Date(), name: "Test Project"});
const p2 = new Project();

p2.fromJSON({id: "234", _updated_at: new Date(), _created_at: "2022-12-17T05:08:20.404Z", name: "Test Project",
  pictures: [{id: "132", url: "url"}]})

console.log(p2)
</script>

<style scoped>

</style>
