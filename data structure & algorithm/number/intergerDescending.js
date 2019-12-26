function intergerDescending(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(intergerDescending(118372));
