var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("message", (topic, message) => {
  switch (topic) {
    case 'stat/92/air_purifier/power':
      //do something
      console.log(message.payloadString);
      break;
    case 'stat/92/air_purifier/mode':
      //do something
      console.log(message.payloadString);
      break;
    case 'stat/92/air_purifier/speed':
      //do something
      console.log(message.payloadString);
      break;
    case 'tele/92/air_purifier/LWT':
      //do somthing
      console.log(message.payloadString);
      break;
    case 'tele/92/air_purifier/pm2_5':
      //do something
      console.log(message.payloadString);
      break;
    case 'tele/92/air_purifier/temperature':
      //do something
      console.log(message.payloadString);
      break;
  }
});

client.on("connect", () => {
  //power
  client.subscribe('stat/92/air_purifier/power');
  //mode
  client.subscribe('stat/92/air_purifier/mode');
  //speed
  client.subscribe('stat/92/air_purifier/speed');
  //status
  client.subscribe('tele/92/air_purifier/LWT');
  //AQI
  client.subscribe('tele/92/air_purifier/pm2_5');
  //temperature
  client.subscribe('tele/92/air_purifier/temperature');

});
