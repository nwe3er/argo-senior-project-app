import moment from 'moment';

export function createBaseWithDB(db: string): string {
    return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

export function createbaseURLWithQuery(query: string) : string {
    return createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);
}

export function formatDateLabel(label: string): string {
    // return new Date(label).getMonth () + '-' + new Date(label).getDay();
    return moment(label).format('MMM-DD');
}
