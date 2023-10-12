import sendEmail from './sendEmail.js';

sendEmail({
    email: 'hakansson.hampus@gmail.com',
    title: 'Oppenheimer',
    ticketType: '1 barn, 2 vuxen, 1 pensionär',
    seats: ['1A', '2A', '3A', '4A'],
    price: 450 + ' kr',
    date: '2023-12-31',
    bookingNo: '2FDX7A9E'
});