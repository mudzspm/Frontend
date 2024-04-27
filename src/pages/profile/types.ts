export type userProfile = {
    userData?: {
        name: string,
        email: string,
        icNumber: string,
        address: string;
        phone: string,
    },
    favoriteParticipants?: Array<{
        name: string,
        icNumber: string
    }>
}