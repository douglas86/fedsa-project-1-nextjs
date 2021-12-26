import useSWR from 'swr';

export const Getter = (prop) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR(prop, fetcher);
    return data;
};
