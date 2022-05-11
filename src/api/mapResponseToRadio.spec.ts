import { mapResponseToRadio } from './mapResponseToRadio';

const input = {
	music: [
		{
			id: 'offradio',
			name: 'Off Radio',
			source: 'http://46.28.53.118:7062/stream',
			image: 'http://www.offradio.gr/sites/all/themes/offradio_theme/facebook.png',
			website: 'http://www.offradio.gr'
		},
		{
			id: 'enlefko',
			name: 'En Lefko 87.7',
			source: 'http://stream.radiojar.com/enlefko877',
			image:
				'https://yt3.ggpht.com/a-/ACSszfFdWJg69QynFK0oJ0lxAjj9Rfg9wLO-aXM4nA=s900-mo-c-c0xffffffff-rj-k-no',
			website: 'http://www.enlefko.fm'
		}
	],
	news: [
		{
			id: 'stokokkino',
			name: 'Sto Kokkino 105.5',
			source: 'http://stream.radiojar.com/kokkino-ath.mp3',
			image: 'http://cdn.e-radio.gr/logos/gr/big/kokkino.png',
			website: 'http://www.stokokkino.gr'
		},
		{
			id: 'parapolitika',
			name: 'Parapolitika 90.1',
			source: 'http://netradio.live24.gr/athinaradio',
			image: 'http://cdn.e-radio.gr/logos/gr/big/parapolitikafm.png',
			website: 'http://www.parapolitika.gr'
		}
	]
};

const want = [
	{
		id: 'offradio',
		name: 'Off Radio',
		source: 'http://46.28.53.118:7062/stream',
		image: 'http://www.offradio.gr/sites/all/themes/offradio_theme/facebook.png',
		website: 'http://www.offradio.gr',
		label: 'music'
	},
	{
		id: 'enlefko',
		name: 'En Lefko 87.7',
		source: 'http://stream.radiojar.com/enlefko877',
		image:
			'https://yt3.ggpht.com/a-/ACSszfFdWJg69QynFK0oJ0lxAjj9Rfg9wLO-aXM4nA=s900-mo-c-c0xffffffff-rj-k-no',
		website: 'http://www.enlefko.fm',
		label: 'music'
	},
	{
		id: 'stokokkino',
		name: 'Sto Kokkino 105.5',
		source: 'http://stream.radiojar.com/kokkino-ath.mp3',
		image: 'http://cdn.e-radio.gr/logos/gr/big/kokkino.png',
		website: 'http://www.stokokkino.gr',
		label: 'news'
	},
	{
		id: 'parapolitika',
		name: 'Parapolitika 90.1',
		source: 'http://netradio.live24.gr/athinaradio',
		image: 'http://cdn.e-radio.gr/logos/gr/big/parapolitikafm.png',
		website: 'http://www.parapolitika.gr',
		label: 'news'
	}
];

test('mapResponseToRadio transforms response to internal type', () => {
	expect(mapResponseToRadio(input)).toEqual(want);
});
