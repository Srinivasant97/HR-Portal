<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div>
        <div class="text-2xl font-bold px-6 py-2">Backlog</div>
        <div v-for="(task, index) in allTasks" :key="index">
          <Taskcard
            :task="task"
            v-if="task.task_status === 'BACKLOG'"
            :setCurrentTask="setCurrentTask"
          />
        </div>
      </div>
      <div>
        <div class="text-2xl font-bold px-6 py-2">In Progress</div>
        <div v-for="(task, index) in allTasks" :key="index">
          <Taskcard
            :task="task"
            v-if="task.task_status === 'IN_PROGRESS'"
            :setCurrentTask="setCurrentTask"
          />
        </div>
      </div>
      <div>
        <div class="text-2xl font-bold px-6 py-2">Completed</div>
        <div v-for="(task, index) in allTasks" :key="index">
          <Taskcard
            :task="task"
            v-if="task.task_status === 'DONE'"
            :setCurrentTask="setCurrentTask"
          />
        </div>
      </div>
      <div>
        <div class="text-2xl font-bold px-6 py-2">Production</div>
        <div v-for="(task, index) in allTasks" :key="index">
          <Taskcard
            :task="task"
            :setCurrentTask="setCurrentTask"
            v-if="['TESTED', 'ACCEPTED', 'REJECTED'].includes(task.task_status)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Taskcard from "./taskcard.vue";
export default {
  name: "allTasks",
  components: {
    Taskcard,
  },
  props: {
    allTasks: {
      type: Array,
      default: [],
    },
    setCurrentTask: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
