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
    // arg-name => value
    commandLineArguments[item.replace(/^--/, '')] = itemArgumentValue;
    // argName => value
    commandLineArguments[item.replace(/^--/, '').replace(/-./g, (match) => {
      return match.replace(/-/, '').toUpperCase();
    })] = itemArgumentValue;
  });
  return commandLineArguments;
};

export { commandLineArgs };
