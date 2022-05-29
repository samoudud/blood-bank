import { Info } from "@mui/icons-material";
import { useState } from "react"

const useCustom = () => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState('')

    const registerDonor = (donor, navigate) => {
        setLoading(true);
        setAuthError('');
        fetch('http://localhost:5000/donors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Donor Added successfully');
                    setUser(donor);
                    navigate("/", { replace: true })
                }
                else {
                    setAuthError('User Already Exist')

                }
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));

    }

    const logIn = (navigate, Info) => {
        setLoading(true);
        setAuthError('');
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Info)
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                console.log(data)
                navigate("/", { replace: true })
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setUser({});

    }

    return {
        user,
        loading,
        authError,
        registerDonor,
        logIn,
        logOut
    }
}

export default useCustom;