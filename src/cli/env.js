const parseEnv = (searchingKey = 'RSS_') =>
    console.log(Object.keys(process.env)
        .reduce((accum, envKey) => {
            return envKey.startsWith(searchingKey) ? accum.concat(`${envKey}=${process.env[envKey]}`) : accum;
        }, []).join('; '));

parseEnv();