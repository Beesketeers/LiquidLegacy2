import React from "react";
import CardListItem from "./CardListItem";

const speciesView = () => {
    return (
        <div className="py-2 max-h-[300px] overflow-y-scroll w-full flex flex-col gap-2">
            <CardListItem
                title="Delfin"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/375px-Tursiops_truncatus_01.jpg"
                description="yooooooooooooooo el delfin es un animal muy bonito y es muy inteligente y es muy bonito y es muy inteligente y es muy bonito y es muy inteligente y es muy bonito"
            />
            <CardListItem
                title="Delfin"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/375px-Tursiops_truncatus_01.jpg"
                description="yooooooooooooooo el delfin es un animal muy bonito y es muy inteligente y es muy bonito y es muy inteligente y es muy bonito y es muy inteligente y es muy bonito"
            />
            <CardListItem
                title="Delfin"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/375px-Tursiops_truncatus_01.jpg"
                description="yooooooooooooooo el delfin es un animal muy bonito y es muy inteligente y es muy bonito y es muy inteligente y es muy bonito y es muy inteligente y es muy bonito"
            />
        </div>
    );
};

export default speciesView;
