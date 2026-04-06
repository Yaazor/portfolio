

export default function({className, ...props}: React.PropsWithChildren<HTMLElement>) {
    
    return (
        <div className="shadow-md shadow-primary rounded-xl bg-neutral-100 w-fit px-8 pr-16 mt-5  py-5">
            {props.children}
        </div>
    )
}