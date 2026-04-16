import { apiSlice } from "../../api/apiSlice";

export const surahsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // jobs data


     getAllSurahsList: builder.query({
      query: ({ per_page = 10, page = 1}) => ({
        url: "/surah-list",
        method: "GET",
        params: {
          per_page,
          page,
        },
      }),
      providesTags: ["surah"],
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
  useGetAllSurahsListQuery,
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useDeleteJobMutation,
} = surahsApi;
