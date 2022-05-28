<template>
  <div>
    <ProgressBar />
    <Employee v-if="currentPage === 'Employee'" />
    <EmployeeJob v-if="currentPage === 'Job Details'" />
    <EmployeePersonal v-if="currentPage === 'Personal Details'" />
    <EmployeeAccount v-if="currentPage === 'Account Details'" />
  </div>
</template>

<script>
import EmployeeAccounting from "@/components/hr/employeeOnboard/employeeAccounting.vue";
import EmployeeJob from "@/components/hr/employeeOnboard/employeeJob.vue";
import EmployeePersonal from "@/components/hr/employeeOnboard/employeePersonal.vue";
import Employee from "@/components/hr/employeeOnboard/employeeForm.vue";
import ProgressBar from "@/components/hr/employeeOnboard/progressBar.vue";
export default {
  name: "myApplication",
  components: {
    Employee,
    EmployeeJob,
    EmployeePersonal,
    EmployeeAccounting,
    ProgressBar,
  },
  data() {
    return {
      currentPage: "Employee",
    };
  },
  methods: {
    onClickItem(item) {
      this.currentPage = item;
    },
  },
};
</script>
