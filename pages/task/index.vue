<template>
  <div>
    <AllTasks :allTasks="allTasks" />
    <AddTask />
  </div>
</template>

<script>
// import AddReview from "@/components/task/addReview.vue";
import AddTask from "@/components/task/addTask.vue";
import AllTasks from "@/components/task/allTasks.vue";
import { HrApiService } from "@/api/HrApiService";

export default {
  name: "dfsd",
  components: {
    // AddReview,
    AddTask,
    AllTasks,
  },
  data() {
    return {
      allTasks: [],
    };
  },
  async mounted() {
    const allTasks = await HrApiService.getAllTasks();
    this.allTasks = allTasks.data;
  },
};
</script>
