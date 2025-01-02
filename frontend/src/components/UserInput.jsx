import { useState } from 'react';
import axios from 'axios';
import UserCardImage from './UserCardImage';

const UserInput = () => {

    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerateCard = async () => {
        if (!username) {
            setError("Username cannot be empty!");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `http://localhost:3000/api/userProfile/${username}`
            );
            console.log("API response:", response.data);
            const {
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
                ranking,
                reputation,
              } = response.data;
            
              setUserData({
                username,
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
                ranking,
                reputation

              });
        } catch (err) {
            setError(err.response?.data?.message || "User not found or API error");
          } finally {
            setLoading(false);
          }
    };
    return (
        <div className="py-16 flex justify- items-center">
            <div className=" aspect-square max-w-96 max-h-96 bg-color-cardbg pt-14 pb-5 mx-auto px-4 text-center rounded-lg">
                <h1 className="text-4xl font-sans font-bold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8159d4] to-[#d5408d]">Dev Card</h1>
                <h3 className="text-xl font-sans">Generate your LeetCode Card!</h3>
                <input 
                    type="text" 
                    placeholder="Enter your LeetCode username"
                    value={username}
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-4 p-2 rounded-lg w-full bg-color-input text-lg"
                />
                <button className="bg-gradient-to-r from-[#8159d4] to-[#d5408d] text-white py-2 px-4 rounded-lg mt-4 text-2xl" onClick={handleGenerateCard} disabled={loading}>
                    {loading ? "Loading..." : "Generate My Card"}
                </button>

                {error && <p className='text-red-500 mt-2 text-sm'>{error}</p>}
                <p className="text-center text-gray-500 font-sans text-sm pt-8">Become the first to generate a Card</p>
            </div>

            {userData && (
                <div className='mt-8'>
                    <UserCardImage 
                        username={userData.username}
                        totalSolved={userData.totalSolved}
                        easySolved={userData.easySolved}
                        mediumSolved={userData.mediumSolved}
                        hardSolved={userData.hardSolved}
                        rank={userData.ranking}
                        reputation={userData.reputation}
                    />
                </div>
            )}
        </div>
    )
}

export default UserInput