import { formSchema } from "@/lib/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const useMailForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            subject: '',
            email: '',
            content: '',
            file: undefined
        }
    })

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
        const { username, subject, email, content, file } = values
        // console.log(username, email, subject, content, file)
        const formData = new FormData()
        formData.append("username", username)
        formData.append("email", email)
        formData.append("subject", subject)
        formData.append("content", content)
        formData.append("file", file[0])

        try {
            await fetch(`${process.env.NEXT_PUBLIC_BASE}/api/send`, {
                method: "POST",
                body: formData
            })
        } catch (error) {
            console.error('メール送信エラー：', error)
        }
    }, [])

    return { form, onSubmit }
}

export default useMailForm