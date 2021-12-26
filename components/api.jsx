import useSWR from 'swr';

export const Getter = (prop) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR(prop, fetcher);
    return data;
};

export const Posting = (prop, posts) => {
    const fetcher = (url) =>
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(posts),
        }).then((res) => res.json());
    const { data } = useSWR(prop, fetcher);
    return data;
};
