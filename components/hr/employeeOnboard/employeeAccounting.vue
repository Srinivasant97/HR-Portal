<template>
  <div class="flex justify-center items-center p-12 flex-col">
    <form class="w-7/12">
      <div class="mb-6">
        <label
          for="salary"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Account Salary</label
        >
        <input
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter Your Account Salary"
          required=""
          v-model="emp_accounting_salary"
        />
      </div>
      <div class="mb-6">
        <label
          for="account"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Account Number</label
        >
        <input
          type="text"
          id="text"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="enter you Account Number"
          required=""
          v-model="emp_accounting_number"
        />
      </div>
      <div class="mb-6">
        <label
          for="number"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee PF Number</label
        >
        <input
          type="text"
          id="text"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your PF Number"
          required=""
          v-model="emp_accounting_pf"
        />
      </div>
      <div class="mb-6">
        <label
          for="role"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Role</label
        >
        <input
          type="text"
          id="text"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your UAN"
          required=""
          v-model="emp_accounting_uan"
        />
      </div>
      <div class="mb-6">
        <label
          for="empId"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Employee Emp Id</label
        >
        <input
          type="text"
          id="text"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Enter your Emp Id"
          required=""
          v-model="emp_accounting_emp_id"
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
      emp_accounting_salary: "",
      emp_accounting_number: "",
      emp_accounting_pf: "",
      emp_accounting_uan: "",
      emp_accounting_emp_id: "",
    };
  },
  methods: {
    async submitFormData() {
      const formData = {
        emp_accounting_salary: this.emp_accounting_salary,
        emp_accounting_number: this.emp_accounting_number,
        emp_accounting_pf: this.emp_accounting_pf,
        emp_accounting_uan: this.emp_accounting_uan,
        emp_accounting_emp_id: this.emp_accounting_emp_id,
      };
      await HrApiService.postAccountDetails(formData);
      alert("Account Details uploaded Successfully")
      this.emp_accounting_salary=""
      this.emp_accounting_number=""
      this.emp_accounting_pf=""
      this.emp_accounting_uan=""
      this.emp_accounting_emp_id=""
    },
  },
};
</script>
