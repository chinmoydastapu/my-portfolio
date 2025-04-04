import Heading from "../Home/Heading";

function Clients () {
    return (
        <div id="clients" className="flex flex-col items-center gap-10 p-2 sm:p-10 pt-8 sm:pt-0">
            <Heading data={{shortText: 'explore who i have worked with', title: 'my clients'}} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                
            </div>
        </div>
    );
}

export default Clients;