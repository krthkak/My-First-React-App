// a list of todos, each todo object has a task and an id

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function MonthList() {
	return (
		<>
			here are the months in a year
			<ul>
				{months.map(
					(
						month,
						index
					) => (
						// here we are using the already generated id as the key.
						<li
							key={
								index
							}
						>
							{
								month
							}
						</li>
					)
				)}
			</ul>
		</>
	);
}

export { MonthList };
