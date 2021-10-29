import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../../constants";

const TestRedux = ({ counter, dispatch }) => {
    const increment = () => dispatch({ type: INCREMENT });
    const decrement = () => dispatch({ type: DECREMENT });

    return (
        <>
            <h1 data-testid="counter">{counter}</h1>
            <button data-testid="button-up"
                onClick={increment}>
                Up
            </button>
            <button data-testid="button-down"
                onClick={decrement}>
                Down
            </button>
        </>
    );
};

const mapStateToProps = (state) => (
    { counter: state.count }
)

export default connect(mapStateToProps)(TestRedux);