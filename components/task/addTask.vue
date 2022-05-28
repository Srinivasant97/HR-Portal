<template>
  <div>
    <div class="flex justify-center items-center p-12 flex-col">
      <form class="w-7/12">
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Task Title</label
          >
          <input
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Your name"
            required=""
            v-model="formData.task_title"
          />
        </div>
        <div class="mb-6">
          <label
            for="startDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Start date</label
          >
          <input
            type="date"
            id="startDate"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Your name"
            required=""
            v-model="formData.task_start_date"
          />
        </div>
        <div class="mb-6">
          <label
            for="endDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >End Date</label
          >
          <input
            type="date"
            id="endDate"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Your name"
            required=""
            v-model="formData.task_end_date"
          />
        </div>
        <div class="mb-6">
          <label
            for="type"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Assigned To</label
          >
          <select
            id="type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="formData.task_assigned_to"
          >
            <option
              v-for="(user, index) in employeesList"
              :key="index"
              :value="user.emp_id"
            >
              {{ user.emp_name }}
            </option>
          </select>
        </div>
        <div class="mb-6">
          <label
            for="priority"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Task Effort</label
          >
          <select
            id="priority"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="formData.task_priority"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Task Description</label
        >
        <textarea
          id="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Job Description"
          v-model="formData.task_description"
        ></textarea>
      </form>
      <button
        @click="submitForm"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script>
import { HrApiService } from "@/api/HrApiService";

export default {
  name: "TaskForm",
  data() {
    return {
      employeesList: [],
      formData: {
        task_title: "",
        task_start_date: "",
        task_end_date: "",
        task_assigned_to: "",
        task_priority: "",
        task_description: "",
      },
    };
  },
  async mounted() {
    let employees = await HrApiService.getAllEmployees();
    this.employeesList = employees.data;
  },
  methods: {
    async submitForm() {
      await HrApiService.addTask(this.formData);
    },
  },
};
</script>
