

export default function(props: React.PropsWithChildren<HTMLParagraphElement>) {

    return (
        <p>
            {props.children}
        </p>
    )
}