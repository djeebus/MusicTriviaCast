declare namespace cast.receiver {
    export var CastReceiverManager: CastReceiverManagerStatic;

    interface CastReceiverManager {
        start(config : AppConfig);
    }

    interface AppConfig {

    }

    interface CastReceiverManagerStatic {
        getInstance(): CastReceiverManager;
        Config: {
            new() : AppConfig
        };
    }
}

declare namespace cast.receiver.games {
    enum EventType {
        PLAYER_AVAILABLE
    }

    enum PlayerState {
        UNKNOWN,
        DROPPED,
        QUIT,
        AVAILABLE,
        READY,
        IDLE,
        PLAYING,
    }

    enum StatusCode {
        SUCCESS,
        INVALID_REQUEST,
        NOT_ALLOWED,
        INCORRECT_VERSION,
        TOO_MANY_PLAYERS,
    }

    var PlayerInfo: PlayerInfo;
    interface PlayerInfo {
        new() : PlayerInfo;
        playerData: any;
        playerId: string;
        playerState: PlayerState;
    }

    var Event: Event;
    interface Event {
        new(): Event;

        errorDescription: string;
        playerInfo: PlayerInfo;
        requestExtraMessageData: any,
        resultExtraMessageData: any,
        statusCode: StatusCode,
        type: EventType,
    }

    var GameManagerConfig: GameManagerConfig;

    interface GameManagerConfig {
        new () : GameManagerConfig;
        applicationName : string;
        maxPlayers : number;
    }

    var GameManager : GameManager;
    interface GameManagerListener {
        onGameDataChanged: (event: Event) => void;
        onGameLoading: (event: Event) => void;
        onGameMessageReceived
        onGamePaused
        onGameRunning
        onGameShowingInfoScreen
        onGameStatusTextChanged
        onLobbyClosed
        onLobbyOpen
        onPlayerAvailable
        onPlayerDataChanged
        onPlayerDropped
        onPlayerIdle
        onPlayerPlaying
        onPlayerQuit
        onPlayerReady
    }

    interface GameManager extends GameManagerListener {
        new (config: GameManagerConfig): GameManager;

        addEventListener(
            eventType: EventType,
            callback: (event: any) => void
        ) : void;
    }
}

