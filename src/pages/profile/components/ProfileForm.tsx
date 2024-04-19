import { TextInput } from 'flowbite-react'
import { userProfile } from '../types'
import React, { useState } from 'react'

type profileFormProps = {
    profileData: userProfile,
    setProfile: React.Dispatch<React.SetStateAction<userProfile>>
}

const ProfileForm = ({ profileData, setProfile }: profileFormProps) => {

    const [userDataEdit, setUserDataEdit] = useState(false);
    const [favoriteParticipantEdit, setFavoriteParticipantEdit] = useState(false)

    return (
        <div className='bg-white min-w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>
            <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
                <p className='text-[#fff] font-bold text-[36px]'>Profile</p>
                <p className='text-[#fff] text-[14px]'>Manage your profile and favorite participants</p>
            </div>

            <div className='mt-8'>
                <p className='text-[20px] font-semibold'>Profile</p>
                <div className='flex justify-between mt-4'>
                    <p className='text-[14px]'>Manage Your Profile</p>
                    <p className={`${userDataEdit && 'text-[#C1272D]'} text-[14px] cursor-pointer`} onClick={() => setUserDataEdit(!userDataEdit)}>
                        {userDataEdit ? 'Submit' : 'Edit'}
                    </p>
                </div>
                <hr className='mt-2' />
            </div>

            <div className='mt-4'>
                <div className='mb-4'>
                    <label className='text-[12px] font-semibold'>Name</label>
                    <TextInput
                    className='text-[#C0C0C0]'
                        value={profileData.userData?.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setProfile({ userData: { ...profileData.userData, name: e.target.value }, favoriteParticipants: profileData.favoriteParticipants })
                        }
                        }
                        disabled={!userDataEdit}
                    />
                </div>
                <div className='flex mb-4'>
                    <div className='w-[60%] mr-[3%]'>
                        <label className='text-[12px] font-semibold'>Email</label>
                        <TextInput
                            value={profileData.userData?.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setProfile({ userData: { ...profileData.userData, email: e.target.value }, favoriteParticipants: profileData.favoriteParticipants })
                            }
                            }
                            disabled={!userDataEdit}
                        />
                    </div>
                    <div className='w-[37%]'>
                        <label className='text-[12px] font-semibold'>IC Number</label>
                        <TextInput
                            value={profileData.userData?.icNumber}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setProfile({ userData: { ...profileData.userData, icNumber: e.target.value }, favoriteParticipants: profileData.favoriteParticipants })
                            }
                            }
                            disabled={!userDataEdit}
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='font-semibold text-[12px]'>Billing Address</label>
                    <div className='mb-2'>
                        <TextInput
                            aria-label='line 1'
                            value={profileData.userData?.address?.line1}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setProfile({ userData: { ...profileData.userData, address: { ...profileData?.userData?.address, line1: e.target.value } }, favoriteParticipants: profileData.favoriteParticipants })
                            }
                            }
                            disabled={!userDataEdit}
                        />
                    </div>
                    <div>
                        <TextInput
                            aria-label='line 2'
                            value={profileData.userData?.address?.line2}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setProfile({ userData: { ...profileData.userData, address: { ...profileData?.userData?.address, line2: e.target.value } }, favoriteParticipants: profileData.favoriteParticipants })
                            }
                            }
                            disabled={!userDataEdit}
                        />

                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[30%] mr-[3%]'>
                        <label className='text-[12px] font-semibold'>Phone Number</label>
                        <TextInput
                            value={profileData.userData?.phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setProfile({ userData: { ...profileData.userData, phone: e.target.value }, favoriteParticipants: profileData.favoriteParticipants })
                            }
                            }
                            disabled={!userDataEdit}
                        />
                    </div>
                    <div className='w-[30%]'>
                        <label className='text-[12px] font-semibold'>Password</label>
                        <TextInput
                            type='password'
                            value={profileData.userData?.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setProfile({ userData: { ...profileData.userData, password: e.target.value }, favoriteParticipants: profileData.favoriteParticipants })
                            }
                            }
                            disabled={!userDataEdit}
                        />
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-[20px] font-semibold'>Favorite Participant</p>
                    <div className='flex justify-between mt-4'>
                        <p className='text-[14px]'>Manage your profile</p>
                        <p className={`${favoriteParticipantEdit && 'text-[#C1272D]'} text-[14px] cursor-pointer`} onClick={() => setFavoriteParticipantEdit(!favoriteParticipantEdit)}>
                            {favoriteParticipantEdit ? 'Submit' : 'Edit'}
                        </p>
                    </div>
                    <hr className='mt-2' />
                </div>
                <div className='mt-4'>
                    <p className='mb-2.5 text-base'>
                    Participant 1
                    </p>
                    {profileData?.favoriteParticipants.map((participant, index) => {
                        return (
                            <div className='flex mb-4' key={index}>
                                <div className='w-[60%] mr-[3%]'>
                                <p className='mb-2.5 text-base'>
                    Participant 1
                    </p>
                                    <label className='text-[12px] font-semibold'>Name</label>
                                    <TextInput
                                        value={participant?.name}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const profile = { ...profileData }
                                            profile.favoriteParticipants[index] = { name: e.target.value, icNumber: profile.favoriteParticipants[index].icNumber }
                                            setProfile(profile)
                                        }
                                        }
                                        disabled={!favoriteParticipantEdit}
                                    />
                                </div>
                                <div className='w-[37%]'>
                                    
                                    <label className='text-[12px] font-semibold'>IC Number</label>
                                    <TextInput
                                        value={participant.icNumber}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const profile = { ...profileData }
                                            profile.favoriteParticipants[index] = { name: profile.favoriteParticipants[index].name, icNumber: e.target.value }
                                            setProfile(profile)
                                        }
                                        }
                                        disabled={!favoriteParticipantEdit}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileForm