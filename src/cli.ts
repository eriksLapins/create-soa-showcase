#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-soa-templates', {
  templateRoot,
  extra: {
    framework: {
      type: 'list',
      describe: 'choose your framework',
      choices: ['nuxt'],
      prompt: 'if-no-arg',
    },
  },
  after: ({ answers }) => console.log(`Ok you chose ${answers.framework}.`),
  caveat: 'Project created',
});
