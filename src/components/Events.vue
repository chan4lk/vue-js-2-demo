<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverse">Reverse</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue.js",
    };
  },
  methods: {
    reverse() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>