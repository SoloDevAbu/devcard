const UserInput = () => {
    const username = "";
    return (
        <div className="py-16">
            <div className="bg-color-cardbg pt-14 px-14 pb-5 w-1/3 mx-auto text-center rounded-lg">
                <h1 className="text-4xl font-sans font-bold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8159d4] to-[#d5408d]">Dev Card</h1>
                <h3 className="text-xl font-sans">Generate you LeetCode Card!</h3>
                <input 
                    type="text" 
                    placeholder="Enter your LeetCode username"
                    id="username"
                    className="mt-4 p-2 rounded-lg w-full bg-color-input text-lg"
                />
                <button className="bg-gradient-to-r from-[#8159d4] to-[#d5408d] text-white py-2 px-4 rounded-lg mt-4 text-2xl" onClick={()=> {
                    
                }}>Generate My Card</button>
                <p className="text-center text-gray-500 font-sans text-sm pt-8">Became the First to generate a Card</p>
            </div>
        </div>
    )
}

export default UserInput