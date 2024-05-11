'use client';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import Watermark from "./Watermark";

const page = () => {

  const handleOauthClick = (authProvider: string) => {
    console.log('clicked on:', authProvider)
  }

  return (
    <div className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

      <div className="space-y-5 bg-white p-10 rounded-lg  drop-shadow-lg mb-3">
        <h1 className="text-6xl font-semibold drop-shadow-lg text-center">Login</h1>


        <LoginForm />


        <div className="flex items-center gap-3">
          <Separator className="w-[190px]"/>
          <p className="text-black/70">or</p>
          <Separator className="w-[190px]"/>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={() => handleOauthClick('google')} size={'lg'} variant={'outline'} className="w-full drop-shadow-md">
            <FcGoogle size={25}/>
          </Button>

          <Button onClick={() => handleOauthClick('github')} size={'lg'} variant={'outline'} className="w-full drop-shadow-md">
            <FaGithub size={25}/>
          </Button>

        </div>

        <p className="text-center">
          Don't have an account, please {" "}
          <Link className="text-blue-500 hover:underline underline-offset-4 cursor-pointer" href={'/register'}>Register.</Link>
        </p>

      </div>

      <Watermark />

    </div>
  )
}

export default page;