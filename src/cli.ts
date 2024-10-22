#!/usr/bin/env node

import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-soa-showcase', {
  templateRoot,
  promptForDescription: false,
  promptForAuthor: false,
  promptForEmail: false,
  promptForLicense: false,
  promptForPackageManager: false,
  promptForTemplate: false,
  skipGitInit: true,
  skipNpmInstall: true,
  extra: {
    template: {
      type: 'list',
      default: 'soa-nuxt',
      describe: 'choose your framework',
      choices: ['soa-nuxt'],
      prompt: 'if-no-arg',
    },
    'node-pm': {
      type: 'list',
      default: 'yarn',
      describe: 'choose your package manager',
      choices: ['yarn', 'npm', 'pnpm'],
      prompt: 'if-no-arg',
    },
  },
  after: ({ answers, template, run, name }) => {
    console.log(`Running install for ${template} template with ${answers['node-pm']} in ${process.cwd()}/${name}`);
    run(`${answers['node-pm']} install`, {
      cwd: `${process.cwd()}/${name}`,
    });
    console.log(`Created project for ${template} template with ${answers['node-pm']}.`);
  },
  caveat: 'Project created',
});
