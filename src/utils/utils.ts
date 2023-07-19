export function convertStringToDate(value: string){
    const [day, month, year] = value.split('/');
    return  new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}