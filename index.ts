const foo = (bar) => {
    console.log(bar);
};

const bar = (foo: string): void => {
    console.log(foo);
};

bar('foo');
