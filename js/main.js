var text = `rob dobster. feesh fosh. leev bobster.
my soul is worth 18 tunisian dinar.
my balls itch.
who up playin with they worm?
i fucking hate iowa.
dragons are awesome.
game to mean what?
you know what would be really fucking funny?
it's boshy time!
pastries my enemy call that an opp tart.
TRANS RIGHTS!
day 50 blend microplastics full time day job blending microplastics wife and kids blend business day in day out blending rich as fuck blending microplastics so much money 6:45am healthy start blending microplastics masses give good money for blending very satisfied.
mmm yumby soup....
brand new recipe, same great taste!
ඞ
even sisyphus, is destined for happiness.
(i'm not allowed to display these words)
have you had enough water to drink today?
heisenbones.
i will break into your house and beat decode on your pc.
we should replace oxygen with swag.
rate entity.
theres a trap door hidden in my cabinet. it leads to my secret stash of pistachios.`;

function getRandomSubtitle() {
    var lines = text.split('\n');

    var line = lines[Math.floor(Math.random() * lines.length)];

    return line;
}

$(document).ready(function() {
    $("#subtitle").html(getRandomSubtitle());
});
