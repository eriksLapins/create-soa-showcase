#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-soa-showcase', {
  templateRoot,
  extra: {
    template: {
      type: 'list',
      default: 'nuxt',
      describe: 'choose your framework',
      choices: ['nuxt'],
      prompt: 'if-no-arg',
    },
    packageManager: {
      type: 'list',
      default: 'yarn',
      describe: 'choose your package manager',
      choices: ['yarn', 'npm', 'pnpm', 'bun'],
      prompt: 'if-no-arg',
    },
  },
  after: ({ answers }) => {
    console.log(`Installing dependencies for ${answers.template} template with ${answers.packageManager}.`);
  },
  caveat: 'Project created',
});
