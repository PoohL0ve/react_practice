
function List() {
    const leagues = [
        {id: 1, name: "Premier League", country: "England"},
        {id: 2, name: "Ligue 1", country: "France"},
        {id: 3, name: "La Liga", country: "Spain"},
        {id: 4, name: "Bundesliga", country: "Germany"},
    ];

    // sort in ascending order based on name of the league
    leagues.sort((a, b) => a.name.localeCompare(b.name));
    const listLeague = leagues.map(league => <li key={league.id}>
        {league.name}: {league.country}
    </li>);

    return (
        <ul>{listLeague}</ul>
    );
}

export default List