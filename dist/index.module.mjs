const commandLineArgs = () => {
  const commandLineArguments = {};
  const rawArgs = process.argv.slice(2);
  const isItemArgumentName = (item) => {
    return /^--/.test(item);
  };
  rawArgs.forEach((item, index) => {
    if (!isItemArgumentName(item)) {
      return;
    }
    const itemArgumentValue = rawArgs[index + 1] && !isItemArgumentName(rawArgs[index + 1]) ? rawArgs[index + 1] : true;
    commandLineArguments[item.replace(/^--/, '')] = itemArgumentValue;
    commandLineArguments[item.replace(/^--/, '').replace(/-./g, (match) => {
      return match.replace(/-/, '').toUpperCase();
    })] = itemArgumentValue;
  });
  return commandLineArguments;
};
export { commandLineArgs };