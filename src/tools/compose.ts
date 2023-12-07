interface Compose<T> {
    then: <U>(fn: (a: T) => U) => Compose<U>;
    result: () => T;
}

function Compose<T>(value: T): Compose<T> {

    function then<U>(fn: (a: T) => U): Compose<U> {
        return Compose(fn(value));
    }

    function result() {
        return value;
    };

    return {then, result}
}

export default Compose;