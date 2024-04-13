"use client";

import * as z from "zod";

import Loader from "@/components/Loader";
import Heading from "@/components/Heading";

import { formSchema } from "./constants";

import axios from "axios";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { useProModal } from "@/hooks/UseProModal";
import toast from "react-hot-toast";

export default function AudioPage() {
  const proModel = useProModal();
  const router = useRouter();
  const [audio, setAudio] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      /*input by the user: promt*/
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setAudio(undefined);
      const response = await axios.post("/api/audio", values);

      setAudio(response.data.audio);
      form.reset();
    } catch (error) {
      if ((error as any)?.response?.status === 403) {
        proModel.onOpen();
        console.log(error);
      } else {
        toast.error("Something went wrong!");
      }
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Audio Generator"
        description="Turn your words into music"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0
                        focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Violin solo in G minor"
                        {...field} //onchange, onblur, value
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full font-bold text-[#041e49]"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!audio && !isLoading && (
            <Empty label="No audio has been generated." />
          )}
          {audio && (
            <audio controls className="w-full mt-8">
              <source src={audio} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
