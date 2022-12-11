const parseArgs = () => {
    console.log(
        process.argv.slice(2).map((arg, index) =>
            index % 2 === 0 ? `${arg.replace('--', '')} is` : `${arg},`
        ).join(' ')
    )
};

parseArgs();