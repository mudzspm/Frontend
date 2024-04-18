import { useState } from 'react';
import profileIcon from './icons/profile.svg';
import selectedProfileIcon from './icons/selectedProfile.svg';
import trackingIcon from './icons/tracking.svg';
import selectedTrackingIcon from './icons/selectedTracking.svg';
import transactionIcon from './icons/transaction.svg';
import selectedTransactionIcon from './icons/transactionSelected.svg';
import helpLine from './icons/helpLine.svg';
import selectedHelpLine from './icons/selectedHelpLine.svg'
import policy from './icons/policy.svg';
import selectedPolicy from './icons/selectedPolicy.svg';
import ProfileForm from './components/ProfileForm';
import { userProfile } from './types';
import Tracking from './components/Tracking';
import Transaction from './components/Transaction';
import Policy from './components/Policy';
import HelpLine from './components/HelpLine';
import PolicyDetail from './components/policyDetail';

const exampleUser: userProfile = {
    userData: {
        name: 'KHADIJAH BINTI MOHD AMIM',
        email: 'Khadijahamim@gmail.com',
        icNumber: '012345678901',
        address: {
            line1: 'Khadijahamim@gmail.com',
            line2: 'Khadijahamim@gmail.com'
        },
        phone: '0193456789',
        password: 'test'
    },
    favoriteParticipants: [
        {
            name: 'IZZAH BINTI ZAINUDDIN',
            icNumber: '012345678901'
        },
        {
            name: 'KASYI KALISHA BINTI KHAIRUDDIN',
            icNumber: '012345678901'
        },
        {
            name: 'AUNI AMANI BINTI KALIZAN',
            icNumber: '012345678901'
        }
    ]
}

const Profile = () => {
    const [selected, setSelected] = useState(0);
    const [user, setUser] = useState(exampleUser)

    const tabClassName = (index: number) => `flex gap-2 p-3 cursor-pointer text-[14px] min-w-250px ${selected == index ? 'bg-[#00ADB9] text-[#fff] rounded-[6px]' : 'bg-#fff text-[#525252BF]'}`

    return (
        <section className="justify-center gap-[40px] relative 2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6 flex min-h-[100dvh]">
            <div className='mt-[12rem]'>
                <p className='text-[#525252] text-[14px] mb-4'>General</p>
                <div className={tabClassName(0)} onClick={() => setSelected(0)}>
                    <img src={selected == 0 ? selectedProfileIcon : profileIcon} />
                    <p>Profile</p>
                </div>
                <div className={tabClassName(1)} onClick={() => setSelected(1)}>
                    <img src={selected == 1 ? selectedTrackingIcon : trackingIcon} />
                    <p>Track</p>
                </div>
                <div className={tabClassName(2)} onClick={() => setSelected(2)}>
                    <img src={selected == 2 ? selectedTransactionIcon : transactionIcon} />
                    <p>Transaction</p>
                </div>
                <div className='mt-4'>
                    <p className='font-medium'>More</p>
                </div>
                <div className={`${tabClassName(3)} mt-2`} onClick={() => setSelected(3)}>
                    <img src={selected == 3 ? selectedPolicy : policy} />
                    <p>Policy</p>
                </div>
                <div className={tabClassName(4)} onClick={() => setSelected(4)}>
                    <img src={selected == 4 ? selectedHelpLine : helpLine} />
                    <p>Help Center</p>
                </div>
            </div>
            <div className='mt-[6rem] mb-[10rem]'>
                {selected == 0 && <ProfileForm profileData={user} setProfile={setUser} />}
                {selected == 1 && <Tracking />}
                {selected == 2 && <Transaction />}
                {selected ==3 && <PolicyDetail />}
                {selected == 3 && <Policy />}
                {selected == 4 && <HelpLine />}
            </div>
        </section>
    );
};

export default Profile;
