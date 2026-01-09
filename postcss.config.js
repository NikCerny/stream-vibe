import postcssPxtoRem from 'postcss-pxtorem'

export default ( { env } ) => {
    const isProd = env === 'production';
    const plugins = [];

    if (isProd) {
        plugins.push(
            postcssPxtoRem({
                propList: ['*'],
                mediaQuery: true,
            })
        );
    }
    
    return {
        plugins: plugins
    }
}