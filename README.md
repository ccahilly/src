# How to contribute

1) Fork the repository `pythonicode/src`
2) Make any changes to the code, **changes to the website content has been simplified by creating JSON files in the `/public` folder that can be modified**
3) Create a pull request

# How to deploy
To deploy the project to `running.stanford.edu` you must have access to the AFS group at Stanford.

1) Make sure Node JS and NPM are installed https://nodejs.org/en
2) Clone and enter the repository and run `npm run build` in the terminal
3) Copy the `/out` folder into `/groups/runningclub` in AFS and rename the folder to `/WWW`
