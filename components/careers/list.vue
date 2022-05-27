<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="(position, index) in positions" :key="index">
      <div @click="setCurrentPosition(position)">
        <careers-card :positionDetails="position" />
      </div>
    </div>
  </div>
</template>

<script>
import CareersCard from "@/components/careers/card.vue";
export default {
  name: "CareersList",
  components: {
    CareersCard,
  },
  props: {
    positions: {
      type: Array,
      required: true,
    },
    setCurrentPosition: {
      type: Function,
      required: true,
    },
  },
};
</script>
