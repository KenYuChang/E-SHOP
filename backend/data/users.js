import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Ken Chang',
        email: 'ken@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'James Chang',
        email: 'james@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Mark Cheng',
        email: 'mark@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;
