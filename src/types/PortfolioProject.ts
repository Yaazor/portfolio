import type { ProjectProps } from "@/components/project/Project"


export default class {
    private props: ProjectProps

    constructor(
        props: ProjectProps
    ) {
        this.props = props
    }

    public getProps(): ProjectProps {
        return this.props
    }
}