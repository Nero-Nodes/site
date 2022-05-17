import { Component, createSignal } from 'solid-js';
import * as Icon from 'solid-icons/fa';

interface Props {
    text: string;
}

const Banner: Component<Props> = ({ text }) => {
    const [ visible, setVisible ] = createSignal(true);

    return (
        <>
            {visible() &&
                <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 bg-blue-500 rounded-xl">
                    <div class="flex items-center justify-between flex-wrap">
                        <div class="w-0 flex-1 flex items-center">
                            <span class="flex p-2 rounded-lg bg-blue-800 text-white">
                                <Icon.FaSolidBullhorn />
                            </span>
                            <p class="ml-3 font-medium text-white truncate">
                                {text}
                            </p>
                        </div>
                        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button type="button" onClick={() => setVisible(false)} class="-mr-1 flex p-2 sm:-mr-2">
                                <Icon.FaTimesCircle />
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Banner;
