"use client";
import React, { useState } from "react";
import AboutView from "./cardviews/AboutView";
import SpeciesView from "./cardviews/SpeciesView";
import ContributionView from "./cardviews/ContributionView";

const LocationView = ({ onDeeperButtonClick }) => {
    const [selectView, setSelectView] = useState("about");

    const handleButtonClick = (button) => {
        setSelectView(button);
    };

    const handleDeeperButtonClick = () => {
        onDeeperButtonClick(true);
    };

    return (
        <div className="max-w-md min-h-[700px] max-h-[900px] bg-white border border-[#00000073] shadow-lg rounded-xl">
            <img
                className="w-full rounded-t-xl"
                src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3167db28-8744-4096-9d14-233ab6f29bbf%2F15895442-8077-4a77-bc0a-cd44d1375fde%2Fruinas.png?table=block&id=c1e1a04a-4345-44d6-bf94-e7097ad09bb6&spaceId=3167db28-8744-4096-9d14-233ab6f29bbf&width=1830&userId=df0cd599-25e0-439a-86ed-25e61375f699&cache=v2"
                alt=""
            />

            <div className="py-8 px-12 min-h-fit">
                <h2 className="text-2xl font-bold mb-2">Presa "El Palote"</h2>
                <h3 className="text-xl mb-4 text-[#A7A7A7]">León, Guanajuato Mex</h3>

                <div className="flex gap-4 mx-auto py-2">
                    <button
                        className={`rounded-full py-2 px-4 w-full border border-[#7D7D7D] ${
                            selectView === "about" ? "bg-[#3F9F7F]" : "bg-[#FFFAFF]"
                        }`}
                        onClick={() => handleButtonClick("about")}
                    >
                        About
                    </button>
                    <button
                        className={`rounded-full py-2 px-4 w-full border border-[#7D7D7D] ${
                            selectView === "species" ? "bg-[#3F9F7F]" : "bg-[#FFFAFF]"
                        }`}
                        onClick={() => handleButtonClick("species")}
                    >
                        Species
                    </button>
                    <button
                        className={`rounded-full py-2 px-4 w-full border border-[#7D7D7D] ${
                            selectView === "contribution" ? "bg-[#3F9F7F]" : "bg-[#FFFAFF]"
                        }`}
                        onClick={() => handleButtonClick("contribution")}
                    >
                        Contribution
                    </button>
                </div>
                {selectView === "about" ? (
                    <AboutView />
                ) : selectView === "species" ? (
                    <SpeciesView />
                ) : (
                    <ContributionView onButtonClick={handleDeeperButtonClick} />
                )}
            </div>
        </div>
    );
};

export default LocationView;
