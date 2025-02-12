import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card/Card";


interface Contact {
    id: number;
    relation: string;
    name: string;
    phoneNumber: string;
    relationShip: string;
    email: string;
}


const FifthTask = () => {

    const [contacts,setContacts] = useState<Contact[]>([])

    useEffect(()=>{
        const getContacts = async() => {
            const response = await axios.get('https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts');
            setContacts(response.data);  
        };
        getContacts();
    },[]);

    return <>
        <h1 className="w-full mt-3 font-bold text-[25px] flex justify-center items-center">Fifth Task</h1>
        <div className="flex flex-col gap-2 p-2 bg-[#e6e7eb] w-[300px] shadow-2xl direction-ltr">
            {contacts.map(item => <Card key={item.id} name={item.name} phoneNumber={item.phoneNumber} relationShip={item.relation} email={item.email}/>)}
        </div>
    </>;
};

export default FifthTask;