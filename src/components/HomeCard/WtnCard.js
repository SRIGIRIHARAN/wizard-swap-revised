import React from 'react';

function WtnCard({ title, value, description }) {
    return (
        <div className="value-card">
            <h3>{title}</h3>
            <h4>{value}</h4>
            <p>{description}</p>
        </div>
    );
}

export default WtnCard;
