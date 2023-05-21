<script>
    export let summonerName;
    export let tier;
    export let rank;
    export let leaguePoints;
    export let wins;
    export let losses;
    export let winrate;
    export let profileIcon;
    export let tierIcon;
    export let style;
    export let inGame;
</script>

<div class="card" style={style}>
    <div class="row">
        <img src={profileIcon} alt="profile icon" />
        <h3>{summonerName}</h3>
        <p>STATUS: </p>
        {#if !inGame}
            <p class="gameText" style="color: red">NOT INGAME</p>
        {:else}
            <p class="gameText" color: green>INGAME</p>
        {/if}
        <div class="bar">
            <div
                class="losses"
                style={`width: ${(losses / (wins + losses)) * 100}%`}
            />
            <div
                class="wins"
                style={`width: ${(wins / (wins + losses)) * 100}%`}
            />
            <div class="winrate">{wins}W ---- {winrate}% ---- {losses}L</div>
        </div>
            <p class="tier">Tier: {tier} {rank}</p>
            <p>LP: {leaguePoints}</p>
            <img class="tier-img" src={tierIcon} alt="tier icon" />
            <p>Wins: {wins}</p>
            <p>Losses: {losses}</p>
    </div>
</div>

<style>
    .gameText {
        font-size: small;
        margin-left: 20px;
    }

    .tier {
        font-size: smaller;
        margin-left: 20px;
        margin-right: 50px;
    }

    h3 {
        margin: 0;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        font-size: medium;
    }
    .card img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .card {
        width: 1000px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 25px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
    }

    .bar {
        width: 150px; 
        height: 10px;
        background-color: #f2f2f2;
        border-radius: 4px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        margin-bottom: 5px;
        margin-left: 20px;
    }

    .wins {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: green;
    }

    .losses {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        background-color: red;
    }

    .winrate {
        color: white;
        font-size: small;
        margin-top: 15px;
    }
    @media (max-width: 1050px) {
        .row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .gameText {
            margin-right: 25px;
        }
        .card {
            width: 100%;
            max-width: 500px;
            min-width: fit-content;
        }
        .bar {
            margin-left: 0;
        }
        .tier {
            margin-top: 10px;
            margin-left: 0;
            margin-right: 0;
        }
        .tier-img {
            margin-right: 0px;
            margin-left: 10px;
        }

    }
</style>
