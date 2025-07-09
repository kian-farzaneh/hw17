import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../fifthTask/card/Card";

interface IContact {
    id: number;
    name: string;
    phoneNumber: string;
    relation: string;
    email: string;
};

const SixthTask = () => {

    const [contacts, setContacts] = useState<IContact[]>([]);

    const [query, setQuery] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<IContact[]>([]);
    const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        if (typingTimeout.current) {
            clearTimeout(typingTimeout.current);
        }

        typingTimeout.current = setTimeout(() => {
            const result = contacts.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(result);
        }, 500);
    }, [query]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts')
            setContacts(response.data);
        }
        getData()
    }, [])

    return (
        <>
            <h1 className="w-full mt-3 font-bold text-[25px] flex justify-center items-center">
                Sixth Task
            </h1>


            <div>
                <input type="text" value={query} onChange={handleSearch} placeholder="جستجو..." />
                <ul>
                    {filteredUsers?.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
            

            {contacts?.map((item) => (
                <div key={item.id} className="mt-6">
                    <Card name={item.name} phoneNumber={item.phoneNumber} relationShip={item.relation} email={item.email} />
                </div>
            ))}
        </>
    );
}

export default SixthTask;
