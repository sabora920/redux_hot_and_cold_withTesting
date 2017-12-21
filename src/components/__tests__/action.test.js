import { GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS, makeGuess, restartGame, generateAuralUpdate } from '../../actions.js'

describe('the actions', function(){ 
    it('should restart the game', function(){
        const correctAnswer = 34;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
    it('should make a guess', function(){
        const guess = 34;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
    it('should generate an aural update', function(){
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});


