<script>
    import { profile } from "../../store/profile";
    import Card from "../../components/card.svelte";

    let profiles = [];
    let isLoading = false;

    $: {
        profiles = $profile;
        isLoading = profiles.length === 0;
    }
</script>

<div class="container">
    <h1 class="queue">SOLO QUEUE</h1>

    {#if isLoading} <!-- Show loading spinner if isLoading is true -->
        <i class="fa-solid fa-spinner fa-2xl spin"></i>
    {:else}
    {#each profiles as prof, index}
        <Card
            style={index === 0 ? "border: 2px dashed #FFD700" : ""}
            tierIcon={prof.tierImage}
            summonerName={prof.summonerName}
            tier={prof.tier}
            rank={prof.rank}
            leaguePoints={prof.leaguePoints}
            wins={prof.wins}
            losses={prof.losses}
            winrate={prof.winrate}
            profileIcon={prof.profileIconUrl}
        />
    {/each}
    {/if}
</div>

<style>

.spin {
        animation: spin 1s infinite;
    }@keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .queue {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem;
    }
</style>
