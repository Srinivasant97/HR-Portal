<template>
  <div>
    {{ allTasks }}
  </div>
</template>

<script>
export default {
  name: "allTasks",
  props: {
    allTasks: {
      type: Array,
      default: [],
    },
  },
};
</script>
