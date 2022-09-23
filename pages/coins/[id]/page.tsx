interface PagePropsParams {
    id: string;
}

interface PageProps {
    params: PagePropsParams;
}

export default function Page(props: PageProps) {
    return <h1>OK</h1>;
}
