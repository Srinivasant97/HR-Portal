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
                v-if="type === 'action'"
                class="font-medium text-600 dark:text-500 cursor-pointer"
                :style="{
                  color: getActionButton(applicant.job_appl_status).color,
                }"
                @click="routeApplicant(applicant)"
                >{{ getActionButton(applicant.job_appl_status).text }}</a
              >
              <a
                v-if="type === 'view'"
                class="font-medium text-blue-600 dark:text-500 cursor-pointer"
                @click="setActiveApplicant(applicant)"
                >VIEW</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { HrApiService } from "@/api/HrApiService";
export default {
  props: {
    allApplicants: {
      type: Array,
      default: [],
    },
    setActiveApplicant: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: "action",
    },
  },
  methods: {
    routeToLinkedinProfile(linkedin_profile) {
      if (linkedin_profile.length > 0) {
        window.open(linkedin_profile, "_blank");
      }
    },
    async routeApplicant(applicant) {
      const data = {
        job_appl_apl_id: applicant.job_appl_apl_id,
        job_appl_app_id: applicant.job_appl_app_id,
        job_appl_id: applicant.job_appl_id,
        job_appl_status: this.getActionButton(applicant.job_appl_status).action,
      };
      await HrApiService.jobApplicantUpdate(data, applicant.job_appl_id);
    },
    getActionButton(status) {
      if (status === "APPLIED")
        return {
          text: "Accept",
          color: "green",
          action: "ACCEPTED",
        };
      else if (status === "ACCEPTED")
        return {
          text: "Schedule",
          color: "blue",
          action: "SCHEDULED",
        };
      else if (status === "SCHEDULED")
        return {
          text: "Interviewed",
          color: "orange",
          action: "INTERVIEWED",
        };
      else if (status === "INTERVIEWED")
        return {
          text: "Select",
          color: "purple",
          action: "SELECTED",
        };
      else if (status === "SELECTED")
        return {
          text: "Reject",
          color: "red",
          action: "REJECTED",
        };
      else
        return {
          text: "Closed",
          color: "red",
          action: "REJECTED",
        };
    },
  },
};
</script>
