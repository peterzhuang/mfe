import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
    return (
        <div>
            <h1>Hi there from container to verify invalidation!</h1>
            <hr />
            <MarketingApp />
        </div>
    );
};