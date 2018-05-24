export class Contact {
    id: number;
    first_name: string;
    last_name: string;
    gender: string = 'Male';
    dob?: string;

    phone: string;
    email: string;

    address?: string;
    city?: string = 'Bangalore';
    state?: string = 'Karnataka';
    country?: string = 'India';

}