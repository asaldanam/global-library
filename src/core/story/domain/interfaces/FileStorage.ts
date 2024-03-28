export interface FileStorage {
    upload(file: File[]): Promise<{ path: string; protocol: 'http' | 'ipfs' }>;
}
