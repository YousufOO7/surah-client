import { apiSlice } from "../../api/apiSlice";

export const jobsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // jobs data
    createJobs: builder.mutation({
      query: (jobsData) => ({
        url: "/add-jobs",
        method: "POST",
        body: jobsData,
      }),
      invalidatesTags: ["jobs"],
    }),

    jobsApplications: builder.mutation({
      query: (jobsApplicationData) => ({
        url: "/applications",
        method: "POST",
        body: jobsApplicationData,
      }),
      invalidatesTags: ["jobs"],
    }),

     getAllJobsApplications: builder.query({
      query: () => ({
        url: "/allJobsApplications",
        method: "GET",
      }),
      providesTags: ["jobs"],
    }),


    //admin get all jobs
    getAllJobs: builder.query({
      query: ({ per_page = 10, page = 1}) => ({
        url: "/allJobs",
        method: "GET",
        params: {
          per_page,
          page,
        },
      }),
      providesTags: ["jobs"],
    }),

     // get single job by ID
    getJobById: builder.query({
      query: (id) => ({
        url: `/allJobs/${id}`,
        method: "GET",
      }),
      providesTags: ["jobs"],
    }),

     deleteJob: builder.mutation({
      query: (id) => ({
        url: `/add-jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["jobs"],
    }),
  
  }),
});

// Export hooks
export const {
  useCreateJobsMutation,
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useDeleteJobMutation,
  useJobsApplicationsMutation,
  useGetAllJobsApplicationsQuery,
} = jobsApi;
