# GitHub User Activity CLI

CLI that displays recent GitHub activity for a selected user.

## Setup

1. Copy `env.example` to `env.env`.
2. Put your GitHub token only in the local `env.env` file:

   ```text
   GITHUB_TOKEN=your_token
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the CLI:

   ```bash
   node app.js octocat
   ```

`env.env` is ignored by Git and must never be committed or shared.

https://github.com/slotkikuba/github-user-activity-cli
