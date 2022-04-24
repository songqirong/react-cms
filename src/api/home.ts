import instance from 'src/utils/http';


export const fetch_hello = (params: any) => instance.get('/hello', { params });
