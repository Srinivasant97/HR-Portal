<template>
  <div class="my-48 mx-6 flex items-center justify-center flex-col">
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
        "APPLIED",
        "ACCEPTED",
        "SCHEDULED",
        "INTERVIEWED",
        "SELECTED",
        "REJECTED",
      ],
      statusDetails: {
        APPLIED: {
          color: "#ffc107",
          text: "Your Application is Pending",
        },
        ACCEPTED: {
          color: "#28a745",
          text: "Your Application is Accepted",
        },
        SCHEDULED: {
          color: "#ffc107",
          text: "Your Interview is being scheduled",
        },
        INTERVIEWED: {
          color: "#ffc107",
          text: "Your Interview is successfullly done",
        },
        SELECTED: {
          color: "#28a745",
          text: "You are selected for the next round",
        },
        REJECTED: {
          color: "#dc3545",
          text: "Your Application is Rejected",
        },
      },
    };
  },
  methods: {
    getColor(item) {
      const state = this.myApplicationData.job_appl_status;
      if (this.allStates.indexOf(item) <= this.allStates.indexOf(state)) {
        return "blue";
      } else {
        return "white";
      }
    },
  },
};
</script>
