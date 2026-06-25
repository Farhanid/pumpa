// Create a new component: components/Reusable/SectionDivider.jsx
import React from 'react';

const SectionDivider = ({ className = '' }) => {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
        </div>
    );
};

export default SectionDivider;