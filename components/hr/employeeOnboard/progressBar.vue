<template>
  <div class="my-12 mx-6 w-full flex items-center justify-center">
    <ol class="items-center sm:flex">
      <li
        class="relative mb-6 sm:mb-0"
        v-for="(item, index) in allStates"
        :key="index"
      >
        <div class="flex items-center">
          <div
            class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
          >
            <svg
              class="w-3 h-3 text-blue-600 dark:text-blue-300"
              :fill="getColor(item)"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
          ></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ item }}
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ statusDetails[item].text }}
          </p>
          <button
            type="button"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-0.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "myApplication",
  props: {
    myApplicationData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      allStates: [
        "Employee ",
        "Job Details",
        "Personal Details",
        "Account Details",
      ],
      statusDetails: {
        "Employee ": {
          text: "Employee Credentials",
        },
        "Job Details": {
          text: "Employee Job Details",
        },
        "Personal Details": {
          text: "Employee Personal Details",
        },
        "Account Details": {
          text: "Employee Account Details",
        },
      },
    };
  },
  methods: {
    getColor(item) {
      //   const state = this.myApplicationData.job_appl_status;
      //   if (this.allStates.indexOf(item) <= this.allStates.indexOf(state)) {
      //     return "blue";
      //   } else {
      //     return "white";
      //   }
      return "blue";
    },
  },
};
</script>
