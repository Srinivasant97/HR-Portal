<template>
  <div class="grid grid-cols-4 gap-4 my-12">
    <div v-for="(employee, index) in allEmployees" :key="index">
      <EmployeeCard :employee="employee" :onCardClick="onCardClick" />
    </div>
  </div>
</template>

<script>
import EmployeeCard from "@/components/employee/employeeCard.vue";
export default {
  components: {
    EmployeeCard,
  },
  props: {
    allEmployees: {
      type: Array,
      default: [],
    },
    onCardClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
