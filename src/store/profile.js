import { writable } from "svelte/store";

export const profile = writable([]);

const fetchProfile = async (puuid) => {
  const url = "https://radiant-woodland-44834.herokuapp.com/https://EUW1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + puuid;
  const res = await fetch(url, {
    headers: {
      "X-Riot-Token": "RGAPI-b5da6378-964e-41fa-aaa0-09becad3c25b",
      origin: "http://localhost:5173",
    },
  });
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].queueType === "RANKED_SOLO_5x5") {
      const profileData = {
        summonerName: data[i].summonerName,
        tier: data[i].tier,
        rank: data[i].rank,
        leaguePoints: data[i].leaguePoints,
        wins: data[i].wins,
        losses: data[i].losses,
        winrate: Math.round((data[i].wins / (data[i].wins + data[i].losses)) * 100),
        profileIconUrl: "",
        queueType: data[i].queueType,
        tierImage: getTierImageUrl(data[i].tier),
      };

      const summonerName = data[i].summonerName;
      const summonerUrl = `https://radiant-woodland-44834.herokuapp.com/https://EUW1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
      const summonerResponse = await fetch(summonerUrl, {
        headers: {
          "X-Riot-Token": "RGAPI-b5da6378-964e-41fa-aaa0-09becad3c25b",
          origin: "http://localhost:5173",
        },
      });

      const summonerData = await summonerResponse.json();
      const profileIconId = summonerData.profileIconId;


      const version = "11.18.1"; 
      const profileIconUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileIconId}.png`;

      profileData.profileIconUrl = profileIconUrl;

      profile.update((n) => [...n, profileData]);
      console.log(profileData.tierImage)
    }
  }
};

const getTierImageUrl = (tier) => {
  const tierImages = {
    BRONZE: '/src/images/bronze_baseface.png',
    SILVER: '/src/images/silver_baseface_matte.png',
    GOLD: '/src/images/gold_baseface_matte.png',
    PLATINUM: '/src/images/platinum_baseface_matte.png',
    DIAMOND: '/src/images/diamond_baseface_matte.png',
    MASTER: '/src/images/master_baseface_matte.png',
    GRANDMASTER: '/src/images/grandmaster_baseface_matte.png',
    CHALLENGER: '/src/images/challenger_baseface_matte.png',
  };
  return tierImages[tier.toUpperCase()] || '';
};

fetchProfile("fOfb-fwt1c7Ma9k4_gxE9XAg_xFkUE063EbG02_ADrs14rtu");
fetchProfile("xfz9P6MJ4KPquDrzkORliaOCOFgtEk61zWouYXZPscGK1ig");
fetchProfile("s4Oj8ed_EicbcjE_HYhhr_oGG1RLgmIEDb3VnpS_YiLOmGcV");
fetchProfile("uEbMtx18lbwD2Abm_nFEeW4wRNJsuceHkwEjTnCOdPV1Elig");
