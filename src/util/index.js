export function dmy(timestamp) {
    let year = new Date(timestamp).getFullYear();
    let month = new Date(timestamp).getMonth() + 1;
    let day = new Date(timestamp).getDate();
    return `${day}-${month}-${year}`;
}