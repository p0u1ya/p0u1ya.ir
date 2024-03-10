import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'p0u1ya ─ developer';
	const description = "Hey 👋 I'm Pourya, a developer";

	return {
		title,
		description,
		canonical: `https://p0u1ya.ir/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'p0u1ya',
			url: `https://p0u1ya.ir/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://p0u1ya.ir/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@p0u1ya',
			site: '@p0u1ya',
		},
		...props,
	};
}
