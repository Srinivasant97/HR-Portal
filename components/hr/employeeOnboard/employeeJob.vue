<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Job Department</label
        >
        <input
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your Department"
          required=""
          v-model="emp_job_department"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Job Designation</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="enter you Job Designation"
          required=""
          v-model="emp_job_designation"
        />
      </div>
      <div class="mb-6">
        <label
          for="mobile"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Emp Id</label
        >
        <input
          type="tel"
          id="mobile"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your Emp Id"
          required=""
          v-model="emp_job_emp_id"
        />
      </div>
      <div class="mb-6">
        <label
          for="linkedin"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Reporting Manager</label
        >
        <input
          type="text"
          id="role"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your Reporting Manager"
          required=""
          v-model="emp_job_reporting_to"
        />
      </div>
    </form>
    <button
      @click="submitFormData"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Upload
    </button>
  </div>
</template>

<script>
import { HrApiService } from "@/api/HrApiService";
export default {
  name: "OnBoardForm",
  props: {
  },
  data() {
    return {
      emp_job_department: "",
      emp_job_designation: "",
      emp_job_emp_id: "",
      emp_job_reporting_to: "",
    };
  },
  methods: {
    async submitFormData() {
      const formData = {
        emp_job_department: this.emp_job_department,
        emp_job_designation: this.emp_job_designation,
        emp_job_emp_id: this.emp_job_emp_id,
        emp_job_reporting_to: this.emp_job_reporting_to,
      };
      const applicant = await HrApiService.postEmployeeJobDetails(formData);
      alert("Employee Job Details uploaded Successfully")
      this.emp_job_department=""
      this.emp_job_designation=""
      this.emp_job_emp_id=""
      this.emp_job_reporting_to=""
    },
  },
};
</script>
