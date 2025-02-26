
function Heading({ data }) {
    const { shortText, title } = data;

    return (
        <div className="text-center">
            <span className="uppercase text-[14px] bg-gradient-text text-transparent bg-clip-text font-bold">{shortText}</span>
            <h1 className="capitalize text-5xl lg:text-6xl font-bold mt-2 font-playfair">{title}</h1>
        </div>
    );
}

export default Heading;