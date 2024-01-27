import { Bell, ChevronDownIcon, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Mobilenav from "./Mobilenav";

const Navbar = () => {
  return (
    <header className="bg-background w-full py-4 px-4 border-b mx-auto z-50">
      <div className="flex items-center justify-between mx-auto w-full">
        <span className="flex items-center gap-4">
          <div>
            <Image src="/icons/Logo.svg" width={40} height={40} alt="logo" />
          </div>
          <h1 className="text-md md:text-xl font-semibold hidden md:block">
            Dashboard
          </h1>
        </span>
        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden lg:flex items-center justify-center space-x-2 border rounded-full px-6 py-1.5 mr-28 bg-white">
            <Search
              className="w-12 h-5 text-gray-600 hover:cursor-pointer"
              style={{ marginLeft: "-10px" }}
            />
            <Input
              className="outline-none border-none text-lg bg-white"
              placeholder="Search..."
              type="search"
              style={{ marginLeft: "-10px", color: "black" }}
            />
          </div>
          <div className="flex items-center space-x-3 hover:cursor-pointer">
            <Image
              src="/icons/Group.svg"
              alt="calender icon"
              width={16}
              height={16}
              className="dark:hidden"
            />
            <Image
              src="/icons/calendar-dark.svg"
              alt="calender icon"
              width={16}
              height={16}
              className="hidden dark:block"
            />
            <span className="text-sm">November 15, 2023</span>
          </div>
          <span className="p-4 rounded-full  border hover:cursor-pointer hover:bg-green-200">
            <Bell />
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center space-x-2 border p-2 rounded-full hover:bg-gray-200">
                <Avatar>
                  <AvatarImage alt="Justin Bergson" src="/user.png" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">Justin Bergson</span>
                  <span className="text-sm text-gray-500">
                    JustinB@gmail.com
                  </span>
                </div>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage alt="Justin Bergson" src="/user.png" />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Mobilenav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
