<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Personal Address</label
        >
        <input
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your Personal Address"
          required=""
          v-model="emp_personal_address"
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Personal Education</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="enter you Personal Education"
          required=""
          v-model="emp_personal_education"
        />
      </div>
      <div class="mb-6">
        <label
          for="manager"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Employee Emp Id</label
        >
        <select
          id="manager"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="emp_personal_emp_id"
        >
          <option selected>Choose Id</option>
          <option
            v-for="(employee, index) in EmployeeDetail"
            :key="index"
            :value="employee.emp_id"
          >
            {{ employee.emp_id }}
          </option>
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
  name: "OnBoardForm",
  props: {
  },
  data() {
    return {
      emp_personal_address: "",
      emp_personal_education: "",
      emp_personal_emp_id: "",
      EmployeeDetail:[],
    };
  },
  mounted(){
      this.employeeDetails()
  },
  methods: {
    async submitFormData() {
      const formData = {
        emp_personal_address: this.emp_personal_address,
        emp_personal_education: this.emp_personal_education,
        emp_personal_emp_id: this.emp_personal_emp_id,
      };
      const applicant = await HrApiService.postPersonalDetails(formData);
      alert("Personal Details uploaded Successfully")
      this.emp_personal_address=""
      this.emp_personal_education=""
      this.emp_personal_emp_id=""
    },
    async employeeDetails(){
        const response = await HrApiService.getAllEmployees()
        this.EmployeeDetail = response.data.filter((data)=> !data["emp_job_id"]&&true)
    }
  },
};
</script>
