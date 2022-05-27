<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Job title</th>
            <th scope="col" class="px-6 py-3">Reporting Manager</th>
            <th scope="col" class="px-6 py-3">Job Type</th>
            <th scope="col" class="px-6 py-3">Location</th>
            <th scope="col" class="px-6 py-3">Due by</th>
            <!-- <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th> -->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(position, index) in allPositions"
            :key="index"
            class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 w-1/6 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {{ position.job_app_title }}
            </th>
            <td class="px-6 py-4 w-1/6">
              {{ position.manager.emp_name }}
            </td>
            <td class="px-6 py-4 w-1/6">{{ position.job_app_type }}</td>
            <td class="px-6 py-4 w-1/6">
              {{ position.job_app_location }}
            </td>
            <td class="px-6 py-4 w-1/6">{{ getDueBy() }}</td>
            <!-- <td class="px-6 py-4 text-center w-1/6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allPositions: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getDueBy() {
      //random days
      var days = Math.floor(Math.random() * 30) + 1;
      return `in ${days} days`;
    },
  },
};
</script>
