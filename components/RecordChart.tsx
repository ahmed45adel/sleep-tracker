import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart';

const RecordChart = async () => {
  const { records } = await getRecords();

  return (
    <div className='bg-gray-100 flex items-center justify-center'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full '>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Sleep Records Chart
        </h3>
        <BarChart
          records={records?.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />{' '}
        {/* Pass records as props */}
      </div>
    </div>
  );
};

export default RecordChart;
