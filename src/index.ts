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
	private readonly defaultOptions: Intl.DateTimeFormatOptions;

	constructor() {
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
	 * @description timezone through get your timezone name
	 * @returns {string} timezone name
	 *
	 * @shippusharma `author`
	 * @see {@link https://github.com/shippusharma ***Github***}
	 */
	public get timezone(): string {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
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
		timeZone = this.timezone,
		options = this.defaultOptions
	): Record<string, string> {
		const dateAndTime = this.formatter(timeZone, options).format(new Date());
		return { date_and_time: dateAndTime, ...this.getCurrentDateAndTime(timeZone, options) };
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
	public currentDateAndTimeByTimeZone(timeZone = this.timezone, options = this.defaultOptions): Record<string, string> {
		const dateAndTime: string = this.formatter(timeZone, options).format(new Date());
		const currentDateAndTime = this.sepratedCurrentDateAndTimeByTimeZone(timeZone, options);
		return { date_and_time: dateAndTime, ...this.formatDateTime(currentDateAndTime) };
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
	public getDateAndTimeInGmtIsoUtc(date: Date = new Date()): Record<string, string> {
		const _date = new Date(date);
		const GMT = _date.toUTCString();
		const ISO = _date.toISOString();
		const UTC = ISO.replace('T', ' ').replace(/\..*$/, ' UTC');
		return { GMT, ISO, UTC };
	}

	/**
	 * @description Format date to ISO string (UTC time)
	 * @param date
	 * @returns string
	 */
	public getUTCTime(date: Date = new Date()): string {
		return date.toISOString().replace('T', ' ').replace(/\..*$/, ' UTC');
	}

	/**
	 * @description
	 * @param dates
	 * @returns date
	 */
	public minDate(...dates: number[]): Date {
		return new Date(Math.min(...dates));
	}

	/**
	 * @description
	 * @param dates
	 * @returns date
	 */
	public maxDate(...dates: number[]): Date {
		return new Date(Math.min(...dates));
	}

	/**
	 * @description Check if a string is an ISO formatted date
	 * @param val
	 * @returns
	 */
	isISOString = (val: string): boolean => {
		const d = new Date(val);
		return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
	};

	/**
	 * @description Pad a number to 2 digits
	 * @param n
	 * @returns
	 */
	private pad = (n: number): string => `${Math.floor(Math.abs(n))}`.padStart(2, '0');

	/**
	 * @description Get timezone offset in ISO format (+hh:mm or -hh:mm)
	 * @param date
	 * @returns
	 */
	getTimezoneOffset = (date: Date): string => {
		const tzOffset = -date.getTimezoneOffset();
		const diff = tzOffset >= 0 ? '+' : '-';
		return diff + this.pad(tzOffset / 60) + ':' + this.pad(tzOffset % 60);
	};

	/**
	 * @description
	 * @param date
	 * @returns
	 */
	toISOStringWithTimezone = (date: Date): string => {
		return (
			date.getFullYear() +
			'-' +
			this.pad(date.getMonth() + 1) +
			'-' +
			this.pad(date.getDate()) +
			'T' +
			this.pad(date.getHours()) +
			':' +
			this.pad(date.getMinutes()) +
			':' +
			this.pad(date.getSeconds()) +
			this.getTimezoneOffset(date)
		);
	};

	/**
	 * @description
	 * @param val
	 * @returns
	 */
	isISOStringWithTimezone = (val: string): boolean => {
		const d = new Date(val);
		return !Number.isNaN(d.valueOf()) && this.toISOStringWithTimezone(d) === val;
	};

	// Day of year
	dayOfYear = (date: Date): number => {
		return Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86_400_000);
	};

	// Week of year
	weekOfYear = (date: Date): number => {
		const startOfYear = new Date(date.getFullYear(), 0, 1);
		startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7));
		return Math.round((date.getTime() - startOfYear.getTime()) / 604_800_000);
	};

	// Month of year
	monthOfYear = (date: Date): number => date.getMonth() + 1;

	// Quarter of year
	quarterOfYear = (date: Date): number => Math.ceil((date.getMonth() + 1) / 3);

	// find the date of n days ago from today
	daysAgo = (n: number): Date => {
		const d = new Date();
		d.setDate(d.getDate() - Math.abs(n));
		return d;
	};

	// find the date of n days ago from today
	daysFromToday = (n: number): Date => {
		const d = new Date();
		d.setDate(d.getDate() + Math.abs(n));
		return d;
	};

	// Convert Date to a Unix timestamp
	dateToUnixTimestamp = (date: Date): number => Math.floor(date.getTime() / 1000);

	// Convert a Unix timestamp to Date
	unixTimestampToDate = (unixTimestamp: number): Date => new Date(unixTimestamp * 1000);
}
