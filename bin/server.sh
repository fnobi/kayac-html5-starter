host=0.0.0.0
port=61280
cd wordpress
wp server --host=$host --port=$port & ../node_modules/.bin/browser-sync start --proxy $host:$port --files "./**/*"
