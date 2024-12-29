export function mapToOptions(options, defaultLabel) {
  return `<option value="">${defaultLabel}</option>${options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("")}`;
}

export function groupByKey(array, key) {
  return array.reduce((acc, item) => {
    if (!acc[item[key]]) {
      acc[item[key]] = [];
    }

    acc[item[key]].push(item);

    return acc;
  }, {});
}

export function twoLevels(groupBy, key) {
  return Object.keys(groupBy).reduce((acc, currGroup) => {
    acc[currGroup] = groupByKey(groupBy[currGroup], key);
    return acc;
  }, {});
}
