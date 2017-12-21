// import React from 'react';
// import config from '../testConfig';

import { GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS, makeGuess, restartGame, generateAuralUpdate } from '.../actions'

// import { mount } from 'enzyme';

describe('the actions', function(){ 
    it('should should restart the game', function(){
        const correctAnswer = 34;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});


