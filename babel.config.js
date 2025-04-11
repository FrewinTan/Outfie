module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],  // Using Expo preset for React Native apps
    plugins: [
      'nativewind/babel',  // Ensure this is in the plugins array
    ],
  };
};
