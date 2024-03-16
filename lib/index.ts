export function NameToInt(name: string): number {
	return (
		name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) %
		Responses.length
	);
}

export function GetResponse(name: string): string {
	return Responses[NameToInt(name)];
}

export const Responses: string[] = [
	'Yes',
	'No',
	'Maybe',
	"It's complicated",
	'*whispers* Is that a human thing',
	'Which are YOU?',
	'*gets out flowcharts*',
	'42',
	"I'm a proletariat",
	'Gender is a lie',
	'I have no gender, only rage',
	'Only on prime numbered days',
	'*pterodactyl noises*',
	'*finger guns*',
	'I am Groot',
	'I am a Jedi',
	"I'm [insert Quidditch position]",
	"I'm a mess",
	"I'm a trainwreck, and trainwrecks don't have gender, only pain",
	'I transcend gender',
	'Gender transcends me',
	"I'm attack helicopter",
	'Yes, but only when the moon is full',
	'Maybe, but only if you ask nicely',
	'*death stare*',
	'*screams*',
	'*screams in binary*',
	'*screams in hexadecimal*',
	'*screams in Klingon*',
	'*screams in Dothraki*',
	'*screams in Simlish*',
	'*screams in Morse code*',
	'*screams in Wingdings*',
	'*screams in emoji*',
	'*screams in Elvish*',
	'Chicken butt',
	'Only on the third Tuesday of the month',
	'Only when the stars align',
	"Yesn't",
	'Tralse',
	'No, but I have a coupon for that',
	'No, but I can refer you to someone',
	'What is this strange thing you speak of'
];
