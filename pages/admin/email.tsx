/*
NFL Confidence Pool FE - the frontend implementation of an NFL confidence pool.
Copyright (C) 2015-present Brian Duffey and Billy Alexander
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see {http://www.gnu.org/licenses/}.
Home: https://asitewithnoname.com/
*/
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import Authenticated from '../../components/Authenticated/Authenticated';
import { getPageTitle } from '../../utils';
import {
	isSignedInSSR,
	UNAUTHENTICATED_REDIRECT,
	isAdminSSR,
	IS_NOT_ADMIN_REDIRECT,
} from '../../utils/auth.server';
import { usePageTitle } from '../../utils/hooks';

const AdminEmail: FC = () => {
	const [title] = usePageTitle('Email Users');

	return (
		<Authenticated isAdmin>
			<Head>
				<title>{getPageTitle(title)}</title>
			</Head>
			<h1>Admin Email</h1>
		</Authenticated>
	);
};

AdminEmail.whyDidYouRender = true;

// ts-prune-ignore-next
export const getServerSideProps: GetServerSideProps = async context => {
	const session = await isSignedInSSR(context);

	if (!session) {
		return UNAUTHENTICATED_REDIRECT;
	}

	const isAdmin = isAdminSSR(session);

	if (!isAdmin) {
		return IS_NOT_ADMIN_REDIRECT;
	}

	const { user } = session;

	return { props: { user } };
};

// ts-prune-ignore-next
export default AdminEmail;
