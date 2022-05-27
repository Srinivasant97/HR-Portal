<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Applicant Name</th>
            <th scope="col" class="px-6 py-3">Job Title</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Linkedin Profile</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(applicant, index) in allApplicants"
            :key="index"
            class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 w-1/6 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {{ applicant.applicant.apl_name }}
            </th>
            <td class="px-6 py-4 w-1/6">
              {{ applicant.job_application.job_app_title }}
            </td>
            <td class="px-6 py-4 w-1/6">{{ applicant.applicant.apl_email }}</td>
            <td
              class="px-6 py-4 w-1/6 cursor-pointer"
              @click="routeToLinkedinProfile(applicant.applicant.apl_linkedin)"
            >
              {{ applicant.applicant.apl_linkedin }}
            </td>
            <td class="px-6 py-4 w-1/6">{{ applicant.job_appl_status }}</td>
            <td class="px-6 py-4 text-center w-1/6">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Accept</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allApplicants: {
      type: Array,
      default: [],
    },
  },
  methods: {
    routeToLinkedinProfile(linkedin_profile) {
      if (linkedin_profile.length > 0) {
        window.open(linkedin_profile, "_blank");
      }
    },
  },
};
</script>
