import React from 'react';

import './styles.css';

import Sidebar from '../../components/Sidebar';
import Recommended from '../../components/Recommended';

export default function Home() {
    return (
			<div>				
				<div className='app-page'>
					<Sidebar />
					<Recommended />
				</div>
			</div>
    );
}
