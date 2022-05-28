<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Name</label
        >
        <input
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your name"
          required=""
          v-model="emp_name"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="enter you email"
          required=""
          v-model="emp_email"
        />
      </div>
      <div class="mb-6">
        <label
          for="mobile"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Mobile NO</label
        >
        <input
          type="tel"
          id="mobile"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your mobile number"
          required=""
          v-model="emp_phone"
        />
      </div>
      <div class="mb-6">
        <label
          for="type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Employee Role</label
        >
        <select
          id="type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="emp_role"
        >
          <option value="1">ADMIN</option>
          <option value="2">MANAGER</option>
          <option value="3">EMPLOYEE</option>
          <option value="4">HR</option>
          <option value="5">APPLICANT</option>
        </select>
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
  name: "EmployeeForm",
  props: {
  },
  data() {
    return {
      emp_name: "",
      emp_email: "",
      emp_phone: "",
      emp_role: "",
    };
  },
  methods: {
    async submitFormData() {
      const formData = {
        emp_name: this.emp_name,
        emp_email: this.emp_email,
        emp_phone: this.emp_phone,
        emp_role: this.emp_role,
      };
      const applicant = await HrApiService.postEmployeeDetails(formData);
      alert("Employee Credential uploaded Successfully")
      this.emp_name=""
      this.emp_email=""
      this.emp_phone=""
      this.emp_role=""
    },
  },
};
</script>
