"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend('re_i1YxV8cP_F8tKGa91tF6CoBFMsz24GK8F');
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
        error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
        error: "Invalid message",
        };
    }

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'nicowang178@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail,
        text: message,
    });
};