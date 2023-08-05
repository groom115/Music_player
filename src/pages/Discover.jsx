import { genres } from '../assets/constants';
import SongCard from '../components/SongCard';
import { useGetChartQuery } from '../redux/services/ShazamCore';

const Discover = () => {
  const genericTitle = 'Pop';
  const { data, isFetching, error } = useGetChartQuery;
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col sm:flex-row mt-4 items-center justify-between">
        <h2 className="text-white text-3xl font-bold text-left">
          DISCOVER {genericTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-slate-900 text-gray-300 mt-4 p-3 text-sm rounded-lg outline-none sm:mt-0 sm:ml-1"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-8 sm:justify-start justify-center">
        {data.map((song, i) => (
          <SongCard />
        ))}
      </div>
    </div>
  );
};
export default Discover;
