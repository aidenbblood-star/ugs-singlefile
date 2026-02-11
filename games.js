// 1. CONFIGURATION
var USER = "aidenbblood-star";
var REPO = "Mygames"; 
var BRANCH = "main";

// 2. THE UPDATED LIST (D-Z Included)
var manualList = [
    // A-C (Existing)
    'cl1','cl10bullets','cl10minutestildawn','cl1on1soccer','cl1v1lol','cl2048','cl3dash','clageofwar','clamongus','clbadicecream','clbasketballstars','clbloonstd5','clbobtherobber','clburritobison','clcactusmccoy','clcatmario','clceleste','clchess','clcommandandconquer',
    
    // D-G
    'cldadish','cldadish2','cldadish3','cldarkestdungeon','cldeadzeal','cldeeploio','cldiepio','cldigdug','clDinoRun','cldisneychess','cldoge2048','cldoom','cldoubledragon','cldragonfist3','cldriveyourplow','clducklife','clducklife2','clducklife3','clducklife4','clearthbound','clentertherungeon','clevaporation','clevilevo','clevolution','clfallguys','clfancypants','clfancypants2','clfancypants3','clfeedus','clfeudalism','clfireboywatergirl','clfireboywatergirl2','clfireboywatergirl3','clfireboywatergirl4','clfireboywatergirl5','clfireboywatergirl6','clflappybird','clfootballlegends','clfridaynightfunkin','clfunny-shooter-2','clgetawayshooters','clgeometrydash','clget-on-top','clgorn','clgo-wagon','clgta-v-scratch','clgunmayhem','clgunmayhem2',
    
    // H-M
    'clhappywheels','clheli-attack-3','clhexgl','clhobomobo','clhouseofdead','clhovercraft','clhungryshark','climpossiblequiz','climpossiblequiz2','clinsaniquarium','cliron-snout','clitchio','cljacksmith','cljanissary-tower','cljelly-truck','cljetpack-joyride','cljuice-box','clkaizo-mario','clkarate-blazers','clkeep-out','clkey-draw','clking-of-fighters','clkirby-nightmare','clknights-of-the-round','cllearntofly','cllearntofly2','cllearntofly3','cllegend-of-zelda','cllife-the-game','clline-rider','cllittle-alchemy','clmad-alin-posse','clmadness-combat','clmario-64','clmario-kart','clmario-world','clmega-man','clmetal-slug','clminecraft','clminibattles','clminipars','clmother-load','clmutilate-a-doll-2',
    
    // N-S
    'cln-game','cln-gon','clnaruto-v-bleach','clnba-jam','clneon-racer','clnitrome','clno-duck-life','clomeglio','clone-night-at-flumptys','cloot-randomizer','clovoo','clpacman','clpaper-io','clpaper-minecraft','clpapas-pizzeria','clpapas-freezeria','clpapas-scooperia','clpapas-burgeria','clpenalty-shooters-2','clpixel-gun-3d','clplants-vs-zombies','clpokemon-emerald','clpokemon-fire-red','clpoki','clportal','clpowerline-io','clprizefighters','clpuppet-hockey','clquake','clraft','clraft-wars','clraft-wars-2','clrandom-runners','clred-ball-4','clretro-bowl','clriddle-school','clriddle-school-2','clriddle-school-3','clriddle-school-4','clriddle-school-5','clriddle-transfer','clroblox','clrooftop-snipers','clrun-3','clsausage-run','clscribble-io','clshadow-the-hedgehog','clshady-bears','clshellshockers','clsimpsons','clskate-hooligans','clslope','clsmash-karts','clsmash-remix','clsnow-rider-3d','clsonic-the-hedgehog','clsort-the-court','clspace-invaders','clspiderman','clstair-race','clstickman-hook','clstreet-fighter-2','clsubway-surfers','clsuper-mario-bros','clsuper-mario-maker','clsuper-mario-odyssey','clsuper-smash-flash-2','clsword-masters',
    
    // T-Z
    'cltag','cltank-trouble','cltemple-run-2','clterraria','cltetris','clthe-binding-of-isaac','clthe-final-earth','clthe-henry-stickmin-collection','clthe-last-stand','clthe-sims','clthe-worlds-hardest-game','clthrill-rush','cltic-tac-toe','cltiny-fishing','cltom-and-jerry','cltomb-of-the-mask','cltoon-cup','cltotally-accurate-battle-simulator','cltower-defense','cltower-of-hell','cltown-of-salem','cltunnel-rush','clultimate-knockout','clunblocked-games-66','cluno','clvex-3','clvex-4','clvex-5','clvex-6','clvex-7','clwater-marbles','clwheelie-bike','clworld-of-goo','clwormate-io','clworms-zone','clxiaoxiao','clx-trial-racing','clyahtzee','clyoutube','clzelda','clzombie-derby','clzombie-tsunami'
];

// 3. UI BUILDING LOGIC (Using the improved header logic)
function buildStash() {
    const container = document.getElementById('sections-container');
    if (!container) return; 
    container.innerHTML = "";

    const groups = {};

    manualList.forEach(folder => {
        let cleanName = folder.replace(/^cl/i, '');
        let firstChar = cleanName.charAt(0).toUpperCase();
        let letter = /^[0-9]/.test(firstChar) ? "0-9" : firstChar;

        if (!groups[letter]) groups[letter] = [];
        groups[letter].push({ folder, cleanName });
    });

    const sortedKeys = Object.keys(groups).sort((a, b) => {
        if (a === "0-9") return -1;
        if (b === "0-9") return 1;
        return a.localeCompare(b);
    });

    sortedKeys.forEach(letter => {
        const section = document.createElement('div');
        section.id = `section-${letter}`;
        section.innerHTML = `
            <div class="letter-header" style="color: #fff; font-size: 14px; font-weight: bold; text-align: center; margin: 20px 0;">${letter}</div>
            <div class="buttons-container" id="btns-${letter}" style="display: flex; flex-direction: column; gap: 8px;"></div>
        `;
        container.appendChild(section);

        groups[letter].sort((a, b) => a.cleanName.localeCompare(b.cleanName))
        .forEach(game => {
            const btn = document.createElement('input');
            btn.type = "button";
            btn.value = game.cleanName.toUpperCase();
            btn.className = "game-btn";
            
            const gameUrl = `https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${BRANCH}/${game.folder}/index.html`;
            btn.onclick = () => window.location.href = gameUrl;

            document.getElementById(`btns-${letter}`).appendChild(btn);
        });
    });
}

window.addEventListener('load', buildStash);
