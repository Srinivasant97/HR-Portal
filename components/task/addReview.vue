<template>
  <div class="w-1/2 mx-48 my-24">
    <ol
      v-for="(review, index) in taskReviews"
      :key="index"
      class="relative border-l border-gray-200 dark:border-gray-700"
    >
      <li class="mb-10 ml-6">
        <span
          class="flex absolute -left-3 top-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <svg
            class="w-3 h-3 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <div class="flex items-center mb-4 space-x-4">
          <img class="w-10 h-10 rounded-full" :src="getAvatar()" alt="" />
          <div class="space-y-1 font-medium dark:text-white">
            <p>Jese Leos</p>
            <div class="flex items-center">
              <svg
                v-for="(star, index) in [1, 2, 3, 4, 5]"
                :key="index"
                class="w-5 h-5 cursor-pointer"
                :fill="currentStarColor(index, review.task_review_rating)"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >commented on {{ getDate(review.task_review_created_on) }}</time
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ review.task_review_comment }}
        </p>
      </li>
    </ol>
    <div v-if="addComment">
      <div class="text-2xl font-bold py-2">Add Comment</div>
      <div>
        <div class="flex items-center justify-between py-6">
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Select an option</label
            >
            <select
              id="countries"
              v-model="form.task_review_type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>select review type</option>
              <option value="PRIVATE">PRIVATE</option>
              <option value="PUBLIC">PUBLIC</option>
              <option value="ANONYMOUS">ANONYMOUS</option>
            </select>
          </div>
          <div class="flex items-center">
            <svg
              v-for="(star, index) in [1, 2, 3, 4, 5]"
              :key="index"
              class="w-10 h-10 cursor-pointer"
              :fill="currentStarColor(index, form.task_review_rating)"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              @click="setCurrentStar(index)"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </div>

        <div>
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Comments</label
          >
          <textarea
            id="description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Job Description"
            v-model="form.task_review_comment"
          ></textarea>
        </div>
      </div>
      <div class="py-6 flex justify-end">
        <button
          type="button"
          @click="onSaveComment"
          class="text-white py-3 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-0.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { HrApiService } from "@/api/HrApiService";
import moment from "moment";
export default {
  name: "addingReview",
  data() {
    return {
      form: {
        task_review_comment: "",
        task_review_rating: "",
        task_review_type: "PUBLIC",
        task_review_task_id: "",
        task_review_emp_id: "",
      },
      addComment: true,
    };
  },
  props: {
    currentTask: {
      type: Object,
      default: () => {
        return {};
      },
    },
    taskReviews: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {
    this.addCommentDisplay();
  },
  methods: {
    currentStarColor(index, rating) {
      if (index < rating) {
        return "orange";
      } else {
        return "gray";
      }
    },
    setCurrentStar(index) {
      this.form.task_review_rating = index + 1;
    },
    async onSaveComment() {
      this.form.task_review_task_id = this.currentTask.task_id;
      (this.form.task_review_emp_id = JSON.parse(
        localStorage.getItem("hrAppUserCredentails")
      ).id),
        await HrApiService.postTaskReview(this.form);
    },
    getDate(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    getAvatar() {
      const randomNumber = Math.floor(Math.random() * 100);
      return `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
    },
    addCommentDisplay() {
      const id = JSON.parse(localStorage.getItem("hrAppUserCredentails")).id;
      this.taskReviews.forEach((review) => {
        if (review.task_review_by.emp_id === id) {
          this.addComment = false;
        }
      });
    },
  },
};
</script>
