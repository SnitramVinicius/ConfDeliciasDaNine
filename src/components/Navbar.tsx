"use client";

export default function Navbar() {
 return (
    <>
   <nav className=" relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img src="./Background.png" alt="" className="w-30"/>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-10">
                    <a href="" className="text-[#fff] hover:text-[#7a5641]">Home</a>
                    <a href="" className="text-[#fff] hover:text-[#7a5641]">Sobre</a>
                    <a href="" className="text-[#fff] hover:text-[#7a5641]">Informações</a>
                    <a href="" className="text-[#fff] hover:text-[#7a5641]">Serviços</a>
                    <a href="" className="text-[#fff] hover:text-[#7a5641]">Contato</a>
                </div>
            </div>
        </div>
    </div>
   </nav>
    </>
  );
}