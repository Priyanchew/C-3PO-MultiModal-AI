"use client";

import { useState } from 'react';

const focusModes = [
    {
        key: 'EditVideo',
        title: 'Edit Video',
        description: 'Edit Video By Editing Text',
        link: 'https://radames-edit-video-by-editing-text.hf.space',
    },
    {
        key: 'videoDiffusion',
        title: 'Stable Video Diffusion',
        description: 'Generate videos from text',
        link: 'https://multimodalart-stable-video-diffusion.hf.space',
    },
    {
        key: 'YTvideoToAudio',
        title: 'YTvideoToAudio',
        description: 'Convert Youtube videos to audio',
        link: 'https://pierreguillou-video-to-audio.hf.space',
    },
    {
        key: 'pix2pixDiffusion',
        title: 'Pix2Pix Diffusion',
        description: 'Apply Instruct Pix2Pix Diffusion to a video',
        link: 'https://fffiloni-pix2pix-video.hf.space',
    },
    {
        key: 'removeVideoBackground',
        title: 'Remove Video Bg',
        description: 'Removes video background',
        link: 'https://amirgame197-remove-video-background.hf.space',
    },
];

const Page = () => {
    const [currentLink, setCurrentLink] = useState('');

    const handleButtonClick = (link: any) => {
        setCurrentLink(link);
    };

    return (
        <>
            <div className="pt-5 pl-7">
                <div className="z-10 mt-2 flex flex-row">
                    {focusModes.map((mode, i) => (
                        <button
                            key={i}
                            onClick={() => handleButtonClick(mode.link)}
                            className="w-40 md:w-60 lg:w-80 p-2 rounded-lg flex flex-col items-start justify-start text-start space-y-2 duration-200 cursor-pointer transition hover:bg-light-secondary dark:hover:bg-dark-secondary"
                        >
                            <div className="flex flex-row items-center space-x-1 text-black dark:text-white">
                                <p className="text-sm font-medium">{mode.title}</p>
                            </div>
                            <p className="text-black/70 dark:text-white/70 text-xs">
                                {mode.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col align-bottom">
                <p className="invisible">-</p>
                <iframe
                    src={currentLink}
                    width="100%"
                    height="961"
                ></iframe>
            </div>
        </>
    );
}

export default Page;
