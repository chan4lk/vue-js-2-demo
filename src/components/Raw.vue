<template>
  <div>
    <p>using raw html {{ rawHtml }}</p>
    <p>using <span v-html="rawHtml"></span></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rawHtml: '<span style="color:red">The red text</span>',
    };
  },
};
</script>