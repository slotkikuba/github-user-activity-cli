require('dotenv').config({ path: 'env.env' });

const username = process.argv[2];

async function pobierzUzytkownika(username) {
    const zapytanie = `https://api.github.com/users/${username}/events`;
    const events = [];
    let commitCount = 0;

    const response = await fetch(zapytanie, {
        headers: {
            'User-Agent': 'UserActivityCLI',
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
    });

    const data = await response.json();
    for (const element of data) {
        const newEvent = [element.type, element.repo.name, element.created_at];
        const repoName = element.repo.name;


        events.push(newEvent);

        switch (element.type) {
            case "PushEvent":
                events.forEach(element => {
                    if(element.includes("PushEvent")) {
                        commitCount += 1;
                    }
                });

                console.log(`- Pushed ${commitCount} commit(s) to ${repoName}`);
                break;
        
            case "PublicEvent":

                console.log(`- Made ${repoName} public`);
                break;

            case "CreateEvent":
                console.log(`- Created a new repository or branch in ${repoName}`);
                break;
            
            case "WatchEvent":
                console.log(`- Starred ${repoName}`);
                break;

            case "IssuesEvent":
                console.log(`- Opened a new issue in ${repoName}`);
                break;
        }
    }


}

pobierzUzytkownika(username);