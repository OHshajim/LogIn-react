import { useState } from "react";

const logIn = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [isSub, setSub] = useState(false)
    const [isCheck, setCheck] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!isCheck){
            return ;
        }
        const user = {
            name: name,
            email: email,
            password: password
        }
        console.log(user);
        setSub(true)
    }
    return (
        <div className=" flex flex-col justify-center items-center h-screen w-screen">
            {/* input */}
            <h1 className="text-5xl font-bold mb-10">Log In</h1>
            <form className=" w-4/5  lg:w-2/4  flex flex-col bg-white p-7 sm:p-10 rounded-xl gap-2 text-black" 
                onSubmit={(event) => handleSubmit(event)} 
            
            >
                <label className="text-xl font-semibold ">Name</label>
                <input
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Enter your name"
                    className="p-3 rounded-2xl text-base bg-transparent border-2 border-gray-400 font-semibold"
                    required
                    />

                <label className="text-xl font-semibold mt-5">Email</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Enter your Email"
                    className="p-3 rounded-2xl text-base bg-transparent border-2 border-gray-400 font-semibold" 
                    required
                    />

                <label className="text-xl font-semibold mt-5" >Password</label>
                <input
                    onChange={(event) => setPass(event.target.value)}
                    type="password"
                    placeholder="Enter your name"
                    className="p-3 rounded-2xl text-base bg-transparent border-2 border-gray-400 font-semibold" 
                    required
                    />
                
                <div> <input type="checkbox" onChange={(event)=>setCheck(event.target.checked)} /> do you agree our terms and condition .</div>
                
                <div className="flex justify-end">
                    <button 
                    type="submit"
                    className="px-6 py-3 bg-slate-700 text-white text-xl font-bold border-none my-3 hover:bg-gray-500" 
                    >Submit</button>
                </div>
            </form>
            {
                isSub && <div className="fixed top-0 flex justify-center items-center h-screen w-full">
                    <div className="w-4/5  lg:w-2/4 h-2/3 bg-purple-400 text-center rounded-xl flex flex-col justify-center">
                        <h1 className="text-white text-5xl font-bold">Successful</h1>
                        <p className="text-xl text-white font-semibold mt-5 mb-2">Name : {name}</p>
                        <p className="text-xl text-white font-semibold ">Email : {email}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default logIn;