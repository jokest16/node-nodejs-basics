import { stdin, stdout } from 'node:process';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const { stdin: childStdin, stdout: childStdout  } = fork('./src/cp/files/script.js', args, { silent: true });

    stdin.pipe(childStdin);
    childStdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
