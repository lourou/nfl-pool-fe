import Head from 'next/head';
import React, { FC } from 'react';

import { getPageTitle } from '../../utils';

//TODO: get actual week value
const selectedWeek = 1;

const MakePicks: FC = () => (
	<div>
		<Head>
			<title>{getPageTitle(`Make week ${selectedWeek} picks`)}</title>
		</Head>
		<h1>Make Picks</h1>
	</div>
);

// ts-prune-ignore-next
export default MakePicks;
