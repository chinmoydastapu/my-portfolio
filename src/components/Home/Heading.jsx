
function Heading({ data }) {
    const { shortText, title } = data;

    return (
        <div className="text-center">
            <span className="uppercase text-[12px] md:text-[14px] bg-gradient-text text-transparent bg-clip-text font-bold">{shortText}</span>
            <h1 className="uppercase text-3xl md:text-6xl font-bold md:mt-2 font-playfair">{title}</h1>
        </div>
    );
}

export default Heading;