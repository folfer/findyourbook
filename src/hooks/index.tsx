import React from 'react';

import { SearchProvider } from './search';
import { FavoriteProvider } from './favorites';

const AppProvider: React.FC = ({ children }) => {
    return (
        <FavoriteProvider>
            <SearchProvider>{children}</SearchProvider>
        </FavoriteProvider>
    );
};

export default AppProvider;
