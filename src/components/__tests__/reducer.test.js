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
});

//===== testing MAKE_GUESS =====

//===== testing AURAL UPDATE =====
