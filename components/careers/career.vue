<template>
  <div>
    <CareerDetails :currentPosition="currentPosition" />
    <CareerForm :currentPosition="currentPosition" />
  </div>
</template>

<script>
import CareerDetails from "@/components/careers/details.vue";
import CareerForm from "@/components/careers/form.vue";
export default {
  name: "Careers",
  components: {
    CareerDetails,
    CareerForm,
  },
  props: {
    currentPosition: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      positions: [],
    };
  },
};
</script>
