import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useDonor from '../../hooks/useDonor';
import { CircularProgress } from '@mui/material';

const Result = () => {
    const { loading, setLoading } = useDonor();
    let params = useParams();
    const [results, setResult] = useState({})

    useEffect(() => {
        setLoading(true)
        fetch(`https://kcp-blood-bank-server.herokuapp.com/donors/${params.group}`)
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false));
    }, [params.group]);




    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div>
                {
                    loading && <div className='vh-10'>
                        <div>
                            <CircularProgress color="secondary" />
                            <CircularProgress color="success" />
                            <CircularProgress color="inherit" />
                        </div>
                    </div>
                }
                {
                    results.length > 0 ?
                        results.map(result => <p key={result._id}>{result.name}</p>)
                        :
                        !loading && <div className='vh-10'>Donor Not Found !</div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Result;