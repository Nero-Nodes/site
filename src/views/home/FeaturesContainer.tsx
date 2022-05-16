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
                            <Icon.FaSolidMicrochip />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Powerful Infrastructure</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Nero takes pride in using dedicated nodes with Intel&reg; i9-9900K CPU&apos;s or higher. Enjoy a lag-free, consistent and simple hosting experience.</dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaSolidDesktop />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Custom Game Panel</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Nero features an in-house system designed to handle server creation, deletion and management all in one simple interface.</dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaSolidCoins />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Passive Earning System</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Upgrade your server for free, simply by using our Game Panel. Credits are automatically allocated when </dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <Icon.FaFileArchive />
                        </div>
                        <p class="ml-16 text-lg leading-6 font-medium text-white">Security to the core</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">Nero enforces strict security measures in order to defend your data from nasties. Your data is <span class="border-b border-gray-500">your data.</span></dd>
                </div>
            </dl>
        </div>
    );
};

export default FeaturesContainer;
