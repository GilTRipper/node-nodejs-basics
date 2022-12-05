import { env } from 'process';

const parseEnv = () => {
  const parsedEnv = Object.keys(env)
    .filter((key) => {
      if (key.startsWith('RSS_')) return true;
      return false;
    })
    .map((key) => `${key}=${env[key]}`)
    .join('; ');
  console.log(parsedEnv);
};

parseEnv();
