import { Label } from "@/components/ui/label"
import { Rocket } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function HeroPage() {
    return (
        <div className=" h-[700px] relative mt-10 -z-10">
            <div className="flex flex-col gap-4 items-center">
                <div>
                    <div className=" text-primary flex items-center gap-1 my-1">
                        <Rocket />
                        <Label >Turbocharge your IC Evaluation Journey</Label>
                    </div>
                    <Separator className=" bg-primary" />

                </div>

                <h1 className=" text-primary scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-center">
                    The world’s only physical
                </h1>
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-center">
                    hardware on a real-time cloud
                </h1>
                <h1 className=" text-primary scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-center">
                    evaluation platform
                </h1>
                <div className="flex flex-col items-center">
                    <Label className="scroll-m-20 text-secondary text-base text-center">
                        Save the hustle of procurement and set-up of evaluation kits with our library of 3000+ labs
                    </Label>
                    <Label className="scroll-m-20 text-secondary text-base text-center">
                        from the world’s leading brands
                    </Label>
                </div>
            </div>
            <TenxerDesign />
        </div>
    )
}

const TenxerDesign = () => {
    return (
        <svg className=" absolute top-0 -z-40" width="100%" height="927" viewBox="0 0 1440 927" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
                <path d="M1448 -1.41859e-05C1448 248.702 1122.29 450.315 720.5 450.315C318.713 450.315 -7 248.702 -7 -1.41859e-05" stroke="url(#paint0_linear_1_2)" strokeWidth="2" />
                <path d="M1448 105.218C1448 297.397 1122.29 453.189 720.5 453.189C318.713 453.189 -7 297.397 -7 105.218" stroke="url(#paint1_linear_1_2)" strokeWidth="2" />
                <path d="M1448 210.431C1448 346.087 1122.29 456.058 720.5 456.058C318.713 456.058 -7 346.087 -7 210.431" stroke="url(#paint2_linear_1_2)" strokeWidth="2" />
                <path d="M1448 315.647C1448 394.779 1122.29 458.929 720.5 458.929C318.713 458.929 -7 394.779 -7 315.647" stroke="url(#paint3_linear_1_2)" strokeWidth="2" />
                <path d="M1448 420.862C1448 443.471 1122.29 461.799 720.5 461.799C318.713 461.799 -7 443.471 -7 420.862" stroke="url(#paint4_linear_1_2)" strokeWidth="2" />
                <path d="M1448 926.282C1448 677.579 1122.29 475.966 720.5 475.966C318.713 475.966 -7 677.579 -7 926.282" stroke="url(#paint5_linear_1_2)" strokeWidth="2" />
                <path d="M1448 821.064C1448 628.884 1122.29 473.093 720.5 473.093C318.713 473.093 -7 628.884 -7 821.064" stroke="url(#paint6_linear_1_2)" strokeWidth="2" />
                <path d="M1448 715.85C1448 580.194 1122.29 470.223 720.5 470.223C318.713 470.223 -7 580.194 -7 715.85" stroke="url(#paint7_linear_1_2)" strokeWidth="2" />
                <path d="M1448 610.635C1448 531.502 1122.29 467.353 720.5 467.353C318.713 467.353 -7 531.502 -7 610.635" stroke="url(#paint8_linear_1_2)" strokeWidth="2" />
                <path d="M1448 505.42C1448 482.81 1122.29 464.482 720.5 464.482C318.713 464.482 -7 482.81 -7 505.42" stroke="url(#paint9_linear_1_2)" strokeWidth="2" />
            </g>
            <rect x="680.5" y="426.5" width="79" height="78" rx="39" fill="#08037F" />
            <rect x="680.5" y="426.5" width="79" height="78" rx="39" fill="url(#paint10_radial_1_2)" style={{ mixBlendMode: "soft-light" }} />
            <rect x="680.5" y="426.5" width="79" height="78" rx="39" stroke="#D0D6FF" />
            <path d="M710.056 451.13C709.771 451.13 709.54 451.4 709.54 451.733C709.54 452.068 709.771 452.339 710.056 452.339C710.198 452.339 710.327 452.272 710.42 452.163C710.42 452.163 710.42 452.161 710.421 452.161C710.514 452.051 710.572 451.9 710.572 451.733C710.572 451.4 710.34 451.13 710.056 451.13ZM710.056 478.66C709.771 478.66 709.54 478.932 709.54 479.265C709.54 479.6 709.771 479.87 710.056 479.87C710.34 479.87 710.572 479.6 710.572 479.265C710.572 478.932 710.34 478.66 710.056 478.66ZM719.628 468.768C719.502 468.964 719.363 469.152 719.214 469.325L711.383 478.506C711.48 478.736 711.535 478.993 711.535 479.265C711.535 480.222 710.871 481 710.056 481C709.24 481 708.576 480.222 708.576 479.265C708.576 478.31 709.24 477.532 710.056 477.532C710.288 477.532 710.507 477.596 710.702 477.708L718.533 468.527C718.655 468.384 718.769 468.228 718.873 468.066C718.887 468.043 718.903 468.021 718.919 468.001C719.467 467.321 719.769 466.434 719.769 465.499C719.769 464.566 719.467 463.677 718.919 462.997V462.996C718.899 462.974 718.883 462.951 718.869 462.927C718.767 462.767 718.654 462.613 718.533 462.472L710.702 453.291C710.507 453.404 710.288 453.468 710.056 453.468C709.24 453.468 708.576 452.69 708.576 451.733C708.576 450.778 709.24 450 710.056 450C710.871 450 711.535 450.778 711.535 451.733C711.535 452.005 711.48 452.262 711.385 452.492L719.214 461.674C719.363 461.848 719.502 462.034 719.628 462.232C720.339 463.12 720.732 464.28 720.732 465.499C720.732 466.719 720.339 467.878 719.628 468.768Z" fill="white" />
            <path d="M705.48 451.13C705.195 451.13 704.964 451.4 704.964 451.733C704.964 452.068 705.195 452.339 705.48 452.339C705.622 452.339 705.751 452.272 705.844 452.163C705.845 452.163 705.845 452.161 705.845 452.161H705.846C705.939 452.051 705.996 451.9 705.996 451.733C705.996 451.4 705.764 451.13 705.48 451.13ZM705.48 478.66C705.195 478.66 704.964 478.932 704.964 479.265C704.964 479.6 705.195 479.87 705.48 479.87C705.764 479.87 705.996 479.6 705.996 479.265C705.996 478.932 705.764 478.66 705.48 478.66ZM715.052 468.768C714.926 468.964 714.788 469.151 714.639 469.325L706.808 478.506C706.904 478.736 706.96 478.993 706.96 479.265C706.96 480.222 706.296 481 705.48 481C704.664 481 704 480.222 704 479.265C704 478.31 704.664 477.532 705.48 477.532C705.712 477.532 705.931 477.596 706.128 477.708L713.958 468.527C714.08 468.384 714.194 468.228 714.297 468.066C714.311 468.043 714.327 468.021 714.344 468.001C714.891 467.321 715.193 466.434 715.193 465.499C715.193 464.566 714.891 463.677 714.344 462.997L714.343 462.996C714.325 462.974 714.307 462.951 714.293 462.927C714.192 462.767 714.079 462.615 713.957 462.472L706.129 453.292L706.128 453.291C706.082 453.317 706.036 453.34 705.988 453.362C705.984 453.364 705.98 453.367 705.976 453.367C705.924 453.389 705.871 453.407 705.817 453.421C705.79 453.429 705.763 453.435 705.735 453.441C705.707 453.448 705.679 453.452 705.651 453.456C705.623 453.46 705.595 453.463 705.566 453.465C705.538 453.467 705.509 453.468 705.48 453.468C705.225 453.468 704.983 453.392 704.774 453.258C704.649 453.177 704.534 453.076 704.434 452.959C704.165 452.645 704 452.212 704 451.733C704 451.256 704.165 450.823 704.434 450.509C704.534 450.392 704.649 450.291 704.774 450.21C704.983 450.076 705.225 450 705.48 450C705.735 450 705.976 450.076 706.186 450.21C706.311 450.291 706.426 450.392 706.526 450.509C706.795 450.823 706.96 451.256 706.96 451.733C706.96 451.767 706.958 451.802 706.957 451.834C706.956 451.869 706.953 451.901 706.949 451.934C706.946 451.967 706.942 451.999 706.937 452.032C706.932 452.065 706.927 452.097 706.92 452.128C706.895 452.256 706.856 452.377 706.808 452.492L706.81 452.494L714.639 461.674C714.788 461.848 714.926 462.034 715.052 462.232C715.765 463.12 716.156 464.28 716.156 465.499C716.156 466.719 715.765 467.878 715.052 468.768Z" fill="white" />
            <path d="M714.632 451.13C714.347 451.13 714.116 451.4 714.116 451.735C714.116 452.068 714.347 452.34 714.632 452.34C714.773 452.34 714.902 452.273 714.996 452.161C715.089 452.051 715.147 451.903 715.147 451.735C715.147 451.4 714.915 451.13 714.632 451.13ZM715.008 478.851C715.003 478.845 714.995 478.836 714.989 478.827C714.894 478.724 714.769 478.66 714.632 478.66C714.347 478.66 714.116 478.931 714.116 479.265C714.116 479.6 714.347 479.87 714.632 479.87C714.915 479.87 715.147 479.6 715.147 479.265C715.147 479.105 715.094 478.96 715.008 478.851ZM727.367 462.542C727.358 462.556 727.346 462.568 727.333 462.577C727.225 462.702 727.123 462.826 727.03 462.96C727.025 462.966 727.021 462.973 727.014 462.98C726.502 463.707 726.197 464.633 726.197 465.652C726.197 466.671 726.502 467.596 727.014 468.323C727.021 468.329 727.025 468.337 727.03 468.343C727.123 468.477 727.225 468.602 727.333 468.724C727.346 468.734 727.358 468.748 727.367 468.762L735.657 479.127C736.018 479.572 736.092 479.976 735.888 480.34C735.685 480.697 735.244 480.874 734.577 480.874H730.776C729.436 480.874 728.507 480.48 727.994 479.691L722.117 471.285L715.962 478.506C716.057 478.736 716.11 478.994 716.11 479.265C716.11 480.224 715.447 481 714.632 481C713.816 481 713.153 480.224 713.153 479.265C713.153 478.31 713.816 477.53 714.632 477.53C714.863 477.53 715.084 477.594 715.28 477.706L723.109 468.527C723.23 468.384 723.347 468.228 723.448 468.066C723.462 468.043 723.48 468.021 723.497 467.999C724.044 467.323 724.344 466.433 724.344 465.501C724.344 464.566 724.044 463.677 723.497 462.997H723.494V462.996C723.476 462.976 723.46 462.951 723.444 462.927C723.343 462.767 723.23 462.613 723.109 462.472L715.281 453.294C715.085 453.406 714.866 453.47 714.632 453.47C713.816 453.47 713.153 452.69 713.153 451.735C713.153 450.778 713.816 450 714.632 450C715.447 450 716.11 450.778 716.11 451.735C716.11 452.005 716.057 452.264 715.962 452.494L722.235 459.85L727.994 451.61C728.507 450.823 729.436 450.429 730.776 450.429H734.577C735.244 450.429 735.685 450.605 735.888 450.963C736.092 451.326 736.018 451.729 735.657 452.175L727.367 462.542Z" fill="white" />
            <g filter="url(#filter0_dd_1_2)">
                <rect x="320" y="361" width="56" height="55" rx="27.5" fill="white" shapeRendering="crispEdges" />
                <path d="M347 395.5H340C339.47 395.5 338.961 395.289 338.586 394.914C338.211 394.539 338 394.03 338 393.5V383.5C338 382.97 338.211 382.461 338.586 382.086C338.961 381.711 339.47 381.5 340 381.5H345M345 381.5L342 378.5M345 381.5L342 384.5M349 381.5H356C356.53 381.5 357.039 381.711 357.414 382.086C357.789 382.461 358 382.97 358 383.5V393.5C358 394.03 357.789 394.539 357.414 394.914C357.039 395.289 356.53 395.5 356 395.5H351M351 395.5L354 398.5M351 395.5L354 392.5M351 388.5C351 390.157 349.657 391.5 348 391.5C346.343 391.5 345 390.157 345 388.5C345 386.843 346.343 385.5 348 385.5C349.657 385.5 351 386.843 351 388.5Z" stroke="#2F1EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g filter="url(#filter1_dd_1_2)">
                <rect x="895" y="402" width="56" height="56" rx="28" fill="white" shapeRendering="crispEdges" />
                <path d="M920 430L922 432L926 428M923 440C923 440 931 436 931 430V423L923 420L915 423V430C915 436 923 440 923 440Z" stroke="#2F1EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g filter="url(#filter2_dd_1_2)">
                <rect x="442" y="440" width="56" height="55" rx="27.5" fill="white" shapeRendering="crispEdges" />
                <path d="M475 473.5V467.5C475 466.174 474.473 464.902 473.536 463.964C472.598 463.027 471.326 462.5 470 462.5C468.674 462.5 467.402 463.027 466.464 463.964C465.527 464.902 465 466.174 465 467.5V473.5M475 473.5H465M475 473.5C475.53 473.5 476.039 473.711 476.414 474.086C476.789 474.461 477 474.97 477 475.5V477.5H463V475.5C463 474.97 463.211 474.461 463.586 474.086C463.961 473.711 464.47 473.5 465 473.5M479 467.5H480M476.5 460L476 460.5M460 467.5H461M470 457.5V458.5M462.929 460.429L463.636 461.136M470 467.5V473.5" stroke="#2F1EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g filter="url(#filter3_dd_1_2)">
                <rect x="986" y="490" width="56" height="56" rx="28" fill="white" shapeRendering="crispEdges" />
                <path d="M1007 516H1006C1005.47 516 1004.96 515.789 1004.59 515.414C1004.21 515.039 1004 514.53 1004 514V510C1004 509.47 1004.21 508.961 1004.59 508.586C1004.96 508.211 1005.47 508 1006 508H1022C1022.53 508 1023.04 508.211 1023.41 508.586C1023.79 508.961 1024 509.47 1024 510V514C1024 514.53 1023.79 515.039 1023.41 515.414C1023.04 515.789 1022.53 516 1022 516H1021M1007 520H1006C1005.47 520 1004.96 520.211 1004.59 520.586C1004.21 520.961 1004 521.47 1004 522V526C1004 526.53 1004.21 527.039 1004.59 527.414C1004.96 527.789 1005.47 528 1006 528H1022C1022.53 528 1023.04 527.789 1023.41 527.414C1023.79 527.039 1024 526.53 1024 526V522C1024 521.47 1023.79 520.961 1023.41 520.586C1023.04 520.211 1022.53 520 1022 520H1021M1008 512H1008.01M1008 524H1008.01M1017 518C1017 519.657 1015.66 521 1014 521M1017 518C1017 516.343 1015.66 515 1014 515M1017 518H1018M1014 521C1012.34 521 1011 519.657 1011 518M1014 521V522M1011 518C1011 516.343 1012.34 515 1014 515M1011 518H1010M1014 515V514M1017 515L1016.12 515.88M1011.88 520.12L1011 521M1017 521L1016.12 520.12M1011.88 515.88L1011 515" stroke="#2F1EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g filter="url(#filter4_dd_1_2)">
                <rect x="264" y="554" width="56" height="56" rx="28" fill="white" shapeRendering="crispEdges" />
                <path d="M285 574H286C286.796 574 287.559 574.316 288.121 574.879C288.684 575.441 289 576.204 289 577M289 577C289 576.204 289.316 575.441 289.879 574.879C290.441 574.316 291.204 574 292 574H293M289 577V587M293 590H292C291.204 590 290.441 589.684 289.879 589.121C289.316 588.559 289 587.796 289 587M289 587C289 587.796 288.684 588.559 288.121 589.121C287.559 589.684 286.796 590 286 590H285M285 586H284C283.47 586 282.961 585.789 282.586 585.414C282.211 585.039 282 584.53 282 584V580C282 579.47 282.211 578.961 282.586 578.586C282.961 578.211 283.47 578 284 578H285M293 578H300C300.53 578 301.039 578.211 301.414 578.586C301.789 578.961 302 579.47 302 580V584C302 584.53 301.789 585.039 301.414 585.414C301.039 585.789 300.53 586 300 586H293" stroke="#2F1EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g filter="url(#filter5_dd_1_2)">
                <rect x="1127" y="398" width="56" height="56" rx="28" fill="white" shapeRendering="crispEdges" />
                <path d="M1156 421L1152 417L1148 421L1152 425M1160 425L1164 429L1160 433L1156 429M1159 422L1162 419M1152 435C1152 433.409 1151.37 431.883 1150.24 430.757C1149.12 429.632 1147.59 429 1146 429M1151 426L1155 430L1161 424L1157 420L1151 426Z" stroke="#2F1EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_dd_1_2" x="317" y="359" width="62" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0117647 0 0 0 0 0.498039 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0117647 0 0 0 0 0.498039 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                </filter>
                <filter id="filter1_dd_1_2" x="892" y="400" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                </filter>
                <filter id="filter2_dd_1_2" x="439" y="438" width="62" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                </filter>
                <filter id="filter3_dd_1_2" x="983" y="488" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                </filter>
                <filter id="filter4_dd_1_2" x="261" y="552" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                </filter>
                <filter id="filter5_dd_1_2" x="1124" y="396" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_2" x1="-7" y1="225.158" x2="1448" y2="225.158" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_2" x1="-7" y1="279.203" x2="1448" y2="279.203" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_2" x1="-7" y1="333.245" x2="1448" y2="333.245" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint3_linear_1_2" x1="-7" y1="387.288" x2="1448" y2="387.288" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint4_linear_1_2" x1="-7" y1="441.331" x2="1448" y2="441.331" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint5_linear_1_2" x1="-7" y1="701.124" x2="1448" y2="701.124" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint6_linear_1_2" x1="-7" y1="647.078" x2="1448" y2="647.078" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint7_linear_1_2" x1="-7" y1="593.037" x2="1448" y2="593.037" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint8_linear_1_2" x1="-7" y1="538.994" x2="1448" y2="538.994" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint9_linear_1_2" x1="-7" y1="484.951" x2="1448" y2="484.951" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#1E0CF5" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#180AC2" />
                    <stop offset="0.96" stopColor="#12078F" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint10_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(706 443.775) rotate(58.9976) scale(52.4196 52.7333)">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>

    )
}