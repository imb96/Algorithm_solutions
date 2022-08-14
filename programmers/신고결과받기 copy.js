function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  report = new Set(report);
  const reporter = Array.from(report);
  const reporterCount = {};

  for (let i = 0; i < reporter.length; i++) {
    reporterCount[reporter[i].split(" ")[1]] = reporterCount[
      reporter[i].split(" ")[1]
    ]
      ? (reporterCount[reporter[i].split(" ")[1]] += 1)
      : (reporterCount[reporter[i].split(" ")[1]] = 1);
  }

  for (let i = 0; i < reporter.length; i++) {
    if (reporterCount[reporter[i].split(" ")[1]] >= k) {
      let j = id_list.indexOf(reporter[i].split(" ")[0]);
      result[j]++;
    }
  }
  return result;
}
