const mongoose = require('mongoose');
const Player = require('./models/Player');

const players = [
    {
        name: 'Harry Maguire',
        dateOfBirth: new Date('05-03-1993'),
        about: `Jacob Harry Maguire (born 5 March 1993) is an English professional footballer who plays as a centre-back for Premier League club Manchester United and the English national team.

                Born in Sheffield, he came through the youth system at Sheffield United before graduating to the first team in 2011. He totalled 166 professional games for the Blades and was their Player of the Year three consecutive times, also featuring in the PFA Team of the Year for League One as many times. In 2014, he transferred to Hull City for £2.5 million, who loaned him to Wigan Athletic in 2015. He joined Leicester City in 2017 for an initial fee of £12 million. Two years later, he moved to Manchester United for a fee believed to be £80 million, a world-record fee for a defender.
    
                Maguire played one match for England under-21 in 2012. In October 2017, he made his senior debut, and he was chosen for the 2018 FIFA World Cup squad.`,
        number: 5,
        height: 194,
        nationality: 'English',
        favouriteQuote: `It's an amazing club. It's a club I've always watched and I always looked up to when I was younger.`,
        images: ['https://www.manutd.com/AssetPicker/images/0/0/12/76/806043/Player-Profiles-Square-HM1565107118416.jpg', 'https://www.manutd.com/AssetPicker/images/0/0/12/76/806042/Player-Profiles-HM1565107081842.png']
    },
    {
        name: 'Paul Pogba',
        dateOfBirth: new Date('1993-03-14'),
        about: `Paul Labile Pogba (French pronunciation: ​[pɔl pɔgba]; born 15 March 1993) is a French professional footballer who plays for Premier League club Manchester United and the French national team. He operates primarily as a central midfielder, but can also be deployed as an attacking midfielder, defensive midfielder, and deep-lying playmaker.[4]    Born in Lagny-sur-Marne, Pogba showed much promise as a youngster, flourishing as a member of local youth teams. He eventually joined the youth team of Ligue 1 side Le Havre, before a protracted transfer brought him to Manchester United in 2009. After beginning his senior career with Manchester United two years later, limited appearances persuaded him to depart to join Italian side Juventus on a free transfer in 2012, where he helped the club to four consecutive Serie A titles, as well as two Coppa Italia and two Supercoppa Italiana titles. During his time in Italy, Pogba further established himself as one of the most promising young players in the world, and received the Golden Boy award in 2013, followed by the Bravo Award in 2014. In 2016, Pogba was named to the 2015 UEFA Team of the Year, as well as the 2015 FIFA FIFPro World XI, after helping Juventus to the 2015 UEFA Champions League Final, their first in 12 years.        Pogba's performances at Juventus allowed him to return to Manchester United in 2016 for a then-world record transfer fee of €105 million (£89.3 million).[5] The fee paid for him remains the highest paid by an English club.[6] In his first season back, he won the League Cup and the Europa League.[7]        Internationally, he captained France to victory at the 2013 FIFA U-20 World Cup and took home the award for the Best Player for his performances during the tournament. He made his debut for the senior team a year later, and featured prominently at the 2014 FIFA World Cup, where he was awarded the Best Young Player Award for his performances. He later represented his nation at UEFA Euro 2016 on home soil, where he finished as a runner-up, before winning the 2018 FIFA World Cup after scoring in the final.`,
        number: 6,
        height: 191,
        nationality: 'France',
        favouriteQuote: `I want to be the midfielder who can do everything, and at the highest levels: shoot, dribble, score, defend.`,
        images: ['https://www.manutd.com/AssetPicker/images/0/0/12/30/794360/Player-Profiles-Square-Pogba1558456904650.jpg', 'https://www.manutd.com/AssetPicker/images/0/0/12/30/794312/Pogba1558456865777.png']
    },
    {
        name: 'Marcus Rashford',
        dateOfBirth: new Date('1997-10-30'),
        about: `Marcus Rashford (born 31 October 1997) is an English professional footballer who plays as a forward for Premier League club Manchester United and the England national team.    A Manchester United player from the age of seven, he scored two goals on both his first-team debut against Midtjylland in the UEFA Europa League in February 2016 and his Premier League debut against Arsenal three days later. He also scored in his first Manchester derby match, his first League Cup match and his first UEFA Champions League match.        Rashford scored on his England debut in May 2016, becoming the youngest English player to score in his first senior international match. He played at the UEFA Euro 2016 as the tournament's youngest player, and at the 2018 FIFA World Cup.`,
        number: 10,
        height: 180,
        nationality: 'England',
        favouriteQuote: `I have always been a United fan, so to be playing in the first team really is a dream come true.`,
        images: ['https://www.manutd.com/AssetPicker/images/0/0/12/30/794361/Player-Profiles-Square-Rashford1558453207029.jpg', 'https://www.manutd.com/AssetPicker/images/0/0/12/30/794313/Rashford1558453166217.png']
    },
    {
        name: 'Anthony Martial',
        dateOfBirth: new Date('1995-12-04'),
        about: `Anthony Jordan Martial (French pronunciation: ​[maʁsjal]; born 5 December 1995) is a French professional footballer who plays as a forward for Premier League club Manchester United and the France national team. He was the recipient of the 2015 Golden Boy Award for the best under-21 player in Europe.[4]    Playing youth football for Les Ulis, he began his professional career at Lyon, then transferred to AS Monaco in 2013 for a fee of €6 million. He was a member of Monaco's squad for two seasons, and signed for Manchester United in 2015 for an initial fee of £36 million which could potentially rise to £57.6 million.[5] This was the highest fee paid for a teenager in football history even before the potential increase. He scored in his first match for United, and was named the Premier League Player of the Month in his first month in English football.        A youth international for France from under-16 to under-21 level, Martial made his senior debut in 2015. He was named in their squad for UEFA Euro 2016.`,
        number: 9,
        height: 181,
        nationality: 'France',
        favouriteQuote: `I love Manchester United, I love the fans, they give me a lot of joy.`,
        images: ['https://www.manutd.com/AssetPicker/images/0/0/12/30/794322/Player-Profiles-Square-Martial1558011857228.jpg','https://www.manutd.com/AssetPicker/images/0/0/12/30/794298/Martial1558010700575.png']
    },
    {
        name: 'David de Gea',
        dateOfBirth: new Date('1990-11-06'),
        about: `David de Gea Quintana (Spanish pronunciation: [daˈβið ðe ˈxea kinˈtana]; born 7 November 1990) is a Spanish professional footballer who plays as a goalkeeper for Premier League club Manchester United and the Spain national team.    Born in Madrid, De Gea began his career aged 13 with Atlético Madrid and rose through the academy system at the club before making his senior debut in 2009. After being made Atlético's first-choice goalkeeper, he helped the team win both the UEFA Europa League and the UEFA Super Cup in 2010. His performances attracted the attention of Manchester United, which he joined in June 2011 for £18.9 million, a British record for a goalkeeper at the time.        Since joining United, De Gea has made over 300 appearances and won a Premier League title, an FA Cup, a League Cup, three Community Shields and the UEFA Europa League. For three consecutive seasons from 2013–14 to 2015–16, he was elected as United's Sir Matt Busby Player of the Year, the first player in the award's history to win on three successive occasions (four in total),[4] as well as being included in four consecutive (five in total) PFA Team of the Year sides from 2015 to 2018. In 2018 he was named in the FIFA FIFPro World XI.[5]        De Gea was the captain for the Spain under-21 national team that won the European Championship in 2011 and 2013, and also competed in the 2012 Olympics. He made his debut for the senior team in 2014 and was selected for that year's World Cup. He was tipped by many to become the successor to Iker Casillas as Spain's long-term goalkeeper,[6] and also is regarded to be one of the best goalkeepers in the world.[7][8][9]`,
        number: 1,
        height: 192,
        nationality: 'Spain',
        favouriteQuote: `I don’t know who is the best goalkeeper in the world at the moment, but I want to be the best.`,
        images: ['https://www.manutd.com/AssetPicker/images/0/0/12/30/794349/Player-Profiles-Square-DeGea1558101678953.jpg', 'https://www.manutd.com/AssetPicker/images/0/0/12/30/794304/De_Gea1558101632154.png']
    },  

]

const seedDb = () => {
    Player.remove({}, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Removed all players from the database.')
            players.forEach(player => {
                Player.create(player, (err, newPlayer) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Added a player named: ', newPlayer.name);
                    }
                })
            })
        }
    })
}


module.exports = seedDb;