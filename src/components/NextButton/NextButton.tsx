interface Props {
    children: string;
    setQuote: () => void;
}

const NextButton = ({ children, setQuote }: Props) => {
    return (
        <button id="new-quote" type="button" className="btn btn-light rounded-2" onClick={setQuote} >{children}</button>
    )
}

export default NextButton