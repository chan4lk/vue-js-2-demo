<template>
  <div>
    {{ todo.text }}
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
};
</script>