"use client"
import { Card, CardContent, CardHeader, CardDescription } from "../ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Label } from "../ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, CircleAlert } from "lucide-react"
import { Button } from "../ui/button"
import Image from 'next/image'
import './style.css'
import { useState } from "react"

const Logo = ({ logo_url }: any) => {
    const [ imageSource, setImageSoruce] = useState(logo_url)
    return (
        <Card className="absolute rounded-none w-40 h-14 flex top-[-38px] p-1 left-0  m-0 ">
            <Image
                src={imageSource}
                layout='fill'
                sizes="(max-width: 300px) 100vw"
                objectFit='contain'
                alt="company logo"
                onError={() => {
                    setImageSoruce(`${process.env.NEXT_PUBLIC_BASE_PATH}/tenxerlabs_blue_logo.webp`)

                }}
                unoptimized={true}
                className="rounded-md object-cover h-auto w-full"
            />
        </Card>

    )
}
export default function Lab(props: any) {
    const { data } = props
    const [ imageSource, setImageSoruce] = useState(data.image_url)

    const host = window.location.origin;
    return (
        <Card className=" flex-1 card relative overflow-hidden transition-filter duration-300 ease-in-out">
            <Card className="main-content h-[100%] p-1 ">
                <AspectRatio ratio={4 / 3} className=" overflow-clip">
                    <Image
                        src={imageSource}
                        // width={500}
                        // height={0}
                        layout='fill'
                        sizes="(max-width: 768px) 100vw"
                        objectFit='contain'
                        onError={() => {
                            setImageSoruce(`${process.env.NEXT_PUBLIC_BASE_PATH}/tenxerlabs_blue_logo.webp`)
        
                        }}
                        alt="board setup image"
                        className="rounded-md object-cover h-auto w-full"
                        unoptimized={true}
                    />
                </AspectRatio>
                <Separator orientation="horizontal" className="my-2" />

                <CardContent className=" flex flex-col gap-2 pt-6 pb-0 px-0 m-3 relative">
                    <Logo logo_url={data.logo_url} />
                    <div>
                        {
                            data.category_ids?.map((item: any, i: number) =>
                                <Label key={i} className="cursor-pointer opacity-50" >{item.name} </Label>)
                        }
                    </div>
                    <div className="flex gap-2 ">
                        {/* <Label className="font-bold text-base" >
                            {data.code}
                        </Label>
                        <Label className="font-bold text-base" >-</Label> */}
                        <Label className="font-bold text-base" >{data.name}</Label>
                    </div>



                </CardContent>

            </Card>
            <Card className=" inset-0 opacity-100 hide-card absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-white p-4 transform translate-y-full transition-transform duration-500 ease-in-out">
            </Card>
            <Card className="flex flex-col justify-between description h-[50%] absolute bottom-0 left-0 w-full p-4 transform translate-y-full transition-transform duration-1000 ease-in-out">
                <Label className=" flex-grow leading-loose overflow-clip">{data.description}</Label>
                <Label
                    className=" h-6 text-primary flex justify-end gap-3 items-center cursor-pointer"
                    onClick={() => window.open(`https://tenxerlabs.com/livebench/labs/bldc-motor-control-evaluation-board-eval-6edl7141-foc-3sh/`, "_blank")}
                >
                    <CircleAlert />
                    know more
                </Label>
            </Card>
            <Button
                className="launch absolute rounded-full top-4 right-4 opacity-0 cursor-pointer transition-opacity duration-500 ease-in-out"
                onClick={() => window.open(`${host}/app/${data.uniq_name}`, "_blank")}
            >
                Launch Lab
                <ArrowUpRight />
            </Button>
        </Card>
    )
}