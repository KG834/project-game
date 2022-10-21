class Player {
    constructor() {
        this.score = 0;
        this.name = null;
        this.index = null;
    }
    addPlayer() {
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({
            score : this.score,
            name : this.name,
            index : this.index,
        })
        

    }
    getCount() {
        database.ref("playerCount").on("value", (data) =>{
            playercount = data.val()
        })
    }
    updateCount(count) {
        database.ref("/").update({playerCount : count})
    }
    updateScore(newScore) {
        database.ref("players/player").update({
            score : newScore,
        })
    }
}