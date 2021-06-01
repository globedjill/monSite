module.exports = {
    apps: [{
        name: 'CV',
        script: './bin/www',
        watch: '.',
        instances: 'max',
        autorestart: true,
        env_dev: {
            NODE_ENV: 'dev'
        },
        env_production: {
            NODE_ENV: 'prod'
        }
    }],
};