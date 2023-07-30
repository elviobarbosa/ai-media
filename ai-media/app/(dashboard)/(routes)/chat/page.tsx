"use client";
import * as z from "zod";
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { ConfigEnum } from "@/shared/models/config";
import generateId from "react-id-generator";


const ChatPage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt
            }
            const newMessages = [...messages, userMessage];
            
            const response = await axios.post(ConfigEnum.OPEN_AI_CONVERSATION, {
                messages: newMessages
            })
            setMessages((current) => [...current, userMessage, response.data])
            form.reset();
        } catch (error: any) {
            console.log(error)
        } finally {
            router.refresh()
        }
    };

    return (
        <div>
            <Heading
                title="Chat"
                description="Chat com Chat GPT"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="text-ciolet-500/10"
            />

            <div className="px-4 lg:px-8">
                <div>
                    
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg 
                                border 
                                w-full 
                                p-4 
                                px-3 
                                md:px-6 
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                            "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10" id={generateId()}>
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                id={generateId()}
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Digite o que deseja."
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button 
                            className="col-span-12 lg:col-span-2 w-full" 
                            type="submit" 
                            disabled={isLoading} 
                            size="icon">
                                Conversar
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className="space-y-4 mt-4">
                    <div className="flex flex-col-reverse gap-y-4">

                        {messages.map((message, index) => (
                            <div key={index}>
                                {message.content}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChatPage;
