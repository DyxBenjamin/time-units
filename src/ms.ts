

export default function ms(ms: number) {
	return ms;
}

function toSeconds(ms: number) {
	return ms / 1000;
}

function toMinutes(ms: number) {
	return ms / 1000 / 60;
}

function toHours(ms: number) {
	return ms / 1000 / 60 / 60;
}

function toDays(ms: number) {
	return ms / 1000 / 60 / 60 / 24;
}

function toWeeks(ms: number) {
	return ms / 1000 / 60 / 60 / 24 / 7;
}

ms.toSeconds = toSeconds;
ms.toMinutes = toMinutes;
ms.toHours = toHours;
ms.toDays = toDays;
ms.toWeeks = toWeeks;
