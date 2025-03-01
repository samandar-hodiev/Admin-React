// import { useState } from "react";
import { Button, Input } from "@forma";
import Avtar from "@images/me.jpeg"

const index = ({ className }) => {

    return (
        <header className={className ? className : "w-full h-[100px] bg-[#1F2937] px-[40px]"}>
            <nav className="w-full h-full flex items-center justify-between  ">
                <div className="flex items-center gap-x-24 relative">
                    <div className="flex items-center gap-x-4">
                        <Button
                            btnType="submit"
                            className="hover:bg-[#374151] cursor-pointer py-1 px-2 rounded-md transition-all duration-150 text-[#9CA3AF]"
                        >
                            <i className="bi bi-list text-2xl"></i>
                        </Button>
                        <a href="#" className="text-[#FFFFFF] text-[22px] font-bold">
                            <i className="bi bi-speedometer2 text-[23px] text-[#FFFFFF] pr-1"></i>
                            Dashboard
                        </a>
                    </div>
                    <div className="relative">
                        <label htmlFor="searching" className="cursor-pointer">
                            <i className="bi bi-search  absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                        </label>
                        <Input
                            inputName="#"
                            inputId="searching"
                            inputType="text"
                            inputPlaceholder="Search"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#374151] text-white placeholder-[#9CA3AF] "
                        />
                    </div>



                </div>

                <div className="flex gap-x-6 ">
                    <i className="bi bi-bell-fill text-[22px] text-[#9CA3AF] hover:text-white px-2 py-[2px] hover:bg-[#374151] rounded-md transition-all duration-150 cursor-pointer"></i>
                    <i className="bi bi-grid-fill text-[22px] text-[#9CA3AF] hover:text-white px-2 py-[2px] hover:bg-[#374151] rounded-md transition-all duration-150 cursor-pointer"></i>
                    <i className="bi bi-brightness-high-fill text-[22px] text-[#9CA3AF] hover:text-white px-2 py-[2px] hover:bg-[#374151] rounded-md transition-all duration-150 cursor-pointer"></i>
                    <div className="w-[40px] h-[40px] cursor-pointer rounded-full overflow-hidden">
                        <img src={Avtar} alt="avatar" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default index;