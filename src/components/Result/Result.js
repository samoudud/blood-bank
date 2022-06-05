import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useDonor from '../../hooks/useDonor';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import Donor from '../Donor/Donor';
import RequestModal from '../RequestModal/RequestModal';


const Result = () => {
    const { loading, setLoading } = useDonor();
    const params = useParams();
    const [results, setResult] = useState({})

    useEffect(() => {
        setLoading(true)
        fetch(`https://kcp-blood-bank-server.herokuapp.com/donors/${params.group}`)
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false));
    }, [params?.group]);




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
                <Container>
                    {

                        <Box>
                            {
                                results.length > 0 && <Typography sx={{ color: '#18183A', margin: '25px 0', fontSize: '24px', fontWeight: '700', color: 'red', textAlign: 'center' }} variant="h3" component="div" >
                                    {results.length} Donor Found !
                                </Typography>
                            }
                            <RequestModal bloodGroup={params?.group} />
                        </Box>
                    }
                    <Grid container spacing={2}>
                        {
                            results.length > 0 ?
                                results.map(result => <Donor key={result._id} donor={result} />)
                                :
                                !loading && <Typography sx={{ color: '#18183A', margin: '75px 0', fontSize: '24px', fontWeight: '700', color: 'red', mx: 'auto' }} variant="h3" component="div" >
                                    Donor Not Found !
                                </Typography>
                        }
                    </Grid>
                </Container>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Result;