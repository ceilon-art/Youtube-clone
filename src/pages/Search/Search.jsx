import React from 'react';

import Sidebar from '../../components/Sidebar';
import SearchPage from '../../components/SearchPage';

export default function Search() {
    return (
			<div className='app-page'>
				<Sidebar />
				<SearchPage />
			</div>
    )
}