const CardListItem = ({ title, extra, image, description }) => {
    return (
        <div className="flex items-center w-full p-2 border border-gray-400 rounded gap-2">
            <img className="aspect-square w-16 rounded border border-gray-400 self-start" src={image}></img>
            <div className="break-words">
                <div className={`${title && extra ? "py-2" : ""}`}>
                    <p className="font-semibold text-lg">{title}</p>
                    <p className="text-sm text-gray-400">{extra}</p>
                </div>
                {description}
            </div>
        </div>
    );
};

export default CardListItem;
