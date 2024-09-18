import { ReactNode } from "react";
import Social from "../Social/Social";

interface Props {
    children: ReactNode;
    text: string;
}

const QuoteText = ({ children, text }: Props) => {
    return (
        <>
            <figure>
                <blockquote className="blockquote">
                    <h3>
                        <i className="bi bi-quote d-inline"></i>
                        <span id="text" className="p-3">{children}</span>
                    </h3>
                </blockquote>
                <Social />
                <figcaption id="author" className="blockquote-footer d-inline-block text-end my-4 w-75">
                    {text}
                </figcaption>
            </figure>
        </>
    );
}

export default QuoteText