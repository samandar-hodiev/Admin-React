
import { Header, Aside, Section } from "@layouts";

const index = () => {
    return (
        <>
            <Header />

            <Section className="flex">
                <Aside />
                <Section className="bg-[#101827] w-[calc(100vw_-_300px)]"/>
            </Section>

        </>
    )
}
export default index;