/* eslint-disable react/prop-types */
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({ loading }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
    );
};

export default Loader;
