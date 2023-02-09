import { Component } from 'solid-js';
import * as Icon from 'solid-icons/fa';

const FeaturesContainer: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-center md:space-x-10 my-20">
                <span>
                    <h1 class={'text-8xl font-bold text-white'}>So, what does <span class={'text-blue-500'}>Nero</span> offer?</h1>
                </span>
            </div>
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaSolidMicrochip size={24} />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Powerful Infrastructure</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Nero takes pride in using dedicated nodes with Intel&reg; 9900k CPU&apos;s or higher. Enjoy a lag-free, consistent and simple hosting experience.</dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaSolidDesktop size={24} />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Custom Game Panel</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Nero features an in-house system designed to handle server creation, deletion and management <span class="font-semibold">all in one simple interface.</span></dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaSolidCoins size={24} />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Passive Earning System</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Upgrade your server <span class="font-semibold">for free</span>, simply by using our Portal. Credits are automatically allocated when you have the tab open in your browser.</dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaFileArchive size={24} />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Security to the core</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Nero enforces strict security measures in order to defend your data from nasties. Your data is <span class="font-semibold">your data</span>, end of story.</dd>
                </div>
            </dl>
        </div>
    );
};

export default FeaturesContainer;
