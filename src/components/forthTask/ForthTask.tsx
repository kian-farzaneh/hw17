import React from "react";

interface user {
    name: string;
    lastName: string;
    phoneNumber: number;
}

export const ForthTask: React.FC<user> = ({ name, lastName, phoneNumber }) => {


    return <div className="m-4">
        <p>Name: {name}</p>
        <p>Last Name: {lastName}</p>
        <p>Phone Number: {phoneNumber}</p>
    </div>
};