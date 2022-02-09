module.exports = () => {
    const data = { elements: [] }

    for (let i = 0; i < 150; i++) {
        let value = Math.floor( i % 10);
        data.elements.push({ id: i, contributorAccountNo: "99377"+i, periodStart: {year: 2022, month:  value+1, day: 1}, periodEnd: {year: 2022, month:  value+2, day: 1}, accountType: "AccountType"+value, activityType: "ActivityType"+value, contributorCategory: value, imageState: value })
    }

    return data;
}