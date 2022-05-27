<template>
  <div>
    <NavBar
      :onApplicantsClick="onApplicantsClick"
      :onApplicationsClick="onApplicationsClick"
      :onNewPositionClick="onNewPositionClick"
    />
    <JobApplications
      class="m-6"
      :allPositions="allPositions"
      v-if="currentPage === 'applications'"
    />
    <JobForm v-if="currentPage === 'newPosition'" />
    <JobApplicants
      :allApplicants="allApplicants"
      v-if="currentPage === 'applicants'"
    />
  </div>
</template>

<script>
import JobForm from "@/components/hr/form.vue";
import JobApplicants from "@/components/hr/applicants.vue";
import JobApplications from "@/components/hr/applications.vue";
import NavBar from "@/components/hr/navbar.vue";
import { HrApiService } from "@/api/HrApiService";
export default {
  components: {
    JobForm,
    JobApplicants,
    JobApplications,
    NavBar,
  },
  data() {
    return {
      allApplicants: [],
      allPositions: [],
      currentPage: "applicants",
    };
  },
  mounted() {
    this.getAllApplicants();
    this.getAllPositions();
  },
  methods: {
    async getAllApplicants() {
      const allApplicants = await HrApiService.getAllApplicants();
      this.allApplicants = allApplicants.data;
    },
    async getAllPositions() {
      const allPositions = await HrApiService.getAllPositions();
      this.allPositions = allPositions.data;
    },
    onApplicantsClick() {
      this.currentPage = "applicants";
    },
    onApplicationsClick() {
      this.currentPage = "applications";
    },
    onNewPositionClick() {
      this.currentPage = "newPosition";
    },
  },
};
</script>
