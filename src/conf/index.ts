import Convict from 'convict'

export enum AppEnvironment {
    Test = 'test',
    Development = 'development',
    Staging = 'staging',
    Production = 'production',
}

const appConfig = Convict({
    env: {
        doc: 'the application env',
        format: Object.values(AppEnvironment),
        default: null,
        env: 'NODE_ENV',
    },
    appPort: {
        doc: 'app server port - this value is set automatically in elastic beanstalk env',
        format: 'port',
        default: 3000,
        env: 'PORT',
    },
})

appConfig.validate({ allowed: 'strict' })

export const Conf = appConfig.getProperties()
export const Env = (Conf.env as unknown) as AppEnvironment
