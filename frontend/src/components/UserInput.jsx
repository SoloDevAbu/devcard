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
            const { data: questionsSolved } = await axios.get(`https://devcard-wcnh.onrender.com/api/userProfile/${username}`);
            const { solvedProblem, easySolved, mediumSolved, hardSolved } = questionsSolved;

            const { data: info } = await axios.get(`https://devcard-wcnh.onrender.com/api/userProfile/info/${username}`);
            const { name, avatar, ranking, reputation, skillTags } = info;

            try {
                await axios.post(`https://devcard-wcnh.onrender.com/api/user/${username}`, {
                    username,
                    avatar,
                    solvedProblem,
                    easySolved,
                    mediumSolved,
                    hardSolved,
                });
            } catch (err) {
                throw err
            }

            setUserData({
                name,
                username,
                ranking,
                reputation,
                solvedProblem,
                easySolved,
                mediumSolved,
                hardSolved,
                avatar,
                skillTags: skillTags.slice(0, 10),
            });
        } catch (err) {
            setError(err.response?.data?.message || "User not found or API error");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="py-16 flex flex-col justify-center items-center pb-40">
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
                <div className='aspect-[5/4] w-full mx-auto px-5 py-4 mt-8' style={{ maxWidth: '600px', maxHeight: '480px', position: 'relative' }}>
                    <div className='mt-8'>
                        <UserCardImage
                            name={userData.name}
                            username={userData.username}
                            profile={userData.avatar}
                            reputation={userData.reputation}
                            rank={userData.ranking}
                            totalSolved={userData.totalSolved}
                            easySolved={userData.easySolved}
                            medSolved={userData.mediumSolved}
                            hardSolved={userData.hardSolved}
                            skillTags={userData.skillTags}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserInput