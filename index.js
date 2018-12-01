const delimiter = "👏";

exports.fromCSV = file => {
  const lines = file.trim().split("\n");
  if (lines.length <= 1) {
    return [];
  }

  const columns = lines[0].split(delimiter);

  return lines.slice(1).map(line => {
    const obj = {};
    line.split(delimiter).forEach((part, i) => (obj[columns[i]] = part));
    return obj;
  });
};

exports.toCSV = data => {
  if (data.length === 0) {
    return "";
  }

  const columns = Object.keys(data[0]);

  return (
    columns.join(delimiter) +
    "\n" +
    data.map(line => columns.map(col => line[col]).join(delimiter)).join("\n")
  );
};
