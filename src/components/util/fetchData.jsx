export default async function FetchData(isPlayerFetch, tag) {

    const API_BASE = "https://overfast-api.tekrop.fr";

    const PLAYER_ID = tag.replace('#', '-');

    const url = isPlayerFetch ? `${API_BASE}/players/${PLAYER_ID}` : `${API_BASE}/heroes`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}. The player's profil might be private or not found.`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Fetch failed:", error);
    }
}