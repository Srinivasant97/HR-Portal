<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Job Title</label
        >
        <input
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your name"
          required=""
          v-model="job_app_title"
        />
      </div>
      <div class="mb-6">
        <label
          for="subTitle"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Skills Required</label
        >
        <input
          id="subTitle"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your name"
          required=""
          v-model="job_app_sub_title"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Job Location</label
        >
        <input
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="enter you email"
          required=""
          v-model="job_app_location"
        />
      </div>
      <div class="mb-6">
        <label
          for="mobile"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Salary Range</label
        >
        <input
          id="mobile"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your mobile number"
          required=""
          v-model="job_app_salary"
        />
      </div>
      <div class="mb-6">
        <label
          for="manager"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Reporting Manager</label
        >
        <select
          id="manager"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="job_app_manager_emp_id"
        >
          <option selected>Choose Manager</option>
          <option
            v-for="(manager, index) in managerOptions"
            :key="index"
            :value="manager.value"
          >
            {{ manager.option }}
          </option>
        </select>
      </div>
      <div class="mb-6">
        <label
          for="hrmanager"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Hr Manager</label
        >
        <select
          id="hrmanager"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose Hr Manager</option>
          <option value="job_app_hr_emp_id.value">
            {{ job_app_hr_emp_id.name }}
          </option>
        </select>
      </div>
      <div class="mb-6">
        <label
          for="type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Reporting Manager</label
        >
        <select
          id="type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="job_app_type"
        >
          <option value="ENGINEERING">Engineering</option>
          <option value="ACCOUNTS">Accounts</option>
          <option value="BUSINESS-AFFAIRS">Business-Affairs</option>
          <option value="SALES">Sales</option>
          <option value="MARKETING">Marketing</option>
          <option value="DESIGN">Design</option>
          <option value="OTHER">Other</option>
        </select>
      </div>
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >Job Description</label
      >
      <textarea
        id="description"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Job Description"
        v-model="job_app_description"
      ></textarea>
    </form>
    <button
      @click="submitForm"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Apply
    </button>
  </div>
</template>

<script>
import { HrApiService } from "@/api/HrApiService";

export default {
  name: "JobApplicationForm",

  data() {
    return {
      job_app_title: "",
      job_app_location: "",
      job_app_salary: "",
      job_app_description: "",
      job_app_manager_emp_id: "",
      job_app_type: "ENGINEERING",
      job_app_hr_emp_id: {
        value: 1,
        name: "Jhansi",
      },
      job_app_sub_title: "",
      managerOptions: [],
    };
  },
  mounted() {
    this.setOptions();
  },
  methods: {
    async submitForm() {
      let job_app = {
        job_app_title: this.job_app_title,
        job_app_location: this.job_app_location,
        job_app_salary: this.job_app_salary,
        job_app_description: this.job_app_description,
        job_app_manager_emp_id: this.job_app_manager_emp_id,
        job_app_hr_emp_id: this.job_app_hr_emp_id.value,
        job_app_sub_title: this.job_app_sub_title,
        job_app_type: this.job_app_type,
      };
      await HrApiService.PostJobPosition(job_app);
    },
    async setOptions() {
      let managers = await HrApiService.getAllEmployees();
      console.log(managers)
      const options = [];
      managers.data.forEach((manager) => {
        if (manager.role_name === "MANAGER")
          options.push({
            value: manager.emp_id,
            option: manager.emp_name,
          });
        else if (manager.role_name === "HR") this.job_app_hr_emp_id = {
          value: manager.emp_id,
          name: manager.emp_name,
        }
      });
      this.managerOptions = options;
    },
  },
};
</script>
