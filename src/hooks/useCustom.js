import { useEffect, useState } from "react"
import initializeFirebase from "../components/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeFirebase();
const useCustom = () => {

    const [user, setUser] = useState({});
    const [userInfo, setUserInfo] = useState({})
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerDonor = (donor, navigate) => {
        setLoading(true);
        setAuthError('');
        createUserWithEmailAndPassword(auth, donor.email, donor.password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email: donor.email, displayName: donor.displayName };
                setUser(newUser);
                setUserInfo({
                    bloodGroup: donor.bloodGroup,
                    admin: false
                })
                // save user to database
                fetch('https://kcp-blood-bank-server.herokuapp.com/donors', {
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

                        }
                        else {
                            setAuthError('User Already Exist')

                        }
                    })
                    .catch((error) => {
                        setAuthError(error.message);
                    });

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: donor.displayName
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                navigate("/", { replace: true })
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setLoading(false));

    }

    const logIn = (navigate, Info) => {
        setLoading(true);
        setAuthError('');
        signInWithEmailAndPassword(auth, Info.email, Info.password)
            .then(() => {
                setAuthError('');
                navigate("/", { replace: true })
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));

    }

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    useEffect(() => {
        fetch(`https://kcp-blood-bank-server.herokuapp.com/donor/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
                // console.log(data)
            })
            .catch(error => { })
    }, [user?.email])

    return {
        user,
        loading,
        setLoading,
        authError,
        registerDonor,
        logIn,
        logOut,
        userInfo
    }
}

export default useCustom;