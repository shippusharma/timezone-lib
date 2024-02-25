declare module 'timezone-lib' {
	export interface TimeZoneOptions {
		year?: '2-digit' | 'numeric';
		month?: 'short' | '2-digit' | 'numeric' | 'long' | 'narrow';
		day?: 'short' | '2-digit' | 'numeric' | 'long' | 'narrow';
		hour?: '2-digit' | 'numeric';
		minute?: '2-digit' | 'numeric';
		second?: '2-digit' | 'numeric';
		hour12: boolean;
		timeZoneName?: 'short' | 'long' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric';
	}

	export class TimeZone {
		constructor(defaultOptions: TimeZoneOptions);

		get timezone(): string;

		private formatter(timeZone: string, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat;

		private formatDateTime(
			dateTime: Intl.DateTimeFormatOptions,
			dayOrYearFirst?: boolean,
			dashOrslash?: boolean
		): Record<string, string>;

		private getCurrentDateAndTime(timeZone: string, options: Intl.DateTimeFormatOptions): Record<string, string>;

		sepratedCurrentDateAndTimeByTimeZone(timeZone?: string, options?: TimeZoneOptions): Record<string, string>;

		currentDateAndTimeByTimeZone(timeZone?: string, options?: TimeZoneOptions): Record<string, string>;

		timeSince(date: { getTime: () => number }): string;

		getExpirationDate(expired: number): string;

		formatDateAndTime(dateInput: Date, dashOrslash?: boolean): Record<string, string>;

		dateFormat(date: Date, dateStyle?: 'full' | 'long' | 'medium' | 'short', locales?: string): string;

		getDateAndTimeInGmtIsoUtc(date?: Date): Record<string, string>;

		getUTCTime(date?: Date): string;

		minDate(...dates: number[]): Date;

		maxDate(...dates: number[]): Date;

		isISOString: (val: string) => boolean;

		private pad: (n: number) => string;

		getTimezoneOffset: (date: Date) => string;

		toISOStringWithTimezone: (date: Date) => string;

		isISOStringWithTimezone: (val: string) => boolean;

		dayOfYear: (date: Date) => number;

		weekOfYear: (date: Date) => number;

		monthOfYear: (date: Date) => number;

		quarterOfYear: (date: Date) => number;

		daysAgo: (n: number) => Date;

		daysFromToday: (n: number) => Date;

		dateToUnixTimestamp: (date: Date) => number;

		unixTimestampToDate: (unixTimestamp: number) => Date;
	}

	const timezone: TimeZone;
	export default timezone;
}
