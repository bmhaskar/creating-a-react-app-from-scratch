import React, { ReactElement, useEffect, useState } from 'react';
type lazyOutput = ReactElement | null;

const Lazy = (): lazyOutput => {
    const [text, setText] = useState<lazyOutput>(null);
    useEffect(() => {
        setTimeout(() => setText(<h1> Lazy Loaded component</h1>), 20000);
    }, []);
    return text;
};
export default Lazy;
