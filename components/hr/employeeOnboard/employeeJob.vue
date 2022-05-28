<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Employee Job Department</label
        >
        <select
          id="type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="emp_job_department"
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="ACCOUNT">ACCOUNT</option>
          <option value="SALES">SALES</option>
          <option value="MARKETING">MARKETING</option>
          <option value="FINANCE">FINANCE</option>
          <option value="ADMIN">ADMIN</option>
          <option value="OTHER">OTHER</option>
        </select>
      </div>
      <div class="mb-6">
        <label
          for="type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Employee Job Designation</label
        >
        <select
          id="type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="emp_job_designation"
        >
          <option value="SDE1">SDE1</option>
          <option value="SDE2">SDE2</option>
          <option value="SDE3">SDE3</option>
          <option value="SENIOR_SDE">SENIOR_SDE</option>
          <option value="MANAGER">MANAGER</option>
          <option value="DIRECTOR">DIRECTOR</option>
          <option value="OTHER">OTHER</option>
        </select>
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
          v-model="emp_job_emp_id"
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
      <div class="mb-6">
        <label
          for="manager"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Reporting Manager</label
        >
        <select
          id="manager"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="emp_job_reporting_to"
        >
          <option selected>Choose Id</option>
          <option
            v-for="(manager, index) in ManagerDetail"
            :key="index"
            :value="manager.emp_id"
          >
            {{ manager.emp_name }}
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
      emp_job_department: "",
      emp_job_designation: "",
      emp_job_emp_id: "",
      emp_job_reporting_to: "",
      EmployeeDetail:[],
      ManagerDetail: [],
    };
  },
  mounted(){
      this.employeeDetails()
  },
  computed:{
      
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
    async employeeDetails(){
          const response = await HrApiService.getAllEmployees()
          this.EmployeeDetail = response.data.filter((data)=> !data["emp_job_id"]&&true)
          this.ManagerDetail = response.data.filter((data)=> data["role_name"] === "MANAGER")
      }
  },
};
</script>
