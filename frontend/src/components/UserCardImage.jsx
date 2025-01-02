import lcLogo from '../assets/Leetcode.png'
import logo from '../assets/coding.png'
import b1 from '../assets/badges/b1.png'
import b2 from '../assets/badges/b2.png'
import b3 from '../assets/badges/b3.png'
import b4 from '../assets/badges/b4.png'
import b5 from '../assets/badges/b5.png'
import b6 from '../assets/badges/b6.png'
import b7 from '../assets/badges/b7.png'

const UserCardImage = ({ name, username, rank, reputation, totalSolved, easySolved, medSolved, hardSolved, badges = [] }) => {
    return (
        <div className='aspect-[5/4] w-full mx-auto bg-neutral-900 rounded-xl px-5 py-4' style={{ maxWidth: '600px', maxHeight: '480px', position: 'relative' }}>

            <div className="flex justify-between items-center">
                <img src={lcLogo} alt="LeetCode" className="h-12" />
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-semibold">LeetCode</h1>
                    <p className="text-sm text-blue-500">https://profile-card-generator.vercel.app</p>
                </div>
                <img src={logo} alt="DevCard" className="h-12" />
            </div>

            <div className='border-gray-800 border-b-2'></div>

            {/* Profile and the number of questions solved*/}

            <div className="flex justify-between py-2 gap-4">
                {/* Profile Info */}
                <div className="flex flex-col items-center">
                    <img src={logo} alt="User" className="h-28 w-28 rounded-full" />
                    <h1 className="text-2xl">name</h1>
                    <p className="text-sm">username</p>
                </div>

                {/* Solved Stats */}
                <div className="flex-grow bg-neutral-800 rounded-xl px-4 py-3 flex justify-between items-center gap-2">
                    <div className="bg-neutral-700 flex flex-col items-center text-center font-semibold w-2/3 h-full rounded-lg justify-center">
                        <h1><span className='text-3xl'>272</span>/3406</h1>
                        <div className='flex flex-row'>
                            <p>r</p>
                            <p>Solved</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-1/3">
                        <div className="bg-neutral-700 rounded-lg p-2 text-center">
                            <h1 className="text-blue-700 font-semibold text-sm">Easy</h1>
                            <p className='font-semibold text-sm'><span>170</span>/846</p>
                        </div>
                        <div className="bg-neutral-700 rounded-lg p-2 text-center">
                            <h1 className="text-yellow-700 font-semibold text-sm">Medium</h1>
                            <p className='font-semibold text-sm'><span>170</span>/846</p>
                        </div>
                        <div className="bg-neutral-700 rounded-lg p-2 text-center">
                            <h1 className="text-red-700 font-semibold text-sm">Hard</h1>
                            <p className='font-semibold text-sm'><span>170</span>/846</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Rank,reputation and badges*/}
            <div className="flex gap-4">
                {/* Rank & Reputation */}
                <div className="bg-neutral-800 flex flex-col items-center rounded-lg p-2">
                    <div className="bg-neutral-700 rounded-lg px-4 py-2 mb-2">
                        <h1 className="text-sm">Rank</h1>
                        <p className="text-lg font-semibold">11,87,546</p>
                    </div>
                    <div className="bg-neutral-700 rounded-lg px-4 py-2">
                        <h1 className="text-sm">Reputation</h1>
                        <p className="text-lg font-semibold">28.7K</p>
                    </div>
                </div>

                {/* Badges */}
                <div className="flex-1 bg-neutral-800 rounded-lg p-2">
                    <h1 className="text-center">Badges</h1>
                    <div className="grid grid-cols-5 gap-2 mt-2">
                        {[b1, b2, b3, b4, b5, b6, b7].map((badge, index) => (
                            <img src={badge} alt={`Badge ${index}`} className="h-10 w-10" key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCardImage