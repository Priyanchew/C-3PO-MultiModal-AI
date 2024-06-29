"use client";

import { useState } from 'react';

const focusModes = [
    {
        key: 'webSearch',
        title: 'All',
        description: 'Searches across all of the internet',
        link: '/',
    },
    {
        key: 'academicSearch',
        title: 'Academic',
        description: 'Search in published academic papers',
        link: 'https://huggingface.co/spaces/multimodalart/stable-video-diffusion',
    },
    {
        key: 'YTvideoToAudio',
        title: 'YTvideoToAudio',
        description: 'Convert Youtube videos to audio',
        link: 'https://pierreguillou-video-to-audio.hf.space',
    },
    {
        key: 'wolframAlphaSearch',
        title: 'Wolfram Alpha',
        description: 'Computational knowledge engine',
        link: '/music',
    },
    {
        key: 'youtubeSearch',
        title: 'Youtube',
        description: 'Search and watch videos',
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
                    height="950"
                ></iframe>
            </div>
        </>
    );
}

export default Page;
