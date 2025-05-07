export type Work = {
    id: number;
    name: string;
    path: string;
    link: string;
    info: WorkInfo;
};
interface WorkInfo {
    w_id: number;
    infos: string;
    award: string;
    creation_time: string;
}
