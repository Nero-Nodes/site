import { Component } from 'solid-js';

interface Props {
    link: string;
    name: string;
}

const Navlink: Component<Props> = ({ link, name }) => {
    return (
        <a 
            href={link}
            class={'text-base font-medium text-gray-500 hover:text-gray-900'}
        >
            {name}
        </a>
    );
};

export default Navlink;
