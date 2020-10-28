var mqtt = require('mqtt');
var settings = {
    mqttServerUrl : "localhost",
    port : 1883,
    topic : "myTopicPub"
}
var client  = mqtt.connect('mqtt://' + settings.mqttServerUrl + ":" + settings.port);
client.on('connect', function () {
    setInterval(function() {
        var message = Math.floor(Math.random() * (100 - 0) ) + 0;;

        client.publish(settings.topic, message+'');
        console.log('Sent ' + message + " to " + settings.topic);
    }, 1000);
});