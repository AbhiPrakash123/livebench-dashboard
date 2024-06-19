import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function FilterType() {

    return (
        <Select defaultValue="latest">
            <SelectTrigger className=" w-32 border-2 rounded-full px-8">
                <SelectValue placeholder="type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="latest">
                    <Label>Latest</Label>
                </SelectItem>
                <SelectItem value="populer">
                    <Label>Populer</Label>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}