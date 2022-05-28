import axios from "axios";
const baseUrl = "http://127.0.0.1:8000";

export const HrApiService = {
  getAllPositions: () => {
    try {
      return axios.get(`${baseUrl}/hire/job_application_list`);
    } catch (error) {
      console.log(error);
    }
  },
  ApplicantSignUp: (data) => {
    try {
      return axios.post(`${baseUrl}/hire/applicant`, data);
    } catch (error) {
      console.log(error);
    }
  },
  ApplyForJob: (data) => {
    try {
      return axios.post(`${baseUrl}/hire/job_applicant`, data);
    } catch (error) {
      console.log(error);
    }
  },
  PostJobPosition: (data) => {
    try {
      return axios.post(`${baseUrl}/hire/job_application`, data);
    } catch (error) {
      console.log(error);
    }
  },
  getAllApplicants: () => {
    try {
      return axios.get(`${baseUrl}/hire/job_applicant_list`);
    } catch (error) {
      console.log(error);
    }
  },

  jobApplicantUpdate: (data, pk) => {
    try {
      return axios.patch(`${baseUrl}/hire/job_applicant_update/${pk}`, data);
    } catch (error) {
      console.log(error);
    }
  },

  getEmployeeByEmail: (email) => {
    try {
      return axios.get(`${baseUrl}/hire/employee_by_email/${email}`);
    } catch (error) {
      console.log(error);
    }
  },

  getAllEmployees: () => {
    try {
      return axios.get(`${baseUrl}/hire/employee_list`);
    } catch (error) {
      console.log(error);
    }
  },
};
