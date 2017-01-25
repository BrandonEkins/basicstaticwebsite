

# basicstaticwebsite
Basic Static Web Hosting on Node.js

Download the repository then run the commands: 

 - npm install
 - npm start

The server will be running on localhost:3000

The server will now serve any files in the public directory

example: localhost:3000/home.html


to run it persistently:

nohup node index.js >& output &

to stop:

killall -ir 'node'


if you want to run more then one instance go into the index.js and change the port number.
