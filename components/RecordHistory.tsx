import getRecords from '@/app/actions/getRecords';

const RecordHistory = async () => {
  const { records } = await getRecords();

  if (!records || records.length === 0) {
    return (
      <div className='bg-gray-100 flex items-center justify-center pb-6'>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full text-center'>
          <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            No Sleep Records Found
          </h3>
          <p className='text-gray-600'>
            Start tracking your sleep to see your history here.
          </p>
        </div>
      </div>
    );
  }
};

export default RecordHistory;
