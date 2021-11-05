<template>
  <div>C</div>
  <div>{{ name }} -- {{ age }} -- {{ gender }}</div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  setup() {
    const Person = inject("Person");
    const { name, age, gender } = toRefs(Person.value);
    // console.log(name, age, gender);
    return { name, age, gender };
  },
};
</script>

<style></style>
