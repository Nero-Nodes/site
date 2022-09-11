import { createSignal } from 'solid-js';
import * as Icon from 'solid-icons/fa';

interface Props {
    type?: 'success' | 'warning' | 'error' | 'uk' | undefined;
    text: string;
    icon: boolean;
    showCloseIcon: boolean;
}

export default ({ type, text, icon, showCloseIcon }: Props) => {
    const [ visible, setVisible ] = createSignal(true);

    function getBackground(type: string) {
        const css = 'max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 rounded-xl bg-gradient-to-r ';

        switch (type) {
            case 'success':
                return css + 'from-green-400 to-blue-600';
            case 'warning':
                return css + 'from-yellow-400 to-yellow-600';
            case 'error':
                return css + 'from-red-500 to-red-500';
            case 'uk':
                return css + 'from-black to-black';
            default:
                return css + 'from-gray-400 to-blue-600';
        };
    };

    function getIconBackground(type: string) {
        const css = 'flex p-2 rounded-lg text-white ';
        switch (type) {
            case 'success':
                return css + 'bg-green-600';
            case 'warning':
                return css + 'bg-yellow-600';
            case 'error':
                return css + 'bg-red-600';
            case 'uke':
                return css + 'bg-blue-600'
            default:
                return css + 'bg-gray-600';
        };
    };

    const redirect = () => {
        // @ts-expect-error this is valid
        window.location = '/news/latest';
    };

    return (
        <>
            {visible() &&
                <div class={getBackground(type)}>
                    <div class="flex items-center justify-between flex-wrap">
                        <div class="w-0 flex-1 flex items-center">
                            {icon &&
                                <span class={getIconBackground(type)}>
                                   <Icon.FaSolidBullhorn class={'mr-3'} />
                                </span>
                            }
                            <p class="font-semibold text-white truncate">
                                {text}
                            </p>
                            {type === 'uk' &&
                                <Icon.FaSolidExternalLinkAlt
                                    onClick={() => redirect()}
                                    class={'ml-2 text-white cursor-pointer'}
                                />
                            }
                        </div>
                        {showCloseIcon &&
                            <div class="order-2 sm:order-3 sm:ml-3 cursor-pointer">
                                <Icon.FaTimesCircle
                                    onClick={() => setVisible(false)}
                                    class={'text-white'}
                                    size={20}
                                />
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};