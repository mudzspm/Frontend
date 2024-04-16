export type userProfile = {
    userData: {
        name: string,
        email: string,
        icNumber: string,
        address: {
            line1: string,
            line2: string
        },
        phone: string,
        password: string
    },
    favoriteParticipants: [
        {
            name: string,
            icNumber: string
        },
        {
            name: string,
            icNumber: string
        },
        {
            name: string,
            icNumber: string
        }
    ]
}