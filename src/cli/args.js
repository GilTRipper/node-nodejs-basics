import { argv } from 'process';

const parseArgs = async () => {
  const startIndex = argv.findIndex((item) => item.startsWith('--'));
  const args = argv.slice(startIndex);

  const res = args
    .map((_, index) => {
      if (index % 2 === 0) {
        return `${args[index].replace('--', '')} is ${args[index + 1]}`;
      }
    })
    .filter((item) => item)
    .join(', ');
  console.log(res);
};

parseArgs();
