import linkdinLogo from '../assets/linkedin.png'
import xLogo from '../assets/twitter.png'
import githubLogo from '../assets/github.png'
import threadesLogo from '../assets/threads.png'
import instagramLogo from '../assets/instagram.png'

const Card = () => {
    return (
        <div className="py-16">
            <div className="bg-color-cardbg pt-14 px-14 pb-5 w-1/3 mx-auto text-center rounded-lg">
                <h1 className="text-4xl font-sans font-bold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8159d4] to-[#d5408d]">Instagram Card</h1>
                <h3 className="text-xl font-sans">Generate you Instagram Card!</h3>
                <input 
                    type="text" 
                    placeholder="Enter your Instagram link" 
                    className="mt-4 p-2 rounded-lg w-full bg-color-input text-xl"
                />
                <button className="bg-gradient-to-r from-[#8159d4] to-[#d5408d] text-white py-2 px-4 rounded-lg mt-4 text-2xl">Generate My Card</button>
                <p className="text-center text-gray-500 font-sans text-sm pt-8">Became the First to generate a Card</p>
            </div>

            <div className="mx-auto text-center pt-24">
                <h2>Made by
                    <a href="https://github.com/SoloDevAbu" className="text-blue-700"> SoloDevAbu</a>
                </h2>
            </div>
            <div className='flex justify-center gap-3 place-items-center mx-auto size-6 pt-6'>
                <img src={linkdinLogo} alt="Linkdin" onClick={() => window.open('https://www.linkedin.com/in/abu-bakkar-siddique-546112205/', '_blank')} />
                <img src={xLogo} alt="Twitter" onClick={() => window.open('https://x.com/AbuBakkar2502', '_blank')} />
                <img src={githubLogo} alt="Github" onClick={() => window.open('https://github.com/SoloDevAbu', '_blank')} />
                <img src={threadesLogo} alt="Threads" onClick={() => window.open('https://www.threads.net/@devabu2502', '_blank')} />
                <img src={instagramLogo} alt="Instagram" onClick={() => window.open('https://www.instagram.com/devabu2502/', '_blank')} />
            </div>
        </div>
    )
}

export default Card