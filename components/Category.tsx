import React from 'react'
import { Progress } from "@/components/ui/progress"
import { topCategoryStyles } from '@/constants'
import Image from 'next/image'
import { cn } from '@/lib/utils'


const Category = ({ category }: CategoryProps) => {

    const {bg,
        circleBg,
        text:{main,count},
        progress:{bg:progressBG,indicator},
        icon,} = topCategoryStyles[category.name as keyof typeof topCategoryStyles] || topCategoryStyles.default
                
    return (
        <div className={cn("gap-[18px] flex p-4 rounded-xl", bg)}>
            <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
                <Image src={icon} alt={category.name} width={20} height={20}/>
            </figure>

            <div className="flex w-full flex-1 flex-col gap-2">
                <div className="text-14 flex justify-between">
                    <h2 className={cn("font-medium", main)}>
                        {category.name}
                    </h2>
                    <h3 className={cn("font-normal", count)}>
                        {category.count}
                    </h3>
                </div>
                
                <Progress value={(category.count / category.totalCount)*100} 
                    indicatorClassName={cn("h-2 w-full", indicator)}
                    className={cn("h-2 w-full", progressBG)}/>
            </div>
        </div>
    )
}

export default Category