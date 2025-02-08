
function ExpertiseCard({ data }) {
    const { icon, title, description } = data;

    return (
        <div className="flex flex-col gap-5 p-5 shadow-custom rounded">
            <span className="text-orange-400">{icon}</span>
            <h3 className="text-2xl font-playfair font-bold">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}

export default ExpertiseCard;