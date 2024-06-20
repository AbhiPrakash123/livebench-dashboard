// "use client"
import { Card, CardContent, CardHeader, CardDescription } from "../ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Label } from "../ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, CircleAlert } from "lucide-react"
import { Button } from "../ui/button"
import Image from 'next/image'
import './style.css'
import Link from 'next/link'
import { getHostname } from "@/services/actions/utils"
import ImageLoader from "./board-image"

const Logo = ({ logo_url }: any) => {
    const imageSource = logo_url ? logo_url : `${process.env.NEXT_PUBLIC_BASE_PATH}/tenxerlabs_blue_logo.webp`

    return (
        <Card className="absolute rounded-none w-40 h-14 flex top-[-38px] p-1 left-0  m-0 ">
            <Image
                src={imageSource}
                fill
                sizes="(max-width: 300px) 100vw"
                style={{ objectFit: "contain" }}
                alt="company logo"
                // onError={() => {
                //     setImageSoruce(`${process.env.NEXT_PUBLIC_BASE_PATH}/tenxerlabs_blue_logo.webp`)

                // }}
                className="rounded-md object-cover h-auto w-full"
            />
        </Card>

    )
}
export default function Lab({ data, roles }: any) {
    const imageSource = data.image_url ? data.image_url : `${process.env.NEXT_PUBLIC_BASE_PATH}/tenxerlabs_blue_logo.webp`
    const isAdmin = (roles !== undefined && roles.includes("admin")) ? true : false
    const host = getHostname()

    const _categories = data.category_ids ? data.category_ids.map((item: any) => item.name).join(" , ") : ""
    const categories = _categories.split(" ")

    return (
        <Card className=" flex-1 card relative overflow-hidden transition-filter duration-300 ease-in-out">
            <Card className="main-content h-[100%] p-1 ">
                <AspectRatio ratio={4 / 3} className=" overflow-clip">
                    <ImageLoader src={imageSource} alt="Image description" />
                </AspectRatio>
                <Separator orientation="horizontal" className="my-2" />

                <CardContent className=" flex flex-col gap-2 pt-6 pb-0 px-0 m-3 relative">
                    <Logo logo_url={data.logo_url} />
                    <div>
                        {
                            categories?.map((item: any, i: number) =>
                                <Label key={i} className="cursor-pointer opacity-50" >{item} </Label>)
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
            <Card className=" inset-0 opacity-100 hide-card absolute bottom-0 left-0 w-full bg-[#EDF1F3] bg-opacity-96 text-white p-4 transform translate-y-full transition-transform duration-500 ease-in-out">
            </Card>
            <Card className="flex flex-col justify-between description h-[50%] absolute bottom-0 left-0 w-full p-4 transform translate-y-full transition-transform duration-1000 ease-in-out  ">
                <Label className=" flex-grow multiline-ellipsis leading-relaxed">{data.description}</Label>
                <Link
                    href={"https://tenxerlabs.com/livebench/labs/bldc-motor-control-evaluation-board-eval-6edl7141-foc-3sh/"}
                    target="_blank"
                    className="text-primary flex justify-end  items-center p-5"
                >
                    <Label
                        className="flex justify-end gap-3 items-center cursor-pointer"
                    >
                        <CircleAlert />
                        Know more
                    </Label>
                </Link>

            </Card>
            <div className={`launch absolute sm:px-8 flex ${isAdmin?"justify-between":"justify-end"} w-full  h-10 top-10 left-0 opacity-0 transition-opacity duration-500 ease-in-out`}>
                    {isAdmin ?
                        <>
                            <Link
                                href={`${host}/builder?APP=${data.application_id._id}&FORM_ID=${data._id}`}
                                target="_blank"
                            >
                                <Button
                                    className=" rounded-full cursor-pointer h-full "
                                    variant="outline"
                                >
                                    Edit Lab
                                    <ArrowUpRight />
                                </Button>
                            </Link>

                            <Separator orientation="vertical" className=" bg-primary" />
                        </> : <></>}

                    <Link
                        href={`${host}/app/${data.uniq_name}`}
                        target="_blank"
                    >
                        <Button
                            className=" rounded-full cursor-pointer h-full "
                        >
                            Launch Labs
                            <ArrowUpRight />
                        </Button>
                    </Link>
            </div>

        </Card>
    )
}