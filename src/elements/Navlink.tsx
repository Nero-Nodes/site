import { Component } from 'solid-js';

interface Props {
    link: string;
    name: string;
}

const Navlink: Component<Props> = ({ link, name }) => {
    return (
        <a 
            href={link}
            class={'text-gray-800 font-medium text-gray-500 hover:text-black'}
        >
            {name}
        </a>
    );
};

export default Navlink;
