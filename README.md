> #### **_`timezone-lib` library give you almost all county or region date and time, please check below for more._**

---

### ✔ How to Install

> using npm | yarn | pnpm command, you can install `timezone-lib` library.

```bash
npm install timezone-lib
```

```bash
yarn add timezone-lib
```

```bash
pnpm add timezone-lib
```

### 💢 How to Import

```javascript
# using ES6+ (module-js approach)
import { TimeZone } from "timezone-lib"

or

# using ES5 (common-js approach)
const { TimeZone } = require("timezone-lib")
```

---

> # ✨ **_A full-featured timezone aware date and time, or formatter for JavaScript._**

- **_`timezone-lib` is a library in pure JavaScript with no dependencies that provides timezone aware date and time formatting or more._**

- **_timezone formats dates with a full implementation of formats, by default all are set indian timezone._**

- **_timezone-lib offer fully secure and strict type safety._**

---

## 😎 Examples

```javascript
import { TimeZone } from 'timezone-lib';
const timezone = new TimeZone();
```

## `All Timezones List`

```js
const allTimezones = timezone.allTimezones();
console.log(allTimezones);

Output: [
  'Asia/Calcutta',
  'America/New_York',
  ...
]
```

## `Current Date And Time By TimeZone`

```js
const dateTimeInfo = timezone.currentDateAndTimeByTimeZone('Asia/Calcutta');
console.log(dateTimeInfo);

Output: {
  date_and_time: '23/12/2023, 03:30:00 PM',
  date: '23/12/2023',
  time: '03:30:00 PM'
}
```

## `Current Date And Time Of All TimeZone`

```js
const allDateTimeInfo = timezone.currentDateAndTimeOfAllTimeZone();
console.log(allDateTimeInfo);

Output: {
  'Asia/Calcutta': {
    date_and_time: '12/23/2023, 10:30:00 AM',
    date: '12/23/2023',
    time: '10:30:00 AM' },
    ...
}
```

## `Separated Current Date And Time By TimeZone`

```js
const dateTimeInfo = timezone.separatedCurrentDateAndTimeByTimeZone('Asia/Calcutta');
console.log(dateTimeInfo);

Output: {
  date_and_time: '12/23/2023, 10:30:00 AM',
  date: '12/23/2023',
  time: '10:30:00 AM'
}
```

## `Separated Current Date And Time Of All TimeZone`

```js
const allDateTimeInfo = timezone.separatedCurrentDateAndTimeOfAllTimeZone();
console.log(allDateTimeInfo);

Output: {
  'Asia/Calcutta': {
    date_and_time: '12/23/2023, 10:30:00 AM',
    date: '12/23/2023',
    time: '10:30:00 AM' },
    ...
}
```

## `Time Since`

```js
const elapsed = timezone.timeSince(new Date('2023-01-01T00:00:00'));
console.log(elapsed);

Output: 'about 11 months';
```

## `Get Expiration Date`

```js
const expirationInfo = timezone.getExpirationDate(1672531199000);
console.log(expirationInfo);

Output: 'about 1 day';
```

## `Format Date And Time`

```js
const formattedDateTime = timezone.formatDateAndTime(new Date(), true);
console.log(formattedDateTime);

Output: {
  date: '2023-12-23',
  time: '15:30:00'
}
```

## `Date Format`

```js
const formattedDate = timezone.dateFormat(new Date(), 'medium', 'fr-FR');
console.log(formattedDate);

Output: '23 déc. 2023';
```

## `Get Date And Time in GMT ISO UTC`

```js
const gmtIsoUtcInfo = timezone.getDateAndTimeInGmtIsoUtc(new Date());
console.log(gmtIsoUtcInfo);

Output: {
  GMT: 'Sat, 23 Dec 2023 15:30:00 GMT',
  ISO: '2023-12-23T15:30:00.000Z',
  UTC: '2023-12-23 15:30:00 UTC'
}
```

<br>

# ☯ License

> ## MIT License
