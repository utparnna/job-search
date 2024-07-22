export interface Job {
    id: number,
    companyName: string,
    title: string,
    companyLogo: string,
    reference: string,
    fav?: boolean
}
export interface JobDetails extends Job {
    industries: string,
    types: string[],
    description: string,
    publishDate: string,
}