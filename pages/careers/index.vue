<template>
  <div>
    <h1 class="text-3xl font-bold underline">Careers Page</h1>
    <CareersList
      v-if="currentPage === 'list'"
      :positions="positions"
      :setCurrentPosition="setCurrentPosition"
    />
    <Career
      v-if="currentPage === 'career'"
      :currentPosition="currentPosition"
    />
  </div>
</template>

<script>
import CareersList from "@/components/careers/list.vue";
import Career from "@/components/careers/career.vue";
import { HrApiService } from "@/api/HrApiService";
export default {
  name: "Careers",
  components: {
    Career,
    CareersList,
  },
  data() {
    return {
      positions: [],
      currentPosition: {},
      currentPage: "list",
    };
  },
  mounted() {
    this.setAllPositions();
  },
  methods: {
    async setAllPositions() {
      const positions = await HrApiService.getAllPositions();
      this.positions = positions.data;
    },
    setCurrentPosition(position) {
      this.currentPosition = position;
      this.currentPage = "career";
    },
  },
};
</script>
