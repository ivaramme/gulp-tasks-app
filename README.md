# gulp-tasks-app

Sample implementation of a project using the `gulp-task` docker image for projects using HTML and Javascript only.

# What's inside:

This project is composed of a very simplistic HTML page that loads one Javascript (JS) file named `all.js`. This file doesn't exist in the repo but is created by gulp by composing two small javascript files located inside the `/js` folder. 

Updating one of the JS files will trigger Gulp to recreate the final JS file automatically for you. When loading the page you'll see an alert box as well as when you click on the page's text. You can make changes to the JS files, reload and check it works.

# Expectations:

A `gulpfile.js` file exists and the Javascript files are all inside a folder named `/js`. All this can be changed in your `gulpfile.js` and will only require a quick restart of the container.

# Instructions:

- Inside your project's location, download the `docker-compose.yml` file from: https://raw.githubusercontent.com/ivaramme/gulp-tasks-docker/master/docker-compose.yml.
- Execute `docker compose up` and wait for the images to download.
- Once downloaded, the service should be up and running and will allow you to load the HTML page from the browser connecting to the container on port `3000`.
- Make changes to the javascript files inside the `/js` folder. The container should generate a new version automatically for you using the `gulp watch` task. Reload the browser to confirm changes were applied.
- When you make changes to the `gulpfile.js` to import or create new tasks, you'll need to restart the gulp container by using the following ccommand: `docker-compose restart myapp`

# How it works:

When the container is loaded, the default directory is mounted inside the container, making sure you (the developer) don't have to copy or ftp or commit your files. Your files (if the compose file was downloaded in the right folder) will be available to the container and to -in this case- Gulp that will make changes accordingly. 

Since the container runs `gulp` by default, any changes to the gulp configuration file will require a restart, a task that is simply done by invoking `docker compose restart myapp` as stated above. Whenever you make changes to your JS files or HTML files, Gulp will detect those changes and automatically create the changes. There's no need to restart then.

For this example, the Gulp tasks executed are `watch` and `connect`: 

- Watch enables detection of files in the file system. Whenever there is a change in any of the JS files, it will call the `concat` task to recreate the main javascript file loaded from the index page.

- Connect enables serving the static files from the container by loading  `localhost:3000` in this case for testing. 

