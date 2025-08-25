import Collections from "@/src/components/layout/search/collections";
import FilterList from "@/src/components/layout/search/filter";
import { sorting } from "@/src/lib/constants";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return(
        <>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row">
            <div className="order-first w-full flex-none md:max-w-[125px]">
                <Collections/>
            </div>
            <div className="order-last min-h-screen w-full md:order-none ">
                {children}
            </div>
            <div className="order-none flex-none md:order-last">
                <FilterList list={sorting} title="Sort By"/>
            </div>
        </div>
        </>
    )
}
