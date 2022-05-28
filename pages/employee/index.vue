<template>
  <div class="bg-emerald-50 h-screen">
    <NavBar
      :menubar="['allEmployees', 'myDetails']"
      :onDetailsClick="onDetailsClick"
      :onAllEmployeesClick="onAllEmployeesClick"
    />
    <AllEmployees
      v-if="currentPage === 'allEmployees'"
      :onCardClick="onCardClick"
      :allEmployees="allEmployees"
    />
    <MyDetails v-if="currentPage === 'myDetails'" :employee="employeeDetails" />
  </div>
</template>

<script>
import NavBar from "@/components/hr/navbar.vue";
import AllEmployees from "@/components/employee/allEmployees.vue";
import MyDetails from "@/components/employee/myDetails.vue";

import { HrApiService } from "@/api/HrApiService";
import { routeLogin } from "@/utils/functions";
export default {
  components: {
    NavBar,
    AllEmployees,
    MyDetails,
  },
  data() {
    return {
      allEmployees: [],
      currentPage: "allEmployees",
      employeeDetails: {},
    };
  },
  mounted() {
    routeLogin();
    this.setAllEmployees();
  },
  methods: {
    onDetailsClick() {
      this.currentPage = "myDetails";
    },
    onAllEmployeesClick() {
      this.currentPage = "allEmployees";
    },
    async setAllEmployees() {
      await HrApiService.getAllEmployees().then((response) => {
        this.allEmployees = response.data;
      });
    },
    onCardClick(employee) {
      this.currentPage = "myDetails";
      this.employeeDetails = employee;
    },
  },
};
</script>
