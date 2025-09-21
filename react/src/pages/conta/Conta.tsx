import { useRef } from "react";

function Conta() {
    const loginRef = useRef<HTMLDivElement>(null);

    const scrollToLogin = () => {
        loginRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            
            <div className="bg-[url('../assets/images/hero_section.jpg')] bg-center bg-cover h-[100vh] w-[100vw] text-white p-15 flex flex-col justify-center items-start">
                <h1 className="text-7xl font-bold mb-5">SUA CONTA</h1>
                <p className="w-140 mb-5">
                    Gerencie sua conta, personalize seu perfil e aproveite ao máximo a experiência com o Melodia.
                </p>
                <button 
                    onClick={scrollToLogin}
                    className="bg-[#7B00FF] hover:bg-[#5e00c4] px-6 py-3 rounded-full font-semibold transition"
                >
                    Acesse sua Conta
                </button>
            </div>
            
            
            
            
            
        </>
    )
}

export default Conta;
