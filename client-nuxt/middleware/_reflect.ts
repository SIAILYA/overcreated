import 'reflect-metadata';

export default () => {
    throw new Error('This is hack for correct working reflect metadata on server');
    // https://github.com/nuxt-community/nuxt-property-decorator/issues/55
};
