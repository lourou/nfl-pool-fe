import Head from 'next/head';
import React, { FC } from 'react';

import Authenticated from '../../components/Authenticated/Authenticated';
import { getPageTitle } from '../../utils';

const EditProfile: FC = () => {
	const title = 'Edit My Profile';

	return (
		<Authenticated isRegistered>
			<Head>
				<title>{getPageTitle(title)}</title>
			</Head>
			<h1>{title}</h1>
		</Authenticated>
	);
};

EditProfile.whyDidYouRender = true;

// ts-prune-ignore-next
export default EditProfile;
