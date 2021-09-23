/**
 * @returns {{ count: number, sum: number, average: number }}
*/
function collect_ratings() {
    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    };
    let rating = 0;
    const elements = /** @type {NodeListOf<HTMLInputElement>} */(document.querySelectorAll('.rating'));
    elements.forEach(element => {
        rating = parseInt(element.id.replace('star', ''), 10);
        ratings.count += parseInt(element.value, 10);
        ratings.sum += parseInt(element.value, 10) * rating;
    });
    if (ratings.count !== 0) {
        ratings.average = ratings.sum / ratings.count;
    }
    return ratings;
}

document.addEventListener('change', () => {
    const ratings = collect_ratings();
    /** @type {HTMLInputElement} */(document.querySelector('#average')).value = ratings.average.toFixed(2);
});