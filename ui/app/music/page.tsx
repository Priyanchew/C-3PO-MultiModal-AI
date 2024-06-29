"use client";

import { useState } from 'react';

const focusModes = [
    {
        key: 'TTS',
        title: 'Text to Speech',
        description: 'Convert text to speech',
        link: 'https://k2-fsa-text-to-speech.hf.space',
    },
    {
        key: 'Stable',
        title: 'Audio Generator',
        description: 'Generate different audios from text',
        link: 'https://artificialguybr-stable-audio-open-zero.hf.space',
    },
    {
        key: 'STT',
        title: 'Speech to Text',
        description: 'Convert speech to text',
        link: 'https://sanchit-gandhi-whisper-jax.hf.space',
    },
    {
        key: 'MusicGen',
        title: 'Music Generator',
        description: 'Generate music from text',
        link: 'https://reach-vb-musicgen-prompt-upsampling.hf.space',
    },
    {
        key: 'Spleeter',
        title: 'Music Spleeter',
        description: 'Split music into vocals and instruments',
        link: 'https://derina-musicspleeter.hf.space',
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
