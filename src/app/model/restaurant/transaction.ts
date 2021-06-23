import {Patient} from '../patient';
import {Room} from '../room';

export class Transaction {
    patient: Patient;
    bar_reservation_id: number;
    room: Room;
    meal: string;
    food: string;
    payment_type_name: string;
    total: number;
    status: string;
    updated_by: string;
    confirmed_by: string;
    received: boolean;
    used_at: number;
    filter_by: string;
    data: any;
    from: number;
    to: number;
}
