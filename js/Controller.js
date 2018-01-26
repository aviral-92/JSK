// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function ($scope) {

    //$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('contactController', function ($scope) {

    //$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('ariesController', function ($scope) {

    $scope.image = 'images/Aries.png';
    $scope.alt = 'Aries';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Aries';
    $scope.date = '(March 21 - April 20)';
    $scope.personality = 'Aries is the first sign in the Zodiac, ruled by planet Mars. The symbol of Aries is The Ram. ' +
        'This makes them adventurous, ambitious, impulsive, enthusiastic and full of energy. ' +
        'The Arian is a pioneer, both in thought and action, very open to new ideas and a lover of freedom. ' +
        'They welcome challenges and will not be diverted from their purpose except by their own impatience, ' +
        'which will surface if they dont get quick results.';
    $scope.loveTrait = 'Aries is a masculine sign. They love to lead. So, in a relationship. ' +
        'Aries is a motivator and wants to be the controller. Incurable romantics at heart, ' +
        'they will profess undying love for their beloved - a promise they are most likely to keep.';
    $scope.compatibilitys = ["Gemini", "Leo", "Sagittarius", "Aquarius"];
    $scope.matches = ["Leo"];

});

scotchApp.controller('taurusController', function ($scope) {

    $scope.image = 'images/Tauruas.png';
    $scope.alt = 'Taurus';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Taurus';
    $scope.date = '(April 21 - May 21)';
    $scope.personality = 'Taurus the second sign in the Zodiac symbolizes The Bull.' +
        ' They are most practical and reliable members of the Zodiac. They happily plod along to the finish line and reap rewards. ' +
        'They prefer to take each day as it comes and work towards their ultimate goal. ' +
        'Their strength is in their stability loyalty and dogged determination. They want to get the job done and they will.';
    $scope.loveTrait = 'Taurus is sentimental in both love and romance. ' +
        'They romance once and that is unlikely to die even when they settle down to the routines of married life. ' +
        'They enjoy spending time with loved ones and are especially drawn towards children.';
    $scope.compatibilitys = ["Cancer", "Virgo", "Libra", "Scorpio"];
    $scope.matches = ["Cancer"];
});

scotchApp.controller('geminiController', function ($scope) {

    $scope.image = 'images/Gemini.png';
    $scope.alt = 'Gemini';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Gemini';
    $scope.date = '(May 22 - June 21)';
    $scope.personality = 'Gemini is the third sign in the Zodiac, and its ruling planet is Mercury. Gemini, the sign of The Twins, is dual natured, elusive, complex and contradictory. To them, life is a game, which must always be full of fresh moves and continuous entertainment, free of labour and routine. Changing horses in the middle of the stream is another small quirk in the Gemini personality, which makes decision making, and sticking to a decision, particularly hard for them. They love to talk, almost endlessly.';
    $scope.loveTrait = 'Gemini makes a terrific first impression. They can literally sweep a person off his or her feet. Marriage is different from romance and is something that they must learn, since they may lose interest in marriage.';
    $scope.compatibilitys = ["Aquarius", "Fellow Gemini", "Libra", "Aries"];
    $scope.matches = ["Fellow Gemini"];
});

scotchApp.controller('cancerController', function ($scope) {

    $scope.image = 'images/Cancer.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});


scotchApp.controller('leoController', function ($scope) {

    $scope.image = 'images/Cancer.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});

scotchApp.controller('virgoController', function ($scope) {

    $scope.image = 'images/Virgo.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});
scotchApp.controller('libraController', function ($scope) {

    $scope.image = 'images/Libra.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});
scotchApp.controller('scorpioController', function ($scope) {

    $scope.image = 'images/Scorpio.png';
    $scope.alt = 'Scorpio';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Scorpio';
    $scope.date = '(October 24 - November 22)';
    $scope.personality = 'Scorpio is the eighth sign of the Zodiac. The symbol of Scorpio is The Scorpion. Its ruling planet is Mars. A Scorpio is intense, dominating, ruthless, energetic, passionate and committed. Scorpios lead the battle of life with their keen intellect and admirable qualities of patience and creativity. They live life on their own terms and are in ultimate control of their destiny.';
    $scope.loveTrait = 'Scorpio can be an ideal lover, but not always an ideal partner, because of their egoistic nature. They enjoy the domestic comforts and are willing to sacrifice in love. They have an extraordinary way to express their feelings for others.';
    $scope.compatibilitys = ["Taurus", "Cancer", "Virgo", "Capricorn"];
    $scope.matches = ["Capricorn"];
});
scotchApp.controller('sagittariusController', function ($scope) {

    $scope.image = 'images/Sagittarius.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});
scotchApp.controller('capricornController', function ($scope) {

    $scope.image = 'images/Cancer.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});

scotchApp.controller('aquariusController', function ($scope) {

    $scope.image = 'images/Cancer.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});

scotchApp.controller('piscesController', function ($scope) {

    $scope.image = 'images/Cancer.png';
    $scope.alt = 'Cancer';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Cancer';
    $scope.date = '(June 22 - July 22)';
    $scope.personality = 'Cancer is the fourth sign in the Zodiac, and its ruling planet is the Moon. The name Cancer is derived from the Latin word, meaning The Crab.They love their home - their roots. Belonging to the most empathetic zodiac sign, Cancerians are often overtly sensitive. They take great pleasure in the comforts of home and family and are at their best when all is peaceful at this front. In one word, a Cancerian is known to be Jack of all Trades.';
    $scope.loveTrait = 'Cancerians romance those who are quite opposite to them in nature. They are strongly attracted to people who are confident, strong and successful. Although they fall in love all the time, their introvert nature and uneasiness in disclosing their true feelings makes many of these affairs one-sided. A Cancerian is a good lover if not a bold one. Their protective instinct can make the other person feel loved and cared for.';
    $scope.compatibilitys = ["Taurus", "Virgo", "Scorpio", "Pisces"];
    $scope.matches = ["Taurus"];
});