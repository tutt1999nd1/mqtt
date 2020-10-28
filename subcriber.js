var mqtt = require('mqtt')
var settings = {
    mqttServerUrl : "localhost",
    port : 1883,
    topic : "myTopicPub"
}
var client  = mqtt.connect('mqtt://' + settings.mqttServerUrl + ":" + settings.port);

client.on('connect', function () {
    client.subscribe(settings.topic)
    console.log("Subscribed topic " + settings.topic);
})

client.on('message', function (topic, message) {
    console.log(message.toString());
})