<template>
  <div class="bg-emerald-50 h-screen">
    <NavBar
      :onApplicantsClick="onApplicantsClick"
      :onApplicationsClick="onApplicationsClick"
      :onNewPositionClick="onNewPositionClick"
      :onBoardClick="onBoardClick"
      :menubar="['applicants', 'applications', 'newPosition', 'onBoard']"
    />
    <JobApplications
      class="m-6"
      :allPositions="allPositions"
      v-if="currentPage === 'applications'"
    />
    <JobForm class="m-6" v-if="currentPage === 'newPosition'" />
    <JobApplicants
      class="m-6"
      :allApplicants="allApplicants"
      v-if="currentPage === 'applicants'"
    />
    <EmployeeOnboard v-if="currentPage === 'onboard'" />
  </div>
</template>

<script>
import JobForm from "@/components/hr/form.vue";
import JobApplicants from "@/components/hr/applicants.vue";
import JobApplications from "@/components/hr/applications.vue";
import EmployeeOnboard from "@/components/hr/employeeOnboard";
import NavBar from "@/components/hr/navbar.vue";
import { HrApiService } from "@/api/HrApiService";
import { routeLogin } from "@/utils/functions";
export default {
  components: {
    JobForm,
    JobApplicants,
    JobApplications,
    NavBar,
    EmployeeOnboard,
  },
  data() {
    return {
      allApplicants: [],
      allPositions: [],
      currentPage: "applicants",
    };
  },
  mounted() {
    routeLogin();
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
    onBoardClick() {
      this.currentPage = "onboard";
    },
  },
};
</script>
