<template>
  <div>
    <AllTasks
      :allTasks="allTasks"
      v-if="currentPage === 'list'"
      :setCurrentTask="setCurrentTask"
    />
    <AddTask v-if="currentPage === 'addTask'" />
    <AddReview
      v-if="currentPage === 'detail'"
      :currentTask="currentTask"
      :taskReviews="taskReviews"
    />
  </div>
</template>

<script>
import AddReview from "@/components/task/addReview.vue";
import AddTask from "@/components/task/addTask.vue";
import AllTasks from "@/components/task/allTasks.vue";
import { HrApiService } from "@/api/HrApiService";

export default {
  name: "dfsd",
  components: {
    AddReview,
    AddTask,
    AllTasks,
  },
  data() {
    return {
      allTasks: [],
      currentTask: {},
      currentPage: "list",
      taskReviews: [],
    };
  },
  async mounted() {
    const allTasks = await HrApiService.getAllTasks();
    this.allTasks = allTasks.data;
  },
  methods: {
    async setCurrentTask(task) {
      this.currentTask = task;
      const taskReviews = await HrApiService.getTaskReviews(task.task_id);
      this.taskReviews = taskReviews.data
      console.log("taskReviews", this.taskReviews);
      this.currentPage = "detail";
    },
  },
};
</script>
