import Heading from "@/components/Heading";
import { MessagesSquare } from "lucide-react";

export default function Conversation() {
    return (
        <Heading title="Conversation" description="Advanced LLM model" icon={MessagesSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10"/>
    )
}