//import { initialState } from "../../reducer";
import reducer from "../../reducer";

import {
  GENERATE_AURAL_UPDATE,
  RESTART_GAME,
  MAKE_GUESS,
  makeGuess,
  restartGame,
  generateAuralUpdate
} from "../../actions.js";

//===== testing RESTART GAME =====
describe("reducer", function() {
  it("restart game should reset state", function() {
    let state = {
      guesses: [1, 2, 4, 6, 5],
      feedback: "CORRECT!",
      auralStatus: "",
      correctAnswer: 5
    };
    const newCorrectAnswer = 44;
    state = reducer(state, restartGame(newCorrectAnswer));
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.auralStatus).toEqual("");
    expect(state.correctAnswer).toEqual(newCorrectAnswer);
  });

  //===== testing MAKE_GUESS =====
  it("make guess should record a guess", function() {
    let state = {
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: 5
    };

    state = reducer(state, makeGuess(10));
    expect(state.guesses).toEqual([10]);
    expect(state.feedback).toEqual("You're Hot!");

    state = reducer(state, makeGuess(15));
    expect(state.guesses).toEqual([10, 15]);
    expect(state.feedback).toEqual("You're Warm.");

    state = reducer(state, makeGuess(35));
    expect(state.guesses).toEqual([10, 15, 35]);
    expect(state.feedback).toEqual("You're Cold...");

    state = reducer(state, makeGuess(80));
    expect(state.guesses).toEqual([10, 15, 35, 80]);
    expect(state.feedback).toEqual("You're Ice Cold...");

    state = reducer(state, makeGuess(5));
    expect(state.guesses).toEqual([10, 15, 35, 80, 5]);
    expect(state.feedback).toEqual("You got it!");
  });
  //===== testing AURAL UPDATE =====

  it ('aural update test', function(){
    let state = {
      guesses: [1, 2, 3],
      feedback: "Bananas!",
      auralStatus: "",
      correctAnswer: 5,
    }
    state = reducer(state, generateAuralUpdate());
    expect(state.auralStatus).toEqual("Here's the status of the game right now: Bananas! You've made 3 guesses. In order of most- to least-recent, they are: 3, 2, 1")
  });
  
});


