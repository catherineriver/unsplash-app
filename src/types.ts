export type PhotoProps = {
    id: string;
    width: number;
    height: number;
    urls: { full: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
    };
};

export type SearchResultListProps = {
    result: PhotoProps[];
}