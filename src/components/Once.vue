<template>
  <div>
    <p v-once>{{ message }}</p>
    <button @click="reverse">Reverse</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This changes once",
    };
  },
  methods: {
    reverse() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>