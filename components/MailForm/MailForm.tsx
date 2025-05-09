'use client'

import React, { useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import useMailForm from '@/hooks/useMailForm'
import { ClipLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MailForm = () => {
    const { form, onSubmit } = useMailForm()

    useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            toast.success('メール送信に成功しました！')
        }
    }, [form.formState.isSubmitSuccessful])

    return (
        <Form {...form}>
            <ToastContainer />
            <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-3">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="ユーザー名" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="メールアドレス" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="主題" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>content</FormLabel>
                            <FormControl>
                                <Textarea placeholder='本文' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>File</FormLabel>
                            <FormControl>
                                <Input
                                    onChange={(e) => {
                                        field.onChange(e.target.files)
                                    }}
                                    accept='image/*'
                                    type='file'
                                    placeholder="ファイル"
                                    name={field.name}
                                    ref={field.ref}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? <ClipLoader /> : "送信"}
                </Button>
            </form>
        </Form>

    )
}

export default MailForm