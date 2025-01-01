import linkdinLogo from '../assets/linkedin.png'
import xLogo from '../assets/twitter.png'
import githubLogo from '../assets/github.png'
import threadesLogo from '../assets/threads.png'
import instagramLogo from '../assets/instagram.png'

const Footer = () => {
    return (
        <footer className='fixed bottom-0 w-full p-8'>
            <div className="mx-auto text-center pt-24">
                <h2>Made by
                    <a href="https://solodevabu.vercel.app/" className="text-blue-900" target="_blank" rel="noopener noreferrer"> SoloDevAbu</a>
                </h2>
            </div>
            <div className='flex justify-center gap-3 place-items-center mx-auto size-6 pt-6 cursor-pointer'>
                <img src={linkdinLogo} alt="Linkdin" onClick={() => window.open('https://www.linkedin.com/in/abu-bakkar-siddique-546112205/', '_blank')} />
                <img src={xLogo} alt="Twitter" onClick={() => window.open('https://x.com/AbuBakkar2502', '_blank')} />
                <img src={githubLogo} alt="Github" onClick={() => window.open('https://github.com/SoloDevAbu', '_blank')} />
                <img src={threadesLogo} alt="Threads" onClick={() => window.open('https://www.threads.net/@devabu2502', '_blank')} />
                <img src={instagramLogo} alt="Instagram" onClick={() => window.open('https://www.instagram.com/devabu2502/', '_blank')} />
            </div>
        </footer>
    )
}

export default Footer