<template>
  <div class="bg-emerald-50 h-screen">
    <NavBar :onApplicantsClick="onApplicantsClick" :menubar="['applicants']" />
    <div class="m-6">
      <JobApplications
        class="m-6"
        :allPositions="allPositions"
        v-if="currentPage === 'applications'"
      />
      <JobForm v-if="currentPage === 'newPosition'" />
      <JobApplicants
        :allApplicants="allApplicants"
        type="view"
        :setActiveApplicant="setActiveApplicant"
        v-if="currentPage === 'applicants'"
      />
      <MyApplication
        v-if="currentPage === 'myApplication'"
        :myApplicationData="myApplicationData"
      />
    </div>
  </div>
</template>

<script>
import JobForm from "@/components/hr/form.vue";
import JobApplicants from "@/components/hr/applicants.vue";
import JobApplications from "@/components/hr/applications.vue";
import NavBar from "@/components/hr/navbar.vue";
import { HrApiService } from "@/api/HrApiService";
import MyApplication from "@/components/applicant/myApplication.vue";
export default {
  components: {
    JobForm,
    JobApplicants,
    JobApplications,
    NavBar,
    MyApplication,
  },
  data() {
    return {
      allApplicants: [],
      allPositions: [],
      currentPage: "applicants",
      myApplicationData: {},
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
    setActiveApplicant(applicant) {
      this.currentPage = "myApplication";
      this.myApplicationData = applicant;
    },
  },
};
</script>
