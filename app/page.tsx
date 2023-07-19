"use client"
import {useState} from "react";

export default function HomePage() {
    const pass = "0013"
    const [passValue, setPassValue] = useState("")
    const [Error, setError] = useState(false)
    const [displayHome, setDisplayHome] = useState("top-0 block")
    const [display, setDisplay] = useState("hidden")

    const clickHandler = () => {
        if (passValue === "0013") {
            setDisplayHome("-top-[1200PX]")
            setTimeout(() => setDisplayHome("hidden"), 2000)
            setTimeout(() => setDisplay("block"), 2200)

        } else {
            setError(true)
            setTimeout(() => setError(false), 4000)
        }
    }

    return (
        <div className={"h-full overflow-hidden"}>

            <div
                className={"w-full flex z-20 relative justify-center p-10 lg:items-center h-screen transition-all duration-[2s] " + displayHome}>
                <div className={"bg-white w-20 h-20 overflow-hidden rounded-full"}>
                    <img src="https://cdn.wallpapersafari.com/18/0/txsG6r.png" alt="Profile"/>
                </div>
                <div className={"md:w-60 w-44 p-2 h-20 "}>
                    <div className={"w-full h-full"}>
                        <h1 className={"text-white font-medium text-xl"}>Welcoom OS</h1>
                        <div className={"flex gap-x-2  bg-indigo-950 p-1"}>
                            <input
                                onChange={(e) => setPassValue(e.target.value)}
                                className={"w-[90%] text-white outline-none bg-indigo-950 border-white border-b-2 placeholder-white"}
                                placeholder={"Password"} type="password"/>
                            <button content={"Open"}
                                    onClick={clickHandler}
                                    className={"w-[10%] hover:scale-110 active:scale-90  bg-indigo-950 text-white"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6">
                                    <path
                                        d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {Error ? <span className={"text-red-600"}>try again</span> : null}
                </div>
                <button className={"text-white absolute hover:scale-110 active:scale-90 left-5 bottom-5"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </button>
            </div>
            <div className={"h-screen w-full " + display}>
                <nav className={"w-full flex justify-between bg-gray-800 h-6"}>
                    
                </nav>
            </div>
        </div>
    )
}
