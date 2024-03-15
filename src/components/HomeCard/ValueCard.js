import React from 'react';

function ValueCard({ title, value, description }) {
    return (
        <div className="value-card">
            <h3>{title}<span>(TVL)</span></h3>
            <h4>{value}</h4>
            <p>{description}</p>
        </div>
    );
}

export default ValueCard;
