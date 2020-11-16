import React from 'react';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import './search.css';

import ChannelRow from '../../components/ChannelRow';
import VideoRow from '../../components/VideoRow';

function SearchPage() {
  return (
		<div className='searchPage'>
			<div className="searchPageFilter">
				<TuneOutlinedIcon />
				<h2>Filtro</h2>
			</div>
			<hr />

			<ChannelRow
				image="https://yt3.ggpht.com/a/AATXAJwLE4n8CJ6UrG0cuGACvsPcvtZ2uwqEuifzfIO59A=s176-c-k-c0x00ffffff-no-rj-mo"
				channel="Otávio Miranda"
				verified
				subs="50 mil"
				noOfVideos={399}
				description="É aqui onde posto minhas ideias doidas"
			/>

			<hr/>

			<VideoRow
				views="1.4M"
				subs="50 mil"
				description="Veja como utilizar o objeto Map() em Javascript para soluções onde Object não seria ideal."
				channel="Otávio Miranda"
				timestamp="1 mês atrás"
				title="Map() em Javascript"
				image="https://i.ytimg.com/an_webp/Ohf0wDJp9O4/mqdefault_6s.webp?du=3000&sqp=COaky_0F&rs=AOn4CLDpm9aYP9gyATsnHrwgTf38-ylE-A"
			/>

			<VideoRow
				views="1.4M"
				subs="50 mil"
				description="Veja como utilizar o objeto Map() em Javascript para soluções onde Object não seria ideal."
				channel="Otávio Miranda"
				timestamp="1 mês atrás"
				title="Map() em Javascript"
				image="https://i.ytimg.com/an_webp/Ohf0wDJp9O4/mqdefault_6s.webp?du=3000&sqp=COaky_0F&rs=AOn4CLDpm9aYP9gyATsnHrwgTf38-ylE-A"
			/>

			<VideoRow
				views="1.4M"
				subs="50 mil"
				description="Veja como utilizar o objeto Map() em Javascript para soluções onde Object não seria ideal."
				channel="Otávio Miranda"
				timestamp="1 mês atrás"
				title="Map() em Javascript"
				image="https://i.ytimg.com/an_webp/Ohf0wDJp9O4/mqdefault_6s.webp?du=3000&sqp=COaky_0F&rs=AOn4CLDpm9aYP9gyATsnHrwgTf38-ylE-A"
			/>

			<VideoRow
				views="1.4M"
				subs="50 mil"
				description="Veja como utilizar o objeto Map() em Javascript para soluções onde Object não seria ideal."
				channel="Otávio Miranda"
				timestamp="1 mês atrás"
				title="Map() em Javascript"
				image="https://i.ytimg.com/an_webp/Ohf0wDJp9O4/mqdefault_6s.webp?du=3000&sqp=COaky_0F&rs=AOn4CLDpm9aYP9gyATsnHrwgTf38-ylE-A"
			/>

			<VideoRow
				views="1.4M"
				subs="50 mil"
				description="Veja como utilizar o objeto Map() em Javascript para soluções onde Object não seria ideal."
				channel="Otávio Miranda"
				timestamp="1 mês atrás"
				title="Map() em Javascript"
				image="https://i.ytimg.com/an_webp/Ohf0wDJp9O4/mqdefault_6s.webp?du=3000&sqp=COaky_0F&rs=AOn4CLDpm9aYP9gyATsnHrwgTf38-ylE-A"
			/>
		</div>
	);
}

export default SearchPage;