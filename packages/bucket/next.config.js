/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  compress: true, // 파일압축 웹 로딩속도 향상
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
