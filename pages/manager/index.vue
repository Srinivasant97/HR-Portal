<template>
  <div class="bg-emerald-50 h-screen">
    <NavBar
      :onApplicantsClick="onApplicantsClick"
      :onApplicationsClick="onApplicationsClick"
      :menubar="['applicants', 'applications']"
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
  </div>
</template>

<script>
import JobForm from "@/components/hr/form.vue";
import JobApplicants from "@/components/hr/applicants.vue";
import JobApplications from "@/components/hr/applications.vue";
import NavBar from "@/components/hr/navbar.vue";
import { HrApiService } from "@/api/HrApiService";
import { routeLogin } from "@/utils/functions";
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
      loginUserId: null,
    };
  },
  mounted() {
    routeLogin();
    this.setUserId();
    this.getAllApplicants();
    this.getAllPositions();
  },
  methods: {
    async getAllApplicants() {
      const allApplicants = await HrApiService.getAllApplicants();
      allApplicants.data.forEach((applicant) => {
        console.log(applicant, this.loginUserId);
        if (
          applicant.job_application.job_app_manager_emp_id === this.loginUserId
        ) {
          this.allApplicants.push(applicant);
        }
      });
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
    setUserId() {
      const user = JSON.parse(localStorage.getItem("hrAppUserCredentails"));
      this.loginUserId = user.id;
    },
  },
};
</script>
