import { TiTick } from "react-icons/ti";
import Heading from "../Home/Heading";
import { GoDotFill } from "react-icons/go";

function Pricing() {
    const services = [
        { id: 1, name: 'Responsive Web Design', regular: true, standard: true, premium: true },
        { id: 2, name: 'Version Control Setup (Git)', regular: true, standard: true, premium: true },
        { id: 3, name: 'Basic Testing & Debugging', regular: true, standard: true, premium: true },
        { id: 4, name: 'Single Page Application (SPA) Development', regular: true, standard: true, premium: true },
        { id: 5, name: 'API Integration', regular: true, standard: true, premium: true },
        { id: 6, name: 'Deployment to Live Server', regular: true, standard: true, premium: true },
        { id: 7, name: 'Performance Optimization', regular: false, standard: true, premium: true },
        { id: 8, name: 'Third-Party Service Integration', regular: false, standard: true, premium: true },
        { id: 9, name: 'Ongoing Maintenance & Support', regular: false, standard: true, premium: true },
        { id: 10, name: 'Progressive Web App (PWA) Development', regular: false, standard: false, premium: true },
        { id: 11, name: 'Custom Backend Development', regular: false, standard: false, premium: true },
        { id: 12, name: 'Database Design & Management', regular: false, standard: false, premium: true },
        { id: 13, name: 'Advanced Security Implementations', regular: false, standard: false, premium: true },
        { id: 14, name: 'Full Custom Web Application', regular: false, standard: false, premium: true },
        { id: 15, name: 'Enterprise-Level Software Development', regular: false, standard: false, premium: true }
    ];

    return (
        <div id="pricing" className="flex flex-col items-center gap-10 md:p-10">
            <Heading data={{ shortText: 'my plans to provide you the best', title: 'pricing & services' }} />
            <div className="max-w-[100vw] md:w-full overflow-x-scroll scrollbar-hide shadow-custom">
                <table className="table">
                    <thead>
                        <tr className="text-base md:text-lg text-gray-400">
                            <th>Service</th>
                            <th>Regular<span className="block text-[#ff6600]">$5.00/hr</span></th>
                            <th>Standard<span className="block text-[#ff6600]">$8.00/hr</span></th>
                            <th>Premium<span className="block text-[#ff6600]">$10.00/hr</span></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm md:text-base">
                        {services.map((service, idx) => (
                            <tr key={idx}>
                                <td>{service.name}</td>
                                <td>{service.regular ? <TiTick className="w-6 h-6 text-[#ff6600]" /> : <GoDotFill className="w-6 h-6 text-gray-400" />}</td>
                                <td>{service.standard ? <TiTick className="w-6 h-6 text-[#ff6600]" /> : <GoDotFill className="w-6 h-6 text-gray-400" />}</td>
                                <td>{service.premium ? <TiTick className="w-6 h-6 text-[#ff6600]" /> : <GoDotFill className="w-6 h-6 text-gray-400" />}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Pricing;