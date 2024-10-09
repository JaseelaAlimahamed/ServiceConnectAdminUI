import React from "react";
import Card from "../../reUsableComponents/Card";
import cardIcon1 from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/cardIcon1.png"; // Correct import for the first image
import cardIcon2 from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/cardIcon2.png"; // Assuming you have a second image

const FranchiseeCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Small Card with PNG Image Example */}
            <Card
                variant="small"
                title="932" 
                subtitle="Franchisees"
                iconBg="bg-violet-500"
                icon={<img src={cardIcon1} alt="Franchisee Icon" className="w-[2rem] aspect-square" />} // PNG image
            />

            {/* Another Small Card with PNG Image */}
            <Card
                variant="small"
                title="754"
                subtitle="Active Franchisees"
                iconBg="bg-blue"
                icon={<img src={cardIcon2} alt="Franchisee Icon" className="w-[2rem] aspect-square" />} // Another PNG image
            />

            <Card
                variant="small"
                title="754"
                subtitle="Inactive Franchisees"
                iconBg="bg-blue"
                icon={<img src={cardIcon2} alt="Franchisee Icon" className="w-[2rem] aspect-square" />} // Another PNG image
            />

        </div>
    );
};

export default FranchiseeCard;

