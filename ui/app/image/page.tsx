"use client";

import { useState } from 'react';

const focusModes = [
    {
        key: 'Diffusion',
        title: 'Stable Diffusion',
        description: 'Genrate images from text',
        link: 'https://prodia-fast-stable-diffusion.hf.space',
    },
    {
        key: 'ImageChat',
        title: 'Paligemma',
        description: 'Chat with images',
        link: 'https://big-vision-paligemma.hf.space',
    },
    {
        key: 'AnotherDiffusion',
        title: 'Another Stable Diffusion',
        description: 'Generate images from text',
        link: 'https://stabilityai-stable-diffusion-3-medium.hf.space',
    },
    {
        key: 'imageVariations',
        title: 'Image Variations',
        description: 'Stable Diffusion Image Variations',
        link: 'https://lambdalabs-stable-diffusion-image-variations.hf.space',
    },
    {
        key: 'imageEditing',
        title: 'Image Editing',
        description: 'Limitless Image Editing using Text-to-Image Models',
        link: 'https://editing-images-leditsplusplus.hf.space',
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
