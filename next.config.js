/** @type {import('next').NextConfig} */
const { nextConfig } = {
  reactStrictMode: false,
};
const { i18n } = require('./next-i18next.config');

module.exports = { nextConfig, i18n };
