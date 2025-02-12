import React from "react";


interface contact {
    name:string;
    phoneNumber:string;
    relationShip:string;
    email:string;
}

const Card:React.FC<contact> = ({name,phoneNumber,relationShip,email}) => {
    return<>
        <div>
            <ul>
                <li>name: {name}</li>
                <li>phoneNumber: {phoneNumber}</li>
                <li>relationShip: {relationShip}</li>
                <li>email: {email}</li>
            </ul>
        </div>
    </>;
};

export default Card;