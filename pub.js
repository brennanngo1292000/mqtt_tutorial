var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', ()=>{
   console.log('Client is connected');
})
setInterval(()=>{
    client.publish('stat/92/air_purifier/power',JSON.stringify({'power':1}));
},10000);
setInterval(()=>{
    client.publish('stat/92/air_purifier/speed',JSON.stringify({'speed':3}));
},10000);
setInterval(()=>{
    client.publish('tele/92/air_purifier/LWT', JSON.stringify({"LWT": 'Online'}))
},10000)
setInterval(()=>{
    client.publish('tele/92/air_purifier/temperature', JSON.stringify({temperature: 30}))
},10000)
setInterval(()=>{
    client.publish('tele/92/air_purifier/pm2_5', JSON.stringify({pm25: 30, quality: 'Good'}))
},10000)
setInterval(()=>{
    client.publish('stat/92/air_purifier/mode', JSON.stringify({mode: 1}))
},10000)