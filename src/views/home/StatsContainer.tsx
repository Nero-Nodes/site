import { Component } from 'solid-js';

const StatsContainer: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 py-[12rem] sm:px-6">
            <dl class="space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20">
                <div class="relative">
                    <p class="ml-16 text-[10rem] leading-6 font-medium text-white">3000+</p>
                    <dd class="mt-16 ml-16 text-base text-blue-500">total servers deployed to our nodes.</dd>
                </div>
                <div class="relative">
                    <p class="ml-16 text-[10rem] leading-6 font-medium text-white">3500+</p>
                    <dd class="mt-16 ml-16 text-base text-blue-500">clients served on NeroPortal.</dd>
                </div>
                <div class="relative">
                    <p class="ml-16 text-[10rem] leading-6 font-medium text-white">99.9%</p>
                    <dd class="mt-16 ml-16 text-base text-blue-500">server uptime and availability.</dd>
                </div>
                <div class="relative">
                    <p class="ml-16 text-[10rem] leading-6 font-medium text-white">9900k</p>
                    <dd class="mt-16 ml-16 text-base text-blue-500">Using the best server CPU&apos;s available.</dd>
                </div>
            </dl>
        </div>
    );
};

export default StatsContainer;
