import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ShazamCoreApi = createApi({
  reducerPath: 'shazamcoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.get(
        'X-RapidAPI-Key',
        '57a60e2126mshc84b5afa68a1008p1639dajsnabb5499c3c47'
      );
    },
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `charts/${name}`,
    }),
  }),
});

export const { useGetChartQuery } = ShazamCoreApi;
