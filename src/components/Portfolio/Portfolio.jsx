import Heading from "../Home/Heading";

function Portfolio () {
    const myProjects = [
        {}
    ];

    return (
        <div id="portfolio" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <Heading data={{shortText: 'visit my works', title: 'my portfolio'}} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                
            </div>
        </div>
    );
}

export default Portfolio;