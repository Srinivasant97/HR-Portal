<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your Name</label
        >
        <input
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your name"
          required=""
          v-model="apl_name"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="enter you email"
          required=""
          v-model="apl_email"
        />
      </div>
      <div class="mb-6">
        <label
          for="mobile"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your Mobile</label
        >
        <input
          type="tel"
          id="mobile"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your mobile number"
          required=""
          v-model="apl_mobile"
        />
      </div>
      <div class="mb-6">
        <label
          for="linkedin"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Linkedin Profile</label
        >
        <input
          type="url"
          id="linkedin"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your Linkedin Url"
          required=""
          v-model="apl_linkedin"
        />
      </div>
    </form>
    <button
      @click="submitFormData"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Apply
    </button>
  </div>
</template>

<script>
import { HrApiService } from "@/api/HrApiService";
export default {
  name: "CareerForm",
  props: {
    currentPosition: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      apl_name: "",
      apl_email: "",
      apl_mobile: "",
      apl_linkedin: "",
    };
  },
  methods: {
    async submitFormData() {
      const formData = {
        apl_name: this.apl_name,
        apl_email: this.apl_email,
        apl_phone: this.apl_mobile,
        apl_linkedin: this.apl_linkedin,
      };
      const applicant = await HrApiService.ApplicantSignUp(formData);
      const applicationData = {
        job_appl_status: "APPLIED",
        job_apl_scheduled_time: null,
        job_appl_apl_id: applicant.data.apl_id,
        job_appl_app_id: this.currentPosition.job_app_id,
      };
      await HrApiService.ApplyForJob(applicationData);
      alert("Job Applied Successfully")
      window.location.reload(true)
    },
  },
};
</script>
