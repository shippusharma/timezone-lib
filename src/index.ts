/**
* @description  Certainly! Here's a breakdown of the options used in the `Intl.DateTimeFormat` constructor with explanations:

1. `timeZone`: Specifies the desired time zone for the formatted date. It should be a valid IANA time zone identifier like 'Asia/Calcutta' or 'America/New_York'.

2. `year`: Specifies the display format for the year. It can be set to `'numeric'` for the year digits (e.g., 2023), `'2-digit'` for the last two digits (e.g., 23), or omitted for no year display.

3. `month`: Specifies the display format for the month. It can be set to `'numeric'` for the numerical month (e.g., 11), `'2-digit'` for zero-padded month (e.g., 11), `'narrow'` for the abbreviated month name (e.g., Nov), `'short'` for the short month name (e.g., Nov), or `'long'` for the full month name (e.g., November).

4. `day`: Specifies the display format for the day. It can be set to `'numeric'` for the numerical day (e.g., 30), `'2-digit'` for zero-padded day (e.g., 30).

5. `hour`: Specifies the display format for the hour. It can be set to `'numeric'` for the numerical hour (e.g., 14), `'2-digit'` for zero-padded hour (e.g., 14).

6. `minute`: Specifies the display format for the minute. It can be set to `'numeric'` for the numerical minute (e.g., 37), `'2-digit'` for zero-padded minute (e.g., 37).

7. `second`: Specifies the display format for the second. It can be set to `'numeric'` for the numerical second (e.g., 18), `'2-digit'` for zero-padded second (e.g., 18).

8. `hour12`: Specifies whether the hour should be displayed in 12-hour format (true) or 24-hour format (false). Setting it to `false` enforces 24-hour format.

9. `timeZoneName`: Specifies the display format for the time zone. It can be set to `'short'` for the abbreviated time zone name (e.g., GMT+5:30), `'long'` for the full time zone name (e.g., Indian Standard Time), `'shortOffset'` for the abbreviated time zone name with offset (e.g., GMT+5:30), or `'longOffset'` for the full time zone name with offset (e.g., Indian Standard Time GMT+5:30).

These options allow you to customize the formatting of the date and time according to your requirements. You can mix and match them based on the desired format. I hope this explanation helps! 😊

🎉 special thank to `Shippu Sharma` creator of this library.

@shippusharma `author`
@see {@link https://github.com/shippusharma ***Github***}

🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈
*/

export class TimeZone {
	private readonly timezones: string[];
	private readonly defaultOptions: Intl.DateTimeFormatOptions;

	constructor() {
		this.timezones = [
			'Africa/Abidjan',
			'Africa/Accra',
			'Africa/Addis_Ababa',
			'Africa/Algiers',
			'Africa/Asmara',
			'Africa/Asmera',
			'Africa/Bamako',
			'Africa/Bangui',
			'Africa/Banjul',
			'Africa/Bissau',
			'Africa/Blantyre',
			'Africa/Brazzaville',
			'Africa/Bujumbura',
			'Africa/Cairo',
			'Africa/Casablanca',
			'Africa/Ceuta',
			'Africa/Conakry',
			'Africa/Dakar',
			'Africa/Dar_es_Salaam',
			'Africa/Djibouti',
			'Africa/Douala',
			'Africa/El_Aaiun',
			'Africa/Freetown',
			'Africa/Gaborone',
			'Africa/Harare',
			'Africa/Johannesburg',
			'Africa/Juba',
			'Africa/Kampala',
			'Africa/Khartoum',
			'Africa/Kigali',
			'Africa/Kinshasa',
			'Africa/Lagos',
			'Africa/Libreville',
			'Africa/Lome',
			'Africa/Luanda',
			'Africa/Lubumbashi',
			'Africa/Lusaka',
			'Africa/Malabo',
			'Africa/Maputo',
			'Africa/Maseru',
			'Africa/Mbabane',
			'Africa/Mogadishu',
			'Africa/Monrovia',
			'Africa/Nairobi',
			'Africa/Ndjamena',
			'Africa/Niamey',
			'Africa/Nouakchott',
			'Africa/Ouagadougou',
			'Africa/Porto-Novo',
			'Africa/Sao_Tome',
			'Africa/Timbuktu',
			'Africa/Tripoli',
			'Africa/Tunis',
			'Africa/Windhoek',
			'America/Adak',
			'America/Anchorage',
			'America/Anguilla',
			'America/Antigua',
			'America/Araguaina',
			'America/Argentina/Buenos_Aires',
			'America/Argentina/Catamarca',
			'America/Argentina/ComodRivadavia',
			'America/Argentina/Cordoba',
			'America/Argentina/Jujuy',
			'America/Argentina/La_Rioja',
			'America/Argentina/Mendoza',
			'America/Argentina/Rio_Gallegos',
			'America/Argentina/Salta',
			'America/Argentina/San_Juan',
			'America/Argentina/San_Luis',
			'America/Argentina/Tucuman',
			'America/Argentina/Ushuaia',
			'America/Aruba',
			'America/Asuncion',
			'America/Atikokan',
			'America/Atka',
			'America/Bahia',
			'America/Bahia_Banderas',
			'America/Barbados',
			'America/Belem',
			'America/Belize',
			'America/Blanc-Sablon',
			'America/Boa_Vista',
			'America/Bogota',
			'America/Boise',
			'America/Buenos_Aires',
			'America/Cambridge_Bay',
			'America/Campo_Grande',
			'America/Cancun',
			'America/Caracas',
			'America/Catamarca',
			'America/Cayenne',
			'America/Cayman',
			'America/Chicago',
			'America/Chihuahua',
			'America/Coral_Harbour',
			'America/Cordoba',
			'America/Costa_Rica',
			'America/Creston',
			'America/Cuiaba',
			'America/Curacao',
			'America/Danmarkshavn',
			'America/Dawson',
			'America/Dawson_Creek',
			'America/Denver',
			'America/Detroit',
			'America/Dominica',
			'America/Edmonton',
			'America/Eirunepe',
			'America/El_Salvador',
			'America/Ensenada',
			'America/Fort_Nelson',
			'America/Fort_Wayne',
			'America/Fortaleza',
			'America/Glace_Bay',
			'America/Godthab',
			'America/Goose_Bay',
			'America/Grand_Turk',
			'America/Grenada',
			'America/Guadeloupe',
			'America/Guatemala',
			'America/Guayaquil',
			'America/Guyana',
			'America/Halifax',
			'America/Havana',
			'America/Hermosillo',
			'America/Indiana/Indianapolis',
			'America/Indiana/Knox',
			'America/Indiana/Marengo',
			'America/Indiana/Petersburg',
			'America/Indiana/Tell_City',
			'America/Indiana/Vevay',
			'America/Indiana/Vincennes',
			'America/Indiana/Winamac',
			'America/Indianapolis',
			'America/Inuvik',
			'America/Iqaluit',
			'America/Jamaica',
			'America/Jujuy',
			'America/Juneau',
			'America/Kentucky/Louisville',
			'America/Kentucky/Monticello',
			'America/Knox_IN',
			'America/Kralendijk',
			'America/La_Paz',
			'America/Lima',
			'America/Los_Angeles',
			'America/Louisville',
			'America/Lower_Princes',
			'America/Maceio',
			'America/Managua',
			'America/Manaus',
			'America/Marigot',
			'America/Martinique',
			'America/Matamoros',
			'America/Mazatlan',
			'America/Mendoza',
			'America/Menominee',
			'America/Merida',
			'America/Metlakatla',
			'America/Mexico_City',
			'America/Miquelon',
			'America/Moncton',
			'America/Monterrey',
			'America/Montevideo',
			'America/Montreal',
			'America/Montserrat',
			'America/Nassau',
			'America/New_York',
			'America/Nipigon',
			'America/Nome',
			'America/Noronha',
			'America/North_Dakota/Beulah',
			'America/North_Dakota/Center',
			'America/North_Dakota/New_Salem',
			'America/Nuuk',
			'America/Ojinaga',
			'America/Panama',
			'America/Pangnirtung',
			'America/Paramaribo',
			'America/Phoenix',
			'America/Port-au-Prince',
			'America/Port_of_Spain',
			'America/Porto_Acre',
			'America/Porto_Velho',
			'America/Puerto_Rico',
			'America/Punta_Arenas',
			'America/Rainy_River',
			'America/Rankin_Inlet',
			'America/Recife',
			'America/Regina',
			'America/Resolute',
			'America/Rio_Branco',
			'America/Rosario',
			'America/Santa_Isabel',
			'America/Santarem',
			'America/Santiago',
			'America/Santo_Domingo',
			'America/Sao_Paulo',
			'America/Scoresbysund',
			'America/Shiprock',
			'America/Sitka',
			'America/St_Barthelemy',
			'America/St_Johns',
			'America/St_Kitts',
			'America/St_Lucia',
			'America/St_Thomas',
			'America/St_Vincent',
			'America/Swift_Current',
			'America/Tegucigalpa',
			'America/Thule',
			'America/Thunder_Bay',
			'America/Tijuana',
			'America/Toronto',
			'America/Tortola',
			'America/Vancouver',
			'America/Virgin',
			'America/Whitehorse',
			'America/Winnipeg',
			'America/Yakutat',
			'America/Yellowknife',
			'Antarctica/Casey',
			'Antarctica/Davis',
			'Antarctica/DumontDUrville',
			'Antarctica/Macquarie',
			'Antarctica/Mawson',
			'Antarctica/McMurdo',
			'Antarctica/Palmer',
			'Antarctica/Rothera',
			'Antarctica/South_Pole',
			'Antarctica/Syowa',
			'Antarctica/Troll',
			'Antarctica/Vostok',
			'Arctic/Longyearbyen',
			'Asia/Aden',
			'Asia/Almaty',
			'Asia/Amman',
			'Asia/Anadyr',
			'Asia/Aqtau',
			'Asia/Aqtobe',
			'Asia/Ashgabat',
			'Asia/Ashkhabad',
			'Asia/Atyrau',
			'Asia/Baghdad',
			'Asia/Bahrain',
			'Asia/Baku',
			'Asia/Bangkok',
			'Asia/Barnaul',
			'Asia/Beirut',
			'Asia/Bishkek',
			'Asia/Brunei',
			// eslint-disable-next-line sonarjs/no-duplicate-string
			'Asia/Calcutta',
			'Asia/Chita',
			'Asia/Choibalsan',
			'Asia/Chongqing',
			'Asia/Chungking',
			'Asia/Colombo',
			'Asia/Dacca',
			'Asia/Damascus',
			'Asia/Dhaka',
			'Asia/Dili',
			'Asia/Dubai',
			'Asia/Dushanbe',
			'Asia/Famagusta',
			'Asia/Gaza',
			'Asia/Harbin',
			'Asia/Hebron',
			'Asia/Ho_Chi_Minh',
			'Asia/Hong_Kong',
			'Asia/Hovd',
			'Asia/Irkutsk',
			'Asia/Istanbul',
			'Asia/Jakarta',
			'Asia/Jayapura',
			'Asia/Jerusalem',
			'Asia/Kabul',
			'Asia/Kamchatka',
			'Asia/Karachi',
			'Asia/Kashgar',
			'Asia/Kathmandu',
			'Asia/Katmandu',
			'Asia/Khandyga',
			'Asia/Kolkata',
			'Asia/Krasnoyarsk',
			'Asia/Kuala_Lumpur',
			'Asia/Kuching',
			'Asia/Kuwait',
			'Asia/Macao',
			'Asia/Macau',
			'Asia/Magadan',
			'Asia/Makassar',
			'Asia/Manila',
			'Asia/Muscat',
			'Asia/Nicosia',
			'Asia/Novokuznetsk',
			'Asia/Novosibirsk',
			'Asia/Omsk',
			'Asia/Oral',
			'Asia/Phnom_Penh',
			'Asia/Pontianak',
			'Asia/Pyongyang',
			'Asia/Qatar',
			'Asia/Qostanay',
			'Asia/Qyzylorda',
			'Asia/Rangoon',
			'Asia/Riyadh',
			'Asia/Saigon',
			'Asia/Sakhalin',
			'Asia/Samarkand',
			'Asia/Seoul',
			'Asia/Shanghai',
			'Asia/Singapore',
			'Asia/Srednekolymsk',
			'Asia/Taipei',
			'Asia/Tashkent',
			'Asia/Tbilisi',
			'Asia/Tehran',
			'Asia/Tel_Aviv',
			'Asia/Thimbu',
			'Asia/Thimphu',
			'Asia/Tokyo',
			'Asia/Tomsk',
			'Asia/Ujung_Pandang',
			'Asia/Ulaanbaatar',
			'Asia/Ulan_Bator',
			'Asia/Urumqi',
			'Asia/Ust-Nera',
			'Asia/Vientiane',
			'Asia/Vladivostok',
			'Asia/Yakutsk',
			'Asia/Yangon',
			'Asia/Yekaterinburg',
			'Asia/Yerevan',
			'Atlantic/Azores',
			'Atlantic/Bermuda',
			'Atlantic/Canary',
			'Atlantic/Cape_Verde',
			'Atlantic/Faeroe',
			'Atlantic/Faroe',
			'Atlantic/Jan_Mayen',
			'Atlantic/Madeira',
			'Atlantic/Reykjavik',
			'Atlantic/South_Georgia',
			'Atlantic/St_Helena',
			'Atlantic/Stanley',
			'Australia/ACT',
			'Australia/Adelaide',
			'Australia/Brisbane',
			'Australia/Broken_Hill',
			'Australia/Canberra',
			'Australia/Currie',
			'Australia/Darwin',
			'Australia/Eucla',
			'Australia/Hobart',
			'Australia/LHI',
			'Australia/Lindeman',
			'Australia/Lord_Howe',
			'Australia/Melbourne',
			'Australia/NSW',
			'Australia/North',
			'Australia/Perth',
			'Australia/Queensland',
			'Australia/South',
			'Australia/Sydney',
			'Australia/Tasmania',
			'Australia/Victoria',
			'Australia/West',
			'Australia/Yancowinna',
			'Brazil/Acre',
			'Brazil/DeNoronha',
			'Brazil/East',
			'Brazil/West',
			'CET',
			'CST6CDT',
			'Canada/Atlantic',
			'Canada/Central',
			'Canada/Eastern',
			'Canada/Mountain',
			'Canada/Newfoundland',
			'Canada/Pacific',
			'Canada/Saskatchewan',
			'Canada/Yukon',
			'Chile/Continental',
			'Chile/EasterIsland',
			'Cuba',
			'EET',
			'EST',
			'EST5EDT',
			'Egypt',
			'Eire',
			'Etc/GMT',
			'Etc/GMT+0',
			'Etc/GMT+1',
			'Etc/GMT+10',
			'Etc/GMT+11',
			'Etc/GMT+12',
			'Etc/GMT+2',
			'Etc/GMT+3',
			'Etc/GMT+4',
			'Etc/GMT+5',
			'Etc/GMT+6',
			'Etc/GMT+7',
			'Etc/GMT+8',
			'Etc/GMT+9',
			'Etc/GMT-0',
			'Etc/GMT-1',
			'Etc/GMT-10',
			'Etc/GMT-11',
			'Etc/GMT-12',
			'Etc/GMT-13',
			'Etc/GMT-14',
			'Etc/GMT-2',
			'Etc/GMT-3',
			'Etc/GMT-4',
			'Etc/GMT-5',
			'Etc/GMT-6',
			'Etc/GMT-7',
			'Etc/GMT-8',
			'Etc/GMT-9',
			'Etc/GMT0',
			'Etc/Greenwich',
			'Etc/UCT',
			'Etc/UTC',
			'Etc/Universal',
			'Etc/Zulu',
			'Europe/Amsterdam',
			'Europe/Andorra',
			'Europe/Astrakhan',
			'Europe/Athens',
			'Europe/Belfast',
			'Europe/Belgrade',
			'Europe/Berlin',
			'Europe/Bratislava',
			'Europe/Brussels',
			'Europe/Bucharest',
			'Europe/Budapest',
			'Europe/Busingen',
			'Europe/Chisinau',
			'Europe/Copenhagen',
			'Europe/Dublin',
			'Europe/Gibraltar',
			'Europe/Guernsey',
			'Europe/Helsinki',
			'Europe/Isle_of_Man',
			'Europe/Istanbul',
			'Europe/Jersey',
			'Europe/Kaliningrad',
			'Europe/Kiev',
			'Europe/Kirov',
			'Europe/Kyiv',
			'Europe/Lisbon',
			'Europe/Ljubljana',
			'Europe/London',
			'Europe/Luxembourg',
			'Europe/Madrid',
			'Europe/Malta',
			'Europe/Mariehamn',
			'Europe/Minsk',
			'Europe/Monaco',
			'Europe/Moscow',
			'Europe/Nicosia',
			'Europe/Oslo',
			'Europe/Paris',
			'Europe/Podgorica',
			'Europe/Prague',
			'Europe/Riga',
			'Europe/Rome',
			'Europe/Samara',
			'Europe/San_Marino',
			'Europe/Sarajevo',
			'Europe/Saratov',
			'Europe/Simferopol',
			'Europe/Skopje',
			'Europe/Sofia',
			'Europe/Stockholm',
			'Europe/Tallinn',
			'Europe/Tirane',
			'Europe/Tiraspol',
			'Europe/Ulyanovsk',
			'Europe/Uzhgorod',
			'Europe/Vaduz',
			'Europe/Vatican',
			'Europe/Vienna',
			'Europe/Vilnius',
			'Europe/Volgograd',
			'Europe/Warsaw',
			'Europe/Zagreb',
			'Europe/Zaporozhye',
			'Europe/Zurich',
			'GB',
			'GB-Eire',
			'GMT',
			'GMT+0',
			'GMT-0',
			'GMT0',
			'Greenwich',
			'HST',
			'Hongkong',
			'Iceland',
			'Indian/Antananarivo',
			'Indian/Chagos',
			'Indian/Christmas',
			'Indian/Cocos',
			'Indian/Comoro',
			'Indian/Kerguelen',
			'Indian/Mahe',
			'Indian/Maldives',
			'Indian/Mauritius',
			'Indian/Mayotte',
			'Indian/Reunion',
			'Iran',
			'Israel',
			'Jamaica',
			'Japan',
			'Kwajalein',
			'Libya',
			'MET',
			'MST',
			'MST7MDT',
			'Mexico/BajaNorte',
			'Mexico/BajaSur',
			'Mexico/General',
			'NZ',
			'NZ-CHAT',
			'Navajo',
			'PRC',
			'PST8PDT',
			'Pacific/Apia',
			'Pacific/Auckland',
			'Pacific/Bougainville',
			'Pacific/Chatham',
			'Pacific/Chuuk',
			'Pacific/Easter',
			'Pacific/Efate',
			'Pacific/Enderbury',
			'Pacific/Fakaofo',
			'Pacific/Fiji',
			'Pacific/Funafuti',
			'Pacific/Galapagos',
			'Pacific/Gambier',
			'Pacific/Guadalcanal',
			'Pacific/Guam',
			'Pacific/Honolulu',
			'Pacific/Johnston',
			'Pacific/Kanton',
			'Pacific/Kiritimati',
			'Pacific/Kosrae',
			'Pacific/Kwajalein',
			'Pacific/Majuro',
			'Pacific/Marquesas',
			'Pacific/Midway',
			'Pacific/Nauru',
			'Pacific/Niue',
			'Pacific/Norfolk',
			'Pacific/Noumea',
			'Pacific/Pago_Pago',
			'Pacific/Palau',
			'Pacific/Pitcairn',
			'Pacific/Pohnpei',
			'Pacific/Ponape',
			'Pacific/Port_Moresby',
			'Pacific/Rarotonga',
			'Pacific/Saipan',
			'Pacific/Samoa',
			'Pacific/Tahiti',
			'Pacific/Tarawa',
			'Pacific/Tongatapu',
			'Pacific/Truk',
			'Pacific/Wake',
			'Pacific/Wallis',
			'Pacific/Yap',
			'Poland',
			'Portugal',
			'ROC',
			'ROK',
			'Singapore',
			'Turkey',
			'UCT',
			'US/Alaska',
			'US/Aleutian',
			'US/Arizona',
			'US/Central',
			'US/East-Indiana',
			'US/Eastern',
			'US/Hawaii',
			'US/Indiana-Starke',
			'US/Michigan',
			'US/Mountain',
			'US/Pacific',
			'US/Samoa',
			'UTC',
			'Universal',
			'W-SU',
			'WET',
			'Zulu',
		];
		this.defaultOptions = {
			year: 'numeric', // options -> "2-digit" | "numeric"
			month: '2-digit', // options -> "short" | "2-digit" | "numeric" | "long" | "narrow"
			day: '2-digit', // options -> "short" | "2-digit" | "numeric" | "long" | "narrow"
			hour: '2-digit', // options -> "2-digit" | "numeric"
			minute: '2-digit', // options -> "2-digit" | "numeric"
			second: '2-digit', // options -> "2-digit" | "numeric"
			hour12: false, // options -> true | false
			timeZoneName: 'short', // options -> "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric"
		};
	}

	/**
	 * @description function through get all timezone list
	 * @returns timezones[]
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public allTimezones(): string[] {
		return this.timezones;
	}

	/**
	 * @description formatter
	 * @param timeZone
	 * @param options
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	private formatter(timeZone: string, options: Intl.DateTimeFormatOptions = {}): Intl.DateTimeFormat {
		return new Intl.DateTimeFormat('en-US', { ...options, timeZone });
	}

	/**
	 * @description format date and time
	 * @param dateTime
	 * @param dayOrYearFirst
	 * @param dashOrslash
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	private formatDateTime(
		dateTime: Intl.DateTimeFormatOptions,
		dayOrYearFirst = false,
		dashOrslash = false
	): Record<string, string> {
		const separator = dashOrslash ? '-' : '/';
		const time = `${dateTime.hour}:${dateTime.minute}:${dateTime.second}`;
		if (dayOrYearFirst) {
			return { date: `${dateTime.year}${separator}${dateTime.month}${separator}${dateTime.day}`, time };
		} else {
			return { date: `${dateTime.day}${separator}${dateTime.month}${separator}${dateTime.year}`, time };
		}
	}

	/**
	 * @description get current date and time
	 * @param timeZone
	 * @param options
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	private getCurrentDateAndTime(timeZone: string, options: Intl.DateTimeFormatOptions): Record<string, string> {
		return this.formatter(timeZone, options)
			.formatToParts(new Date())
			.reduce((acc: Record<string, string>, part) => {
				acc[part.type as keyof Intl.DateTimeFormatPartTypesRegistry] = part.value;
				return acc;
			}, {});
	}

	/**
	 * @description seprated current date and time by timezone
	 * @param timeZone
	 * @param options
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public sepratedCurrentDateAndTimeByTimeZone(
		timeZone = 'Asia/Calcutta',
		options = this.defaultOptions
	): Record<string, string> {
		const dateAndTime = this.formatter(timeZone, options).format(new Date());
		return { date_and_time: dateAndTime, ...this.getCurrentDateAndTime(timeZone, options) };
	}

	/**
	 * @description seprated current date and time of all timezone
	 * @param options
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public sepratedCurrentDateAndTimeOfAllTimeZone(
		options = this.defaultOptions
	): Record<string, Record<string, string>> {
		const allTimeZones: Record<string, Record<string, string>> = {};
		this.timezones.forEach(timezone => {
			allTimeZones[timezone] = this.sepratedCurrentDateAndTimeByTimeZone(timezone, options);
		});
		return allTimeZones;
	}

	/**
	 * @description current date and time by timezone
	 * @param timeZone
	 * @param options
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public currentDateAndTimeByTimeZone(
		timeZone = 'Asia/Calcutta',
		options = this.defaultOptions
	): Record<string, string> {
		const dateAndTime: string = this.formatter(timeZone, options).format(new Date());
		const currentDateAndTime = this.sepratedCurrentDateAndTimeByTimeZone(timeZone, options);
		return { date_and_time: dateAndTime, ...this.formatDateTime(currentDateAndTime) };
	}

	/**
	 * @description current date and time of all timezone
	 * @param options
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public currentDateAndTimeOfAllTimeZone(options = this.defaultOptions): Record<string, Record<string, string>> {
		const allTimeZones: Record<string, Record<string, string>> = {};
		this.timezones.forEach(timezone => {
			allTimeZones[timezone] = this.currentDateAndTimeByTimeZone(timezone, options);
		});
		return allTimeZones;
	}

	/**
	 * @description time since
	 * @param date
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public timeSince(date: { getTime: () => number }): string {
		const t = Math.abs(date.getTime() - Date.now());
		const seconds = Math.floor(t / 1000);
		let interval = seconds / 31536000;

		if (interval > 1) {
			return `${Math.floor(interval)} years`;
		}
		interval = seconds / 2592000;
		if (interval > 1) {
			return `${Math.floor(interval)} months`;
		}
		interval = seconds / 86400;
		if (interval > 1) {
			return `${Math.floor(interval)} days`;
		}
		interval = seconds / 3600;
		if (interval > 1) {
			return `${Math.floor(interval)} hours`;
		}
		interval = seconds / 60;
		if (interval > 1) {
			return `${Math.floor(interval)} minutes`;
		}
		return `${Math.floor(seconds)} seconds`;
	}

	/**
	 * @description get expiration date
	 * @param expired
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public getExpirationDate(expired: number): string {
		const expirationTime = new Date(expired * 1000).getTime();
		const nowTime = Date.now();
		if (nowTime > expirationTime) {
			return 'Expired';
		}
		const differenceTimes = expirationTime - nowTime;
		const differenceDays = differenceTimes / (1000 * 3600 * 24);

		if (Math.floor(differenceDays) > 0) {
			return `${Math.round(differenceDays)} days`;
		}

		const differenceHours = differenceTimes / (1000 * 3600);
		if (Math.floor(differenceHours) > 0) {
			return `about ${Math.round(differenceHours)} hours`;
		}

		const differenceMinutes = differenceTimes / (1000 * 60);
		return `about ${Math.round(differenceMinutes) !== 0 || 1} minutes`;
	}

	/**
	 * @description format date and time
	 * @param dateInput
	 * @param dashOrslash
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public formatDateAndTime(dateInput: Date, dashOrslash = false): Record<string, string> {
		const pad2 = (n: number): string | number => (n < 10 ? `0${n}` : n);
		const separator = dashOrslash ? '-' : '/';

		const date: Date = new Date(dateInput);
		return {
			date: `${date.getFullYear().toString()}${separator}${pad2(date.getMonth() + 1)}${separator}${pad2(
				date.getDate()
			)}`,
			time: `${pad2(date.getHours())}:${pad2(date.getMinutes())}:${pad2(date.getSeconds())}`,
		};
	}

	/**
	 * @description function through get date format
	 * @param date
	 * @param dateStyle [@default -> 'full']
	 * @param locales [@default -> 'en-in']
	 * @returns string
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 * */
	public dateFormat(
		date: Date,
		dateStyle: 'full' | 'long' | 'medium' | 'short' = 'full',
		locales: string = 'en-in'
	): string {
		const f = new Intl.DateTimeFormat(locales, { dateStyle });
		return f.format(date);
	}

	/**
	 * @description get date and time through GMT ISO UTC
	 * @param date
	 * @returns
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public getDateAndTimeInGmtIsoUtc(date: Date): Record<string, string> {
		const _date = new Date(date);
		const GMT = _date.toUTCString();
		const ISO = _date.toISOString();
		const UTC = ISO.replace('T', ' ').replace(/\..*$/, ' UTC');
		return { GMT, ISO, UTC };
	}
}
