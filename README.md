# express-receive-file
express http server for receiving file from curl

## Scenario
I want to upload file with cURL HTTP POST method back to my local computer.

## Steps
1. `git clone https://github.com/JaosnHsieh/express-receive-file.git`
2. `cd express-receive-file`
3. `npm install`
4. `npm start`
5. `ngrok http 8080`
6. copy the https url provived by ngrok such as `https://f2103620.ngrok.io`
7. copy the file path such as `/Users/jasonhsieh/side/express-receive-file/app.js`
8. replace the ngrok url and file path to this cURL command `curl https://f2103620.ngrok.io/ -F myfile=@/Users/jasonhsieh/side/express-receive-file/app.js`
9. if you uploaded successfully, it will response `You have uploaded the file` otherwise it response `No File`