"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

import HeaderForm from "@/components/auth/HeaderForm";
import BackButton from "@/components/auth/BackButton";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
}

export default function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref
}: CardWrapperProps) {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <HeaderForm label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton
                    href={backButtonHref}
                    label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}