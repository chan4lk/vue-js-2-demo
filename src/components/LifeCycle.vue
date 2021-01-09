<template>
  <div>
    {{ a }}
  </div>
</template>
<script>
export default {
  data() {
    return { a: "abc" };
  },
  created() {
    console.log(this.a);
  },
};
</script>