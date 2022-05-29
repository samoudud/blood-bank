import { useContext } from 'react';
import { AuthContext } from '../context/DonorProvider';

const useDonor = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useDonor;