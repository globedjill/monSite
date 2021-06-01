"use strict";

module.exports = {
  apps: [{
    name: 'CV',
    script: './bin/www',
    watch: '.',
    instances: 'max',
    autorestart: true,
    env: {
      NODE_ENV: 'dev'
    },
    env_production: {
      NODE_ENV: 'prod'
    }
  }]
};