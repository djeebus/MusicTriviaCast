/// <reference path="typings/cast.d.ts" />

class CastManager {
    castReceiverManager: cast.receiver.CastReceiverManager;
    appConfig = null;
    gameConfig = null;
    gameManager: cast.receiver.games.GameManager = null;

    constructor(numberOfPlayers: number) {
        this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
        this.appConfig = new cast.receiver.CastReceiverManager.Config();
        this.gameConfig = new cast.receiver.games.GameManagerConfig();

        this.gameManager = new cast.receiver.games.GameManager(this.gameConfig);
    }

    start() {

        this.gameManager.addEventListener(
            cast.receiver.games.EventType.PLAYER_AVAILABLE,
            function (event) {
                console.log('Player ' + event.playerInfo.playerId + ' is available');
            });

        this.castReceiverManager.start(this.appConfig);
    }
}
