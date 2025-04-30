import { EmailTemplete } from "@/components/email-templete";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request: Request) {
    // const { username, subject, email, content, file } = await request.json()
    // console.log("route.tsが取得した値：", username, subject, email, content, file)
    const formData = await request.formData()

    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const content = formData.get("content") as string
    const file = formData.get("file") as File

    // console.log("route.tsが取得した値：", username, subject, email, content, file)

    const buffer = Buffer.from(await file.arrayBuffer())
    // console.log("buffer：", buffer)

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ["syumeikyo@outlook.jp"],    // Resendで登録したメルアドしか送れない。
            subject,
            react: EmailTemplete({
                username,
                email,
                content
            }) as React.ReactElement,
            attachments: [{ filename: file.name, content: buffer }]
        })

        if (error) return NextResponse.json({ error })
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error })
    }
}