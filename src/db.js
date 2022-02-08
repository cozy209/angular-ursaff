module.exports = () => {
    const data = { elements: [] }

    for (let i = 0; i < 50; i++) {
        let value = Math.floor( i % 10);
        data.elements.push({ ContributorAccountNo: `99377$(i)`, PeriodStart: {year: 2022, month:  1, day: 1}, PeriodEnd: {year: 2022, month:  2, day: 1}, AccountType: `AccountType$(value)`, ActivityType: `ActivityType$(value)`, ContributorCategory: value, ImageState: 1 })
    }

    return data;
}