function doMagic8BallVoodoo() {
    var rand = ['davaguco:internet73',
    'adamboerema@gmail.com:acb7311988',
    'raziel.secur@gmail.com:z1x2q3c4',
    'amikaysbokays@aol.com:meow2000',
    'satch3l@gmail.com:sevamix',
    'brandonp.pwns@yahoo.com:phung11',
    'colovos.kevin@gmail.com:as506345',
    'jackedwardshey@hotmail.co.uk:horseey12',
    'halliemrizek@gmail.com:kaulitz2',
    'charlielewisnz@gmail.com:11churchill',
    'juldeleon19@gmail.com:angel555',
    'loco.qwer@gmail.com:Kalejdoskop1',
    'mnieckula@yahoo.com:graalfox87',
    'krishmuttu9@gmail.com:Krishnam9',
    'austincruz8@gmail.com:jarjarac8'];

    return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = (client, message, args) => {
  message.channel.send("**Generating...**");
    message.author.send(doMagic8BallVoodoo());
    message.author.send("Join to official discord https://discord.gg/VAwQKQG");

}
