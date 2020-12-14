import * as core from '@actions/core';
import btoa from 'btoa';

async function run(): Promise<void> {
  try {
    const secret: string = core.getInput('secret');
    if (secret.startsWith('***')) {
      core.info('hmm bad stuff');
    } else {
      core.info('nice start');
    }

    if (secret.endsWith('***')) {
      core.info('hmm bad stuff endf');
    } else {
      core.info('nice end');
    }

    core.info(`test length: ${secret.length}`);

    const temp = btoa(secret);
    core.setOutput('result', temp);
    core.setOutput('hack', `b64_${temp}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
