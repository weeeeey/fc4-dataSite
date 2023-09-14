type TypeUserInfo = {
    accessId: string;
    nickname: string;
    level: number;
};

type TypeUserTier = {
    matchType: number;
    division: number;
    achievementDate: string;
};

type TypeUserTrade = {
    tradeDate: string;
    saleSn: string;
    spid: number;
    grade: number;
    value: number;
};

type TypeUserMatchId = {
    matchId: string;
};

type TypeMatchtype = {
    matchtype: number;
    desc: string;
};

type TypeMatch = {
    matchId: string;
    matchDate: string;
    matchType: number;
    matchInfo: TypeMatchInfo[];
};

type TypeMatchInfo = {
    accessId: string;
    nickname: string;
    matchDetail: TypeMatchDetail;
    shoot: TypeShoot;
    shootDetail: TypeShootDetail[];
    pass: TypePass;
    defence: TypeDefence;
    player: TypePlayer[];
};

type TypeMatchDetail = {
    seasonId: number;
    matchResult: string;
    matchEndType: number;
    systemPause: number;
    foul: number;
    injury: number;
    redCards: number;
    yellowCards: number;
    dribble: number;
    cornerKick: number;
    possession: number;
    OffsideCount: number;
    averageRating: number;
    controller: string;
};

type TypeShoot = {
    shootTotal: number;
    effectiveShootTotal: number;
    shootOutScore: number;
    goalTotal: number;
    goalTotalDisplay: number;
    ownGoal: number;
    shootHeading: number;
    goalHeading: number;
    shootFreekick: number;
    goalFreekick: number;
    shootInPenalty: number;
    goalInPenalty: number;
    shootOutPenalty: number;
    goalOutPenalty: number;
    shootPenaltyKick: number;
    goalPenaltyKick: number;
};

type TypeShooting = {
    1: 'normal';
    2: 'finesse';
    3: 'header';
    4: 'lob';
    5: 'flare ';
    6: 'low ';
    7: 'voll';
    8: 'free-kick';
    9: 'penalty';
    10: 'KNUCKLE ';
    11: 'BICYCLE';
    12: 'super';
};

type TypeShootingResult = {
    1: 'ontarget';
    2: 'offtarget';
    3: 'goal';
};

type TypeShootDetail = {
    goalTime: number;
    x: number;
    y: number;
    type: TypeShooting;
    result: TypeShootingResult;
    spId: number;
    spGrade: number;
    spLevel: number;
    spIdType: boolean; //임대 여부
    assist: boolean; //어시스트 받은 골 여부
    assistSpId: number; //어시스트 선수 고유 식별자
    assistX: number;
    assistY: number;
    hitPost: boolean; //골포스트 맞춤
    inPenalty: boolean; //패널티 안에서 넣은 슛 여부 true-안, false-밖
};

type TypePass = {
    passTry: number;
    passSuccess: number;
    shortPassTry: number;
    shortPassSuccess: number;
    longPassTry: number;
    longPassSuccess: number;
    bouncingLobPassTry: number;
    bouncingLobPassSuccess: number;
    drivenGroundPassTry: number;
    drivenGroundPassSuccess: number;
    throughPassTry: number;
    throughPassSuccess: number;
    lobbedThroughPassTry: number;
    lobbedThroughPassSuccess: number;
};

type TypeDefence = {
    blockTry: number;
    blockSuccess: number;
    tackleTry: number;
    tackleSuccess: number;
};

// 선수 경기 스탯
type TypeStatus = {
    shoot: number;
    effectiveShoot: number;
    assist: number;
    goal: number;
    dribble: number;
    intercept: number;
    defending: number;
    passTry: number;
    passSuccess: number;
    dribbleTry: number;
    dribbleSuccess: number;
    ballPossesionTry: number;
    ballPossesionSuccess: number;
    aerialTry: number;
    aerialSuccess: number;
    blockTry: number;
    block: number;
    tackleTry: number;
    tackle: number;
    yellowCards: number;
    redCards: number;
    spRating: number;
};

type TypePlayer = {
    spId: number;
    spPosition: number;
    spGrade: number;
    status: TypeStatus;
};
