import lcLogo from '../assets/Leetcode.png'
import logo from '../assets/coding.png'
import b1 from '../assets/badges/b1.png'
import b2 from '../assets/badges/b2.png'
import b3 from '../assets/badges/b3.png'
import b4 from '../assets/badges/b4.png'
import b5 from '../assets/badges/b5.png'
import b6 from '../assets/badges/b6.png'
import b7 from '../assets/badges/b7.png'

const UserCardImage = ({name, username, rank, reputation, totalSolved, easySolved, medSolved, hardSolved, badges = []}) => {
  return (
    <div className='aspect-[5/4] bg-neutral-900 rounded-xl px-5 py-4'>
        <div className='w-full h-20 flex justify-between'>
            <img src={lcLogo} alt="LeetCode" className='size-12'/>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-semibold'>LeetCode</h1>
                <p className='text-sm'>https://profile-card-generator-eight.vercel.app/</p>
            </div>
            <img src={logo} alt="DevCard" className='size-12'/>
        </div>
        <div className='border-gray-800 border-b-2'></div>

        {/* Profile and the number of questions solved*/}
        <div className='flex h-48 py-2'>
            {/*profile image and name,username */}
            <div className='w-40 flex flex-col items-center'>
                <img src={logo} alt="User" className='size-28'/>
                <h1 className='text-2xl'>Name</h1>
                <p className='text-sm'>username</p>
            </div>
            {/*number of questions solved*/}
            <div className='w-96 bg-neutral-800 rounded-xl p-3 flex justify-between'>
                {/*Total questions */}
                <div className='h-40 w-52 bg-neutral-700 rounded-lg flex flex-col justify-center items-center font-semibold'>
                    <h1><span className='text-3xl'>272</span>/3406</h1>
                    <div className='flex flex-row'>
                        <p>r</p>
                        <p>Solved</p>
                    </div>
                </div>
                {/*easy,med hard */}
                <div className='h-40 w-20 flex flex-col justify- gap-2'>
                    <div className='bg-neutral-700 rounded-lg flex flex-col items-center px-3 py-1'>
                        <h1 className='text-blue-700 font-semibold text-sm'>Easy</h1>
                        <p className='font-semibold text-sm'><span>170</span>/846</p>
                    </div>
                    <div className='bg-neutral-700 rounded-lg flex flex-col items-center px-3 py-1'>
                        <h1 className='text-yellow-700 font-semibold text-sm'>Med.</h1>
                        <p className='font-semibold text-sm'><span>170</span>/846</p>
                    </div>
                    <div className='bg-neutral-700 rounded-lg flex flex-col items-center px-3 py-1'>
                        <h1 className='text-red-700 font-semibold text-sm'>Hard</h1>
                        <p className='font-semibold text-sm'><span>170</span>/846</p>
                    </div>
                </div>
            </div>
        </div>
        {/*Rank,reputation and badges*/}
        <div className='flex gap-2'>
            {/*Rank and Reputation */}
            <div className='h-40 w-36 bg-neutral-800 flex flex-col justify-center items-center gap-2 rounded-lg p-2'>
                <div className='h-16 w-32 bg-neutral-700 rounded-lg flex flex-col items-center justify-center font-semibold'>
                    <h1>Rank</h1>
                    <p>11,87,546</p>
                </div>
                <div className='h-16 w-32 bg-neutral-700 rounded-lg flex flex-col items-center justify-center font-semibold'>
                    <h1>Reputation</h1>
                    <p>28.7K</p>
                </div>
            </div>
            {/*Badges */}
            <div className='h-40 w-96 flex flex-col bg-neutral-800 rounded-lg items-center pt-3'>
                <h1>Badges</h1>
                <div className='grid grid-cols-5 justify-between px-3 pt-2'>
                    <img src={b1} alt="HI" />
                    <img src={b2} alt="HI" />
                    <img src={b3} alt="HI" />
                    <img src={b4} alt="HI" />
                    <img src={b5} alt="HI" />
                    <img src={b6} alt="HI" />
                    <img src={b7} alt="HI" />
                    <img src={b1} alt="HI" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCardImage