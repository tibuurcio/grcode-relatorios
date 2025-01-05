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

export const TwoKeysDivider = "___";

export function groupByTwoKeys(array, key1, key2) {
  return array.reduce((acc, item) => {
    const currKey = `${item[key1]}${TwoKeysDivider}${item[key2]}`;
    if (!acc[currKey]) {
      acc[currKey] = [];
    }

    acc[currKey].push(item);

    return acc;
  }, {});
}

export function twoLevels(groupBy, key) {
  return Object.keys(groupBy).reduce((acc, currGroup) => {
    acc[currGroup] = groupByKey(groupBy[currGroup], key);
    return acc;
  }, {});
}
