import { TenxerLabsWhite, LinkedInWhite, TwitterWhite } from "@/components/logos"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

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
                            <LinkedInWhite />
                            <TwitterWhite />
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <Separator className="my-4 opacity-50"/>
            </div>

        </footer>
    )
}