import React from 'react'
import { DAD_EMAIL, DAD_PHONE } from '../Constants/Constants'

export const ContactPage = () => {
    return (
        <div>
            <p>Phone:&nbsp;<span>{DAD_PHONE}</span></p>
            <p>Email:&nbsp;<span>{DAD_EMAIL}</span></p>
        </div>
    )
}
