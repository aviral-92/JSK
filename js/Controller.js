// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {

    // create a message to display in our view
    //$scope.message = 'Everyone come and see how good I look!';
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

    $scope.image = 'images/Leo.png';
    $scope.alt = 'Leo';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Leo';
    $scope.date = '(July 23 - August 23)';
    $scope.personality = 'Leo is the fifth sign in the zodiac, which symbolizes The Lion, and is considered the most powerful and dynamic one. Its ruling planet is the Sun. The people belonging to this sign are ambitious, courageous, dominant, strong willed, positive, independent, and self confident. There is no such word as doubt in their vocabulary, and they are self controlled.';
    $scope.loveTrait = 'Leo is the natural sign of love and romance. Leo is an ideal lover and is generous, appealing and glamorous. In marriage, a Leo is possessive and loyal. They are warm, considerate and lovers with style, wooing the beloved in the most elegant manner.';
    $scope.compatibilitys = ["Aries", "Gemini", "Libra", "Sagittarius"];
    $scope.matches = ["Aries"];
});

scotchApp.controller('virgoController', function ($scope) {

    $scope.image = 'images/Virgo.png';
    $scope.alt = 'Virgo';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Virgo';
    $scope.date = '(August 24 - September 22)';
    $scope.personality = 'Virgo is the sixth sign of the Zodiac. The symbol of Virgo is The Virgin. Virgos are practical, cool headed and thoroughly meticulous in their work, never unnecessarily swayed by emotions. Often quiet and reserved, tidy and perfect, they seldom shy away from taking on challenges and prove their mettle with hard work and a quiet determination. It is an Earth sign, so it makes them practical and reliable.';
    $scope.loveTrait = 'Virgos are devoted, loyal and steady. However, they lack the charm and glamour of being a great lover. Marriage would be stable, since Virgo has a traditional and conventional attitude towards it. They prefer comfort and security in a relationship.';
    $scope.compatibilitys = ["Taurus", "Cancer", "Scorpio", "Capricorn"];
    $scope.matches = ["Capricorn"];
});
scotchApp.controller('libraController', function ($scope) {

    $scope.image = 'images/Libra.png';
    $scope.alt = 'Libra';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Libra';
    $scope.date = '(September 23 - October 23)';
    $scope.personality = 'Libra is the seventh sign of the Zodiac. Its ruling Planet is Venus. The word Libra symbolizes The Scale or The Balance. A typical Libran is artistic and refined. Librans are keen strategists, organizers of groups and get things done with great poise. Librans are among the most civilized of the twelve zodiacal characters and are often good looking.';
    $scope.loveTrait = 'Librans are considered to be great lovers. It is observed that Librans are made for Love, but sometimes it becomes difficult for them to handle matrimonial responsibilities. Their great attachment and balance in love helps them keep ever-lasting relationships. No one can question his or her loyalty and devotion. They can make a good friend, but not necessarily an ideal one.';
    $scope.compatibilitys = ["Taurus", "Gemini", "Leo", "Aquarius"];
    $scope.matches = ["Gemini"];
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
    $scope.alt = 'Sagittarius';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Sagittarius';
    $scope.date = '(November 23 - December 21)';
    $scope.personality = 'Sagittarius is the ninth sign in the Zodiac, ruled by the planet Jupiter. The symbol of Sagittarius is The Archer. This is the sign of good fortune, intuitions, and honesty, true speaking, ambitious and idealism. Sagittarius are truth-seekers, and the best way for them to do it is to travel, talk to others and get answers to the internal quest. Knowledge holds the key to re fuelling their broad-minded approach towards life. Sagittarians are fun loving, carefree individuals who live life to the fullest.';
    $scope.loveTrait = 'Sagittarians are sincere towards their romantic life. As lovers, they are glamorous, warm, friendly, open and charming.';
    $scope.compatibilitys = ["Aries", "Leo", "Aquarius", "Pisces"];
    $scope.matches = ["Aries"];
});
scotchApp.controller('capricornController', function ($scope) {

    $scope.image = 'images/Capricorn.png';
    $scope.alt = 'Capricorn';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Capricorn';
    $scope.date = '(December 22 - January 20)';
    $scope.personality = 'This is the tenth sign of the Zodiac. Its ruling planet is Saturn. The symbol of Capricorn is The Goat. A typical Capricorn is conscientious, hardworking, ambitious, cautious, tolerant, patient, disciplined, calculated and confident. It becomes easy for them to make money in life. They believe in doing things rather than thinking about them again and again.';
    $scope.loveTrait = 'Capricorns are not considered good lovers. They do not express their emotions easily. After marriage, the comforts of home, security, children, and position - they accomplish all these good things of life.';
    $scope.compatibilitys = ["Virgo", "Scorpio", "Capricorn", "Pisces"];
    $scope.matches = ["Scorpio"];
});

scotchApp.controller('aquariusController', function ($scope) {

    $scope.image = 'images/Aquarius.png';
    $scope.alt = 'Aquarius';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Aquarius';
    $scope.date = '(January 21 - February 18)';
    $scope.personality = 'Aquarius is the eleventh sign of the Zodiac. Its ruling planet is Saturn. The symbol of Aquarius is The Water-Bearer. Aquarians in general come in two different types shy, and lively. Both are strong willed and honest. They plan their life in a systematic manner. They are truly unique, independent, or even eccentric. They are nearly always intelligent, concise, clear and logical.';
    $scope.loveTrait = 'Aquarian love their private space and intrusions are not very welcome. But ones they fall in love, they like to make everything perfect for their partner. Their approach to love and marriage is logical and intellectual, therefore loving with mind, as well as eyes. They are home loving and with a liking for cooking and trying out various recipes, they often surprise their partners by taking these up as pastime pleasures.';
    $scope.compatibilitys = ["Aries", "Gemini", "Libra", "Sagittarius"];
    $scope.matches = ["Libra"];
});

scotchApp.controller('piscesController', function ($scope) {

    $scope.image = 'images/Pisces.png';
    $scope.alt = 'Pisces';
    $scope.height = '180';
    $scope.width = '350';
    $scope.allAbout = 'Know All About Pisces';
    $scope.date = '(February 19 - March 20)';
    $scope.personality = 'Piscean is the twelfth sign of the Zodiac. Its ruling planet is Jupiter. The symbol of Pisces is The Fish. They are artistic by nature and admire beauty. Generally they are not so practical by nature, but love to be loyal, friendly, kind and generous. Pisceans are sympathetic, soft hearted, often moody and some times unpredictable. It is difficult for them to think and analyse.';
    $scope.loveTrait = 'Pisceans have a lot of love affairs. The heart of a Piscean breaks and mends time and time again. They would have a keen desire to love and be loved. Piscean is not a devoted lover. The possibility of them ending up with the wrong person is really high.';
    $scope.compatibilitys = ["Cancer", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    $scope.matches = ["Aquarius"];
});
