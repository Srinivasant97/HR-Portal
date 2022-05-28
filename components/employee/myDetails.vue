<template>
  <div>{{ employee }}</div>
</template>

<script>
export default {
  name: "myDetails",
  props: {
    employee: {
      type: Object,
      default: {},
    },
  },
};
</script>
