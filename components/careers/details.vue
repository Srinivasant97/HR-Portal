<template>
  <div>
    <div
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ currentPosition.job_app_title }}
    </div>
    <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ currentPosition.job_app_description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerDetails",
  props: {
    currentPosition: {
      type: Object,
      default: null,
    },
  },
};
</script>
