const year = 365;
const month = 30;
const week = 7;

const message = "Timpul pana la finalizarea producerii:";

const raspunsBE = 340;

if(raspunsBE/year >=1){
    const isMultipleY = Math.floor(raspunsBE/year) > 1 ? 'years' : 'year';
    const isMultipleM = Math.floor(raspunsBE%year / month) > 1  ? 'months' : 'month';
    console.log(`${message} ${Math.floor(raspunsBE/year)}${isMultipleY} ${Math.floor(raspunsBE%year / month)} ${isMultipleM}`) 
} else if (raspunsBE/month >=1) {
    const isMultipleM = Math.floor(raspunsBE/month) > 1  ? 'months' : 'month';
    const isMultipleW = Math.floor(raspunsBE%month % week) > 1  ? 'weeks' : 'week';
    console.log(`${message} ${Math.floor(raspunsBE/month)}${isMultipleM} ${Math.floor(raspunsBE%month / week)} ${isMultipleW}`) 
}else if (raspunsBE/week >=1) {
    const isMultipleW = Math.floor(raspunsBE/week) > 1  ? 'weeks' : 'week';
    const isMultipleD = Math.floor(raspunsBE/week % day) > 1  ? 'days' : 'day';
    console.log(`${message} ${Math.floor(raspunsBE/week)}${isMultipleW} ${Math.floor(raspunsBE%week)} ${isMultipleD}`) 
}else{
    console.log('Mai putin de o saptamana')
}