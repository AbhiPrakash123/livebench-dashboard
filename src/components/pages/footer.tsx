import { TenxerLabsWhite, LinkedInWhite, TwitterWhite } from "@/components/logos"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#03013C] py-10 m-0">
            <div className="container ">
                <div className="flex justify-between">
                    <div className="w-[260px] flex flex-col gap-6">
                        <TenxerLabsWhite />
                        <Label style={{ color: "#F3F4F6" }} className=" font-thin">
                            Turbocharge your IC Evaluation Journey
                            with 24/7 Remote Labs
                        </Label>
                        <div className="flex gap-2">
                            <Link href="https://linkedin.com/company/tenxer-labs" target="_blank">
                                <LinkedInWhite />
                            </Link>
                            <Link href="https://twitter.com/tenxerlabs" target="_blank">
                                <TwitterWhite />

                            </Link>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <Separator className="my-4 opacity-50" />
            </div>

        </footer>
    )
}