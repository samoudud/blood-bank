import React from 'react';
import useDonor from '../../hooks/useDonor';

const DashboardHome = () => {
    const { user, userInfo } = useDonor()
    return (
        <div>
            <h2>Hi {user?.displayName} ! Welcome Back</h2>
            {
                userInfo?.bloodGroup &&
                <div>
                    <h3>Your Blood Group is: {userInfo?.bloodGroup.toUpperCase()}</h3>
                    <h3>Your Last Donation Date is: {userInfo?.lDonate}</h3>
                </div>
            }
        </div>
    );
};

export default DashboardHome;