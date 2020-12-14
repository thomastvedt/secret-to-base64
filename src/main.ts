import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const secret: string = core.getInput('secret');
    if (secret.startsWith('***')) {
      core.debug('hmm bad stuff');
    } else {
      core.debug('nice start');
    }

    if (secret.endsWith('***')) {
      core.debug('hmm bad stuff endf');
    } else {
      core.debug('nice end');
    }

    // eslint-disable-next-line no-undef
    const temp = btoa(secret);
    core.setOutput('result', temp);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
